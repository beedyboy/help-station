import { footerMenuItems, socials } from "@/constants/menuItems";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer className=" w-full bg-secondary flex justify-center p-4 text-white text-center">
    <div className="flex flex-col">
      <div className="flex ">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/help_station_logo2.svg"
              alt="Help Station Logo"
              width={50}
              height={50}
            />
          </Link>

          <p className="flex-wrap w-1/3 text-justify">
            HelpStation is a healthcare logistics company that leverages
            technology to provide access to quality and efficient healthcare
            services.
          </p>

          <div className="flex gap-2">
            {socials.map((social) => (
              <Link key={social.name} href={social.href}>
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-around gap-8 flex-grow md:gap-16">
          {footerMenuItems.map((item) => (
            <div key={item.category} className="flex flex-col  text-left">
              <h4 className="text-primary-4 pb-4">{item.category}</h4>
              <div className="gap-2 flex flex-col text-left">
                {item.menu.map((menuItem) => (
                  <Link
                    key={menuItem.name}
                    href={menuItem.href}
                    className="text-white"
                  >
                    {menuItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-5">
        {/* divider */}
        <hr className="border-t-2 border-[#4D4D4F] my-4" />
        <p className="pt-5 pb-5">
          Copyright &copy; HELP {new Date().getFullYear()}. All Rights Reserved.{" "}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
