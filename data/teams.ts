export interface TeamMember {
  name: string;
  position: string;
  linkedIn: string;
  normalImage: string;
  hoverImage: string;
}

export interface Team {
  name: string;
  members: TeamMember[];
  subtitle?: string;
}

export const teams: Team[] = [
  {
    name: "Directors",
    subtitle: "Guiding our vision and strategy",
    members: [
      {
        name: "John Doe",
        position: "CEO",
        linkedIn: "https://www.linkedin.com/in/johndoe",
        normalImage: "/1.png",
        hoverImage: "/2.png",
      },
      {
        name: "Jane Smith",
        position: "CTO",
        linkedIn: "https://www.linkedin.com/in/janesmith",
        normalImage: "/avatar.png",
        hoverImage: "/avatar.png",
      },
    ],
  },
  {
    name: "Admin",
    subtitle: "Keeping the lights on",
    members: [
      {
        name: "Alice Johnson",
        position: "Office Manager",
        linkedIn: "https://www.linkedin.com/in/alicejohnson",
        normalImage: "/avatar.png",
        hoverImage: "/avatar.png",
      },
      {
        name: "Alice Johnsadason",
        position: "Office Manager",
        linkedIn: "https://www.linkedin.com/in/alicejohnson",
        normalImage: "/avatar.png",
        hoverImage: "/avatar.png",
      },
      {
        name: "Alice Josadhnson",
        position: "Office Manager",
        linkedIn: "https://www.linkedin.com/in/alicejohnson",
        normalImage: "/avatar.png",
        hoverImage: "/avatar.png",
      },
      {
        name: "Alice Johsadnson",
        position: "Office Manager",
        linkedIn: "https://www.linkedin.com/in/alicejohnson",
        normalImage: "/avatar.png",
        hoverImage: "/avatar.png",
      },
      {
        name: "Alice Joshnson",
        position: "Office Manager",
        linkedIn: "https://www.linkedin.com/in/alicejohnson",
        normalImage: "/avatar.png",
        hoverImage: "/avatar.png",
      },
    ],
  },
  {
    name: "Labs",
    subtitle: "Innovating the future",
    members: [
      {
        name: "Bob Williams",
        position: "Lead Researcher",
        linkedIn: "https://www.linkedin.com/in/bobwilliams",
        normalImage: "/avatar.png",
        hoverImage: "/avatar.png",
      },
      // Add more labs team members...
    ],
  },
  {
    name: "Academy",
    subtitle: "Educating the next generation",
    members: [
      {
        name: "Carol Brown",
        position: "Head of Training",
        linkedIn: "https://www.linkedin.com/in/carolbrown",
        normalImage: "/avatar.png",
        hoverImage: "/avatar.png",
      },
      // Add more academy team members...
    ],
  },
  {
    name: "Marketing",
    subtitle: "Spreading the word",
    members: [
      {
        name: "David Green",
        position: "Marketing Director",
        linkedIn: "https://www.linkedin.com/in/davidgreen",
        normalImage: "/avatar.png",
        hoverImage: "/avatar.png",
      },
      // Add more marketing team members...
    ],
  },
];
