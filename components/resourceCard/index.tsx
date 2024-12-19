import Link from "next/link";
import ImageTemplate from "../image";
import img from "@/public/images/help_station_about.svg";
import { GoArrowUpRight } from "react-icons/go";

const ResourceBoardCard = () => {
  return (
    <div className="w-[100%] flex flex-col gap-1">
      <div className="w-full rounded-md overflow-hidden relative h-[250px] bg-cyan-700">
        <ImageTemplate src={img} />
        <div className=" p-4 absolute h-[81px] text-white backdrop-blur-lg  w-full bottom-0 bg-[#FFFFFF4D] bg-gradient-to-r flex justify-between">
          <div>
            <p className="text-xs font-semibold leading-4">Phoneix Baker</p>
            <p className="text-sm font-normal">20 Jan 2032</p>
          </div>
          <p className="text-xs font-semibold leading-4">Report</p>
        </div>
      </div>
      <h3 className="font-semibold leading-10 text-neutral-1 text-2xl">
        UX review presentations
      </h3>
      <p className="text-[#667085] text-base leading-8 font-normal">
        How do you create compelling presentations that wow your colleagues and
        impress your managers?
      </p>
      <Link
        href=""
        className="text-primary-light-4 font-semibold leading-10 text-base flex gap-4 items-center"
      >
        Read More
        <span>
          <GoArrowUpRight color="#3BAD6B" />
        </span>
      </Link>
    </div>
  );
};

export default ResourceBoardCard;
