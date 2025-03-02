type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "muratcan@karacabey.dev",
  title: "Hi, I'm Murat 👋",
  // profile: "/profile.webp",
  description:
    "Hello, I'm a *software developer* with a passion for building great applications. I am currently working with *NextJS and Typescript*.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/muratcankaracabey",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/murat-can-karacabey-568a96b1/",
    },
  ],
};

export default presentation;
