import Link from "next/link";
import ImageTemplate from "../image";
import { GoArrowUpRight } from "react-icons/go";
// import DOMPurify from "dompurify";
// import { JSDOM } from "jsdom";


// const jsdomWindow = new JSDOM("").window as unknown as Window & typeof globalThis;
// const dompurify = DOMPurify(jsdomWindow);

interface ResourceBoardCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
  featuredImage: string;
}

const ResourceBoardCard: React.FC<ResourceBoardCardProps> = ({ title, excerpt,
  date,
  slug,
  featuredImage, }) => {
    const formattedDate = new Date(date).toDateString();
   
  // const sanitizedExcerpt = dompurify.sanitize(
  //     excerpt?.length > 150 ? `${excerpt.slice(0, 150)}...` : excerpt
  //   );
  // const sanitizedTitle = dompurify.sanitize(title);
  
  return (
    <div className="w-[100%] flex flex-col gap-1">
      <div className="w-full rounded-md overflow-hidden relative h-[250px] bg-cyan-700">
         <ImageTemplate src={featuredImage} />
        <div className=" p-4 absolute h-[81px] text-white backdrop-blur-lg  w-full bottom-0 bg-[#FFFFFF4D] bg-gradient-to-r flex justify-between">
          <div>
            <p className="text-xs font-semibold leading-4">Phoneix Baker {slug}</p>
            <p className="text-sm font-normal">{formattedDate}</p>
          </div>
          <p className="text-xs font-semibold leading-4">Report</p>
        </div>
      </div>
     <h3
        className="font-semibold leading-10 text-neutral-1 text-2xl"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
       <p
        className="text-[#667085] text-base leading-8 font-normal"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      ></p>
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
