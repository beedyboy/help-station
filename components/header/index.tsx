import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

function Header({
  children,
  aboutImg,
}: {
  children: ReactNode;
  aboutImg: StaticImageData;
}) {
  return (
    <div>
      <section className="relative h-[400px] flex justify-center items-center w-full">
        <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-[400px]">
          <Image
            src={aboutImg}
            alt="contact_us"
            style={{
              width: "100%",
              background: "#3BAD6B",
              objectFit: "contain",
              height: "400px",
            }}
          />
        </div>

        {children}
      </section>
    </div>
  );
}

export default Header;
