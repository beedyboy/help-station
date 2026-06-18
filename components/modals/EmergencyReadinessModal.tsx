import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constant";

export const EmergencyReadinessModal = () => {
  return (
    <div className="flex w-full h-full justify-center items-center bg-white rounded-2xl md:shadow relative">
      <div className="hidden md:flex justify-center items-center w-[357px] h-full bg-[#f9f9fc] absolute left-0 top-0">
        <Image
          src="images/emergency_call_pana.svg"
          alt="Emergency call illustration"
          width={357}
          height={470}
        />
      </div>

      <div className="md:h-[268px] h-[300px]  flex flex-col gap-6 md:absolute left-[369px] top-[101px]">
        <div className="flex flex-col gap-2">
          <div className="">
            <Link href={ROUTES.home} className="flex items-center space-x-3">
              <Image
                src="/images/help_station_logo.svg"
                alt="Help Station Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <h1 className="text-[#1b1c20] text-5xl font-bold font-['BR Firma']">
            How prepared are you for an emergency
          </h1>
          <p className="text-[#70727f] text-base font-['Source Sans Pro']">
            Take our risk assessment to find out.
          </p>
        </div>
        <Link href={ROUTES.herat}>
          <button className="w-[158px] h-14 bg-[#3bad6b] text-white text-lg font-bold rounded-xl">
            Find out
          </button>
        </Link>
      </div>
    </div>
  );
};
