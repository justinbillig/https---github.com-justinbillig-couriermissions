export const site = {
  name: "Courier Missions",
  tagline: "Delivering Hope, Serving with Purpose.",
  url: "https://couriermissions.org",
  donateHref: "https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-2964",
  facebookHref: "https://facebook.com/couriermissions",
  navigation: [
    { label: "About", href: "/about/" },
    {
      label: "Our Work",
      href: "/our-work/",
      children: [
        { label: "Feeding Programs", href: "/our-work/feeding/" },
        { label: "School for the Deaf", href: "/our-work/school-for-the-deaf/" },
        { label: "Church Building", href: "/our-work/church-building/" },
        { label: "Ministry Support", href: "/our-work/ministry-support/" },
      ],
    },
    { label: "Impact", href: "/impact/" },
    { label: "Get Involved", href: "/get-involved/" },
    { label: "Contact", href: "/contact/" },
  ],
};
