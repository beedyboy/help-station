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
    <div className="relative py-7 w-full flex justify-center items-center">
      <div className="absolute -z-20 h-[100%] bg-[#e1efe6] md:w-[380px] w-[200px] right-0 top-0"></div>
      <div className="absolute -z-10 h-[100%] bg-[#c4d9cc] md:w-[170px] w-[75px] right-12 md:right-[6rem] top-0"></div>

      <div className="z-[1] md:w-[90%] flex flex-col  justify-center items-center md:flex-row gap-3 w-full">
        <div className="md:w-[40%] px-8 py-2  w-full ">
          <p className="  font-bold md:text-5xl pr-8 md:pr-0 md:leading-[50px] text-3xl leading-9">
            Get help In 4 easy steps
          </p>
          <p className="text-[#70727F] text-sm leading-5">
            Get help in 4 easy steps with our 24/7 helpline. Quick, simple, and
            always available!
          </p>
        </div>
        <div className="md:w-[60%] w-full md:p-4 p-6  grid grid-cols-1 md:items-end md:justify-end md:grid-cols-[1fr_2fr] gap-6">
          {helpDetails.map(
            (
              content: { icon: React.ReactNode; header: string; text: string },
              index: number
            ) => {
              return (
                <div
                  key={index}
                  className="hover:text-[#fff] text-black hover:bg-btnColor cursor-pointer w-full p-4 h-[259px] md:w-[264px] md:h-[230px] md:p-4 flex md:gap-2 gap-4 flex-col rounded-xl shadow-md md:shadow-[0px_10px_10px_10px_rgba(0,0,0,0.2)] bg-[#fff] "
                >
                  <div className="bg-btnColor hover:bg-[#AEDEBC] h-[45px] w-[45px] rounded-md flex justify-center items-center">
                    {content.icon}
                  </div>
                  <p className="text-xl hover:text-[#fff]  font-semibold">
                    {content.header}
                  </p>
                  <p className="hover:text-[#fff] text-sm text-[#70727F]">
                    {content.text}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
