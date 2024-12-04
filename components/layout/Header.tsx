"use client";

import { menuItems } from "@/constants/menuItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import is from "typescript";

const Menu = () => {
  const pathname = usePathname();
  const isActiveLink = (href: string) => pathname === href;

  return (
    <ul className="flex flex-col md:flex-row md:space-x-8">
      {menuItems.map((item) => (
        <li key={item.name} className="relative group">
          {item.dropdownItems ? (
            <div className="relative">
              <button
                className={`flex items-center py-2 px-3 ${
                  isActiveLink(item.href) ? "text-primary-4" : "text-secondary"
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
              <div className="absolute hidden group-hover:block top-full w-44 bg-white rounded-lg shadow-lg z-10">
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
            </div>
          ) : (
            <Link
              href={item.href}
              className={`block py-2 px-3 ${
                isActiveLink(item.href) ? "text-primary-4" : "text-secondary"
              } hover:text-blue-400`}
            >
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="text-white w-full fixed z-20 top-0 start-0 border-b border-gray-200">
        <div className="inline-flex justify-center items-center bg-secondary h-[30px] w-full text-white gap-2 p-2">
          <Image
            src="/icons/ic_outline-emergency.svg"
            alt="Emergency"
            width={20}
            height={20}
          />
          <span>How prepared are you for an emergency</span>
          <Link href="/" className="text-primary-4 space-x-3">
            Find Out
          </Link>
        </div>
        <div className="md:p-4 p-2 bg-white">
          <nav className="max-w-screen-xl flex flex-col md:flex-row md:items-center justify-between md:mx-auto p-4 ">
            <div className="flex justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/help_station_logo.svg"
                  alt="Help Station Logo"
                  width={50}
                  height={50}
                />
              </Link>{" "}
              <Image
                src="/icons/menu.svg"
                alt="menu"
                width={20}
                height={20}
                className="md:hidden"
                onClick={toggleMenu}
              />
            </div>

            <div className="md:flex hidden md:flex-row flex-col md:items-center md:space-x-8">
              <Menu />
              <Link
                href="/get-started"
                className="mt-4 md:mt-0 text-white bg-primary-4 hover:bg-primary rounded-lg px-4 py-2"
              >
                Register as Partner
              </Link>
            </div>

            {isMenuOpen && (
              <div className="flex md:hidden flex-col">
                <Menu />
                <Link
                  href="/get-started"
                  className="mt-4 md:mt-0 text-white bg-primary-4 hover:bg-primary rounded-lg px-4 py-2"
                >
                  Register as Partner
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
