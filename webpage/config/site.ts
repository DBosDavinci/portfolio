export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portfolio",
  description: "Daniel Bos portfolio 2025.",
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
  ]
};
