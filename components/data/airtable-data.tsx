import { base } from "@/lib/airtable";
import { Member } from "../sections/team/team-page";

interface LogoFields {
  "Logo Image"?: { url: string }[];
}

interface AdvisoryFields {
  Name: string;
  Title: string;
  Description: string;
  Logos?: string[];
}

export async function fetchTeamMembers(): Promise<Member[]> {
  const tableName = "Members";
  const records = await base(tableName)
    .select({
      fields: [
        "Name Website",
        "Title Website",
        "Teams Website",
        "LinkedIn Url",
        "Headshot Website",
      ],
      view: "Website",
    })
    .all();

  return records.map((record) => ({
    id: record.id,
    name: (record.fields["Name Website"] as string) || "",
    title: (record.fields["Title Website"] as string) || "",
    team: (record.fields["Teams Website"] as string) || "",
    linkedIn: (record.fields["LinkedIn Url"] as string) || "",
    image:
      Array.isArray(record.fields["Headshot Website"]) &&
      record.fields["Headshot Website"][0]
        ? record.fields["Headshot Website"][0].url
        : "/avatar.png",
  }));
}

export async function fetchAdvisoryPanel() {
  const advisoryTable = "Advisory Panel";
  const logosTable = "Logos";

  const advisorRecords = await base(advisoryTable)
    .select({
      fields: ["Name", "Title", "Description", "Logos"],
      view: "Website",
    })
    .all();

  const logoRecordIds = advisorRecords.flatMap(
    (record) => (record.fields as unknown as AdvisoryFields)["Logos"] || [],
  );

  const logoRecords = await base(logosTable)
    .select({
      filterByFormula: `OR(${logoRecordIds.map((id) => `RECORD_ID()='${id}'`).join(",")})`,
    })
    .all();

  const logoMap: { [key: string]: string | null } = logoRecords.reduce(
    (acc, record) => {
      const fields = record.fields as LogoFields;
      acc[record.id] = fields["Logo Image"]?.[0]?.url || null;
      return acc;
    },
    {} as { [key: string]: string | null },
  );

  const formattedRecords = advisorRecords.map((record) => {
    const fields = record.fields as unknown as AdvisoryFields;
    return {
      id: record.id,
      name: fields.Name,
      title: fields.Title,
      description: fields.Description,
      logo: (fields.Logos || []).map((logoId) => logoMap[logoId] || null),
    };
  });

  return formattedRecords;
}

export async function fetchCareers() {
  const tableName = "Careers";
  const records = await base(tableName)
    .select({
      fields: [
        "Display Name",
        "Status",
        "Notion Link",
        "Duration",
        "Type",
        "Mode",
        "Apply",
        "Teams Website",
        "Cover Website",
      ],
    })
    .all();

  const activeRecords = records.filter(
    (record) => record.fields["Status"] === "ACTIVE",
  );
  const formattedRecords = activeRecords.map((record) => ({
    name: record.fields["Display Name"] as string | "",
    team: record.fields["Teams Website"] as string | "",
    duration: record.fields["Duration"] as string | "",
    type: record.fields["Type"] as string | "",
    mode: record.fields["Mode"] as string | "",
    notion: record.fields["Notion Link"] as string | "",
    apply: record.fields["Apply"] as string | "",
    image:
      Array.isArray(record.fields["Cover Website"]) &&
      record.fields["Cover Website"][0]
        ? record.fields["Cover Website"][0].url
        : "",
  }));

  return formattedRecords;
}

export async function fetchLogos() {
  const tableName = "Logos";
  const records = await base(tableName)
    .select({
      fields: ["Name", "Logo Image", "Status"],
    })
    .all();

  const activeRecords = records.filter(
    (record) => record.fields["Status"] === "ACTIVE",
  );
  const formattedRecords = activeRecords.map((record) => ({
    id: record.id,
    name: record.fields["Name"] as string | "",
    logoImage:
      (record.fields["Logo Image"] as unknown as {
        url: string;
        width: number;
        height: number;
      }[]) || [],
  }));

  return formattedRecords;
}

export async function fetchYoutubeVideos() {
  const tableName = "YT Videos";
  const records = await base(tableName)
    .select({
      fields: ["Video Id", "Status", "Url"],
    })
    .all();

  const activeRecords = records.filter(
    (record) => record.fields["Status"] === "ACTIVE",
  );
  const formattedRecords = activeRecords.map((record) => ({
    id: record.id,
    thumbnail:
      `https://img.youtube.com/vi/${record.fields["Video Id"]}/maxresdefault.jpg` as
        | string
        | "",
    url: record.fields["Video Id"] as string | "",
  }));

  return formattedRecords;
}

export async function fetchNews() {
  const tableName = "News";
  const records = await base(tableName)
    .select({
      fields: ["Title", "Status", "Date", "Cover", "Details", "Read More"],
      view: "Website",
    })
    .all();

  const activeRecords = records.filter(
    (record) => record.fields["Status"] === "ACTIVE",
  );
  const formattedRecords = activeRecords.map((record) => ({
    id: record.id,
    title: record.fields["Title"] as string | "",
    date: record.fields["Date"] as string | "",
    image:
      Array.isArray(record.fields["Cover"]) && record.fields["Cover"][0]
        ? record.fields["Cover"][0].url
        : "",
    description: record.fields["Details"] as string | "",
    readMore: record.fields["Read More"] as string | "",
  }));

  return formattedRecords;
}
