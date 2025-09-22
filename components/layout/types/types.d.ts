export {};

declare global {
  interface MenuItem {
    name: string;
    href: string;
    dropdownItems?: MenuItem[];
  }

  interface Social {
    name: string;
    href: string;
    icon: string;
  }
}
