export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portfolio",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    }
  ],
  navMenuItems: [],
};
