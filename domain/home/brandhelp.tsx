import Image from "next/image";
import helpImg from "@/public/card.svg";
import { FaClock } from "react-icons/fa6";
import { RiMotorbikeFill, RiHospitalFill } from "react-icons/ri";
import { GiAmbulance } from "react-icons/gi";

export const helpDetails = [
  {
    icon: <FaClock size={24} color="black" />,
    header: "24/7 Access To HELP Centre",
    text: "This provide professional phone first- aid support & and comfort to the patient.",
  },
  {
    icon: <RiMotorbikeFill size={24} color="black" />,
    header: "Ambucycle Dispatch ",
    text: "Highly trained and equipped paramedics on motorcycle to deliver world class first-aid  intervention at the sites of incident. it is designed to beat traffic and get you help fast!    ",
  },
  {
    icon: <GiAmbulance size={24} color="black" />,
    header: "Ambulance Evacuation",
    text: "Prompt and efficient access to nearby ambulance leveraging our GPS-Based mobile/ web application.",
  },
  {
    icon: <RiHospitalFill size={24} color="black" />,
    header: "Emergency-Ready Hospital ",
    text: "Access to verified & tiered ERH that ensure  a seamless transition from emergency incident sites to hospital care  ",
  },
];

export default function BrandHelpBoard() {
  return (
    <section className="relative w-full md:h-[600px] flex items-center justify-center">
      <div className="absolute -z-10 inset-0">
        <Image
          src={helpImg}
          alt="Background image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="z-[1] flex gap-3 w-full">
        <div className="md:w-[30%] "></div>
        <div className="md:w-[60%] grid grid-cols-1 items-center justify-center md:grid-cols-[1fr_2fr] gap-6">
          {helpDetails.map(
            (
              content: { icon: React.ReactNode; header: string; text: string },
              index: number
            ) => {
              return (
                <div
                  key={index}
                  className="hover:text-[#fff] text-black hover:bg-btnColor cursor-pointer md:w-[264px] md:h-[230px] p-4 flex gap-2 flex-col rounded-xl shadow-md md:shadow-[0px_10px_10px_10px_rgba(0,0,0,0.2)] bg-[#fff] "
                >
                  <div className="bg-btnColor hover:bg-[#AEDEBC] md:h-[45px] md:w-[45px] rounded-md flex justify-center items-center">
                    {content.icon}
                  </div>
                  <p className="text-xl hover:text-[#fff]  font-semibold">
                    {content.header}
                  </p>
                  <p className="hover:text-[#fff] text-sm text-primary-1">
                    {content.text}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
