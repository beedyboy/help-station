"use client";
import { menuItems } from "@/constants/menuItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  const isActiveLink = (href: string) => pathname === href;

  return (
    <header className="md:p-4 p-2 text-white w-full bg-white">
      <nav className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/help_station_logo.svg"
            alt="Help Station Logo"
            width={50}
            height={50}
          />
        </Link>

        <button
          className="md:hidden text-gray-500 rounded-lg p-2 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex flex-col md:flex-row md:space-x-8">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.dropdownItems ? (
                  <>
                    <button
                      className={`flex items-center py-2 px-3 ${
                        isActiveLink(item.href)
                          ? "text-primary-4"
                          : "text-secondary"
                      } hover:text-blue-400 focus:outline-none`}
                    >
                      {item.name}
                      <svg
                        className="w-4 h-4 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div className="hidden group-hover:block absolute z-10 mt-2 w-44 bg-white rounded-lg shadow-lg">
                      <ul className="py-2 text-gray-700">
                        {item.dropdownItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-2 px-3 ${
                      isActiveLink(item.href)
                        ? "text-primary-4"
                        : "text-secondary"
                    } hover:text-blue-400`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/get-started"
            className="mt-4 md:mt-0 text-white bg-primary-4 hover:bg-primary rounded-lg px-4 py-2"
          >
            Register as Partner
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
