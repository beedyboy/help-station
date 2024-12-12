import Image from "next/image";
import Link from "next/link";
import { footerMenuItems, socials } from "@/constants/menuItems";

const Footer: React.FC = () => (
  <div className="w-full bg-[#2a3735] px-[120px] py-[58px] flex flex-col items-start gap-2.5">
    <div className="w-full h-auto flex flex-col justify-center items-start gap-[143px]">
     
      <div className="flex flex-col md:flex-row justify-between w-full gap-[40px]">
      
        <div className="flex flex-col gap-4 w-[265px]">
          <Link href="/">
            <div className="relative w-[122px] h-[36.28px]">
              <Image
                src="/images/help_station_logo2.svg"
                alt="HelpStation Logo"
                width={122}
                height={36.28}
              />
            </div>
          </Link>
          <p className="text-white text-base font-normal leading-normal tracking-tight hidden md:flex">
            HelpStation is a healthcare logistics company that leverages
            technology to provide access to quality and efficient healthcare
            services.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-2">
            {socials.map((social) => (
              <Link key={social.name} href={social.href} target="_blank">
                <div className="relative w-[30px] h-[30px] bg-white rounded-full">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Menu Items */}
        {/* <div className="flex flex-wrap flex-col md:flex-row md:gap-[65px]">
          {footerMenuItems.map((item) => (
            <div key={item.category} className="flex flex-col md:gap-[25px]">
              <h4 className="text-[#3bad6b] text-lg font-semibold leading-[30px] tracking-tight">
                {item.category}
              </h4>
              <div className="flex flex-col gap-2">
                {item.menu.map((menuItem) => (
                  <Link key={menuItem.name} href={menuItem.href}>
                    <span className="text-white text-base font-normal leading-normal">
                      {menuItem.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div> */}
          <div className="flex flex-wrap flex-row md:gap-[65px] gap-[30px]">
          {footerMenuItems.map((item) => (
            <div
              key={item.category}
              className="flex flex-col gap-[10px] md:gap-[25px] min-w-[120px]"
            >
              <h4 className="text-[#3bad6b] text-lg font-semibold leading-[30px] tracking-tight">
                {item.category}
              </h4>
              <div className="flex flex-col gap-4 md:gap-2">
                {item.menu.map((menuItem) => (
                  <Link key={menuItem.name} href={menuItem.href}>
                    <span className="text-white text-base font-normal leading-normal">
                      {menuItem.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div> 

      <div className="w-full flex justify-center">
        <p className="text-[#9d9b9b] text-sm font-normal">
          Copyright © HELP {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
