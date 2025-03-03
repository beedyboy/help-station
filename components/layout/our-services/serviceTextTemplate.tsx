import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

type ServiceTextProps = {
  subHeading?: string;
  heading?: string;
  name?: string;
  text?: string;
  headingText?: string;
  description?: string;
  subDescription: string;
  linkText?: string;
  linkColor?: string;
  link?: string;
  onClick?: () => void;
  hasOnclickFn?: boolean;
};

const ServiceTextTemplate = ({
  hasOnclickFn = false,
  onClick,
  heading = "",
  description = "",
  subDescription = "",
  headingText = "",
  subHeading = "",
  linkText = "",
  linkColor = "",
  name = "",
  link = "/",
}: ServiceTextProps) => {
  return (
    <div className="h-full w-full flex flex-col justify-start gap-2">
      {subHeading ? (
        <p className="text-btnColor text-lg md:text-[20px] md:leading-10 leading-7   w-full font-semibold">
          {subHeading}
        </p>
      ) : null}
      {name ? (
        <p className="font-semibold md:text-[28px] font-br-firma md:leading-[35px] text-[24px] leading-10">
          {name}
        </p>
      ) : null}
      {heading ? (
        <h3 className="font-bold md:text-[55px] md:leading-[60px] leading-10 text-[32px]">
          {heading.includes("HELP") ? (
            <span>
              {heading.split("HELP").map((part, index, arr) => (
                <span key={index}>
                  {part}
                  {index < arr.length - 1 && (
                    <span className="text-btnColor">HELP</span>
                  )}
                </span>
              ))}
            </span>
          ) : (
            heading
          )}
        </h3>
      ) : null}
      {headingText ? (
        <p className="font-semibold leading-7 ">{headingText}</p>
      ) : null}
      <p className=" md:text-lg text-base text-6 leading-6 md:leading-[30px] text-neutral-3 font-normal">
        {description}
      </p>

      <p
        className={`${
          subDescription === "" ? "hidden" : "block"
        } font-semibold leading-7`}
      >
        {subDescription}
      </p>

      {subHeading === "Our Service" ? null : hasOnclickFn ? (
        <div
          className="flex items-center gap-2"
          onClick={() => onClick && onClick()}
        >
          <p
            style={{ color: linkColor }}
            className="cursor-pointer text-lg font-bold md:text-2xl leading-7"
          >
            {linkText}
          </p>
          <MdOutlineKeyboardDoubleArrowRight color={linkColor} size={24} />
        </div>
      ) : (
        <Link href={link}>
          <div className="flex items-center gap-2">
            <p
              style={{ color: linkColor }}
              className="cursor-pointer text-lg font-bold md:text-2xl leading-7"
            >
              {linkText}
            </p>
            <MdOutlineKeyboardDoubleArrowRight color={linkColor} size={24} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default ServiceTextTemplate;
