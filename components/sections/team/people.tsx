import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  linkedIn?: string;
}

function TeamCard({ img, name, title }: TeamCardPropsType) {
  return (
    <Card className={cn("rounded-lg bg-muted text-center shadow-none")}>
      <CardHeader>
        <Avatar className="mx-auto mb-4 h-20 w-20">
          <Image
            src={img}
            width={200}
            height={200}
            alt={name}
            className="h-full w-full rounded-full"
          />
        </Avatar>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold text-primary">{name}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="mt-4 flex justify-center space-x-2">
          <Button variant="ghost" size="icon">
            <i className="fa-brands fa-twitter text-lg" />
          </Button>
          <Button variant="ghost" size="icon">
            <i className="fa-brands fa-linkedin text-lg" />
          </Button>
          <Button variant="ghost" size="icon">
            <i className="fa-brands fa-dribbble text-lg" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

const members = [
  {
    img: `https://www.material-tailwind.com/img/avatar1.jpg`,
    name: "Ryan Samuel",
    title: "Co-Founder",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar2.jpg`,
    name: "Ryan Samuel",
    title: "Co-Founder",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar5.jpg`,
    name: "Nora Hazel",
    title: "UI/UX Designer",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar4.jpg`,
    name: "Otto Gonzalez",
    title: "Marketing Specialist",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar6.jpg`,
    name: "Emma Roberts",
    title: "UI Designer",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar3.jpg`,
    name: "William Pearce",
    title: "Web Developer",
  },
  {
    img: "https://www.material-tailwind.com/image/avatar7.svg",
    name: "Bruce Mars",
    title: "UI/UX Designer",
  },
  {
    img: "https://www.material-tailwind.com/image/avatar8.svg",
    name: "Annie Sprrat",
    title: "Marketing Specialist",
  },
];

export function TeamSection12() {
  return (
    <section className="min-h-screen px-8 py-8 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-28">
          <p className="text-lg text-muted-foreground">Meet the Team</p>
          <h1 className="my-2 text-2xl font-bold text-primary lg:text-4xl">
            Behind the Success: Our Dedicated Team
          </h1>
          <p className="mx-auto w-full max-w-4xl text-muted-foreground">
            From visionary leadership to creative talent and technical wizards,
            each team member plays a pivotal role in delivering exceptional
            service and innovative solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
