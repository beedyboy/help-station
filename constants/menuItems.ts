export const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "Emergency Store", href: "https://helpstationng.bumpa.shop" },
  // { name: "Subscription Plan", href: "/subscriptions" },
  {
    name: "About Help",
    href: "#",
    dropdownItems: [
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    dropdownItems: [
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
      { name: "Report", href: "/case-studies" },
      { name: "HERAT", href: "/herat" },
    ],
  },
];

export const companyMenuItems: MenuItem[] = [
  { name: "Gallery", href: "/contact-us" },
  { name: "About Us", href: "/about-us" },
  { name: "Partners", href: "/become-a-partner" },
  { name: "Contact Help", href: "/contact-us" },
];

export const resourcesMenuItems: MenuItem[] = [
  { name: "Blog", href: "/blog" },
  { name: "F.A.Qs", href: "/faq" },
];

export const privacyAndSecurityMenuItems: MenuItem[] = [
  { name: "Privacy Policy", href: "/policy" },
  // { name: "Security Policy", href: "/policy" },
];

export const footerMenuItems: { category: string; menu: MenuItem[] }[] = [
  {
    category: "Company",
    menu: companyMenuItems,
  },
  {
    category: "Resources",
    menu: resourcesMenuItems,
  },
  {
    category: "Privacy & Security",
    menu: privacyAndSecurityMenuItems,
  },
];

export const socials: Social[] = [
  {
    name: "Twitter",
    href: "https://x.com/help_station_?s=21&t=19V3dJbyyA0Rx0GBcBebsg",
    icon: "/icons/twitter.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/HelpStation1?mibextid=LQQJ4d",
    icon: "/icons/facebook.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/helpstation.ng",
    icon: "/icons/instagram.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/help-station-ng",
    icon: "/icons/linkedin.svg",
  },
];
