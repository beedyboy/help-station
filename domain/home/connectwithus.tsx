import Image from "next/image";
import connectImg from "@/public/images/help_station_connectwithus.svg";
import ImageTemplate from "@/components/image";
import facebookImg from "@/public/images/facebook .svg";
import tikTokImg from "@/public/images/tiktok.svg";
import instargramImg from "@/public/images/instagram.svg";
import linkedInImg from "@/public/images/linkedIn.svg";
import Link from "next/link";

function ConnectWithUs() {
  return (
    <div className="flex flex-col  md:py-10 gap-5 md:flex-row items-center">
      <div className="md:w-[50%] flex flex-col justify-start gap-3 items-start md:pr-36">
        <p className="font-semibold text-base leading-6 md:leading-8 text-btnColor ">
          Stay informed, Stay safe
        </p>
        <p className="font-bold md:text-4xl text-3xl leading-10 ">
          CONNECT WITH US
        </p>
        <p className="text-base leading-6 md:text-lg md:leading-8 font-normal">
          Follow us on our social media pages for the latest updates in
          emergency preparedness, medical insights and more.
        </p>
        <div className="flex gap-2 items-center">
          <div className="w-8 md:w-10 h-8 md:h-10 cursor-pointer">
            <Link href="https://www.facebook.com/HelpStation1?mibextid=LQQJ4d">
              <ImageTemplate src={facebookImg} />
            </Link>
          </div>
          <div className="w-8 md:w-10 h-8 md:h-10 cursor-pointer">
            <Link href="https://x.com/help_station_?s=21&t=19V3dJbyyA0Rx0GBcBebsg"></Link>
            <ImageTemplate src={tikTokImg} />
          </div>
          <div className="w-8 md:w-10 h-8 md:h-10 cursor-pointer">
            <Link href="https://www.instagram.com/helpstation.ng"></Link>
            <ImageTemplate src={instargramImg} />
          </div>
          <div className="w-8 md:w-10 h-8 md:h-10 cursor-pointer">
            <Link href="https://www.linkedin.com/company/help-station-ng"></Link>
            <ImageTemplate src={linkedInImg} />
          </div>
        </div>
      </div>

      <div className="md:w-[50%] flex justify-end items-end">
        <div className=" w-[100%] h-[100%] md:h-[483px] md:w-[413px]">
          <Image
            src={connectImg}
            alt="connect with us"
            style={{ objectFit: "cover", maxWidth: "100%", height: "100%" }}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ConnectWithUs;
