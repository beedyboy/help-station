import Link from "next/link";

type ServiceTextProps = {
  subHeading?: string;
  heading?: string;
  name?: string;
  text?: string;
  headingText?: string;
  description?: string;
  linkText?: string;
  linkColor?: string;
  link?: string;
};

const ServiceTextTemplate = ({
  heading = "",
  description = "",
  headingText = "",
  subHeading = "",
  linkText = "",
  linkColor = "",
  name = "",
  link = "/",
}: ServiceTextProps) => {
  return (
    <div className="h-full w-full flex flex-col justify-start gap-4">
      {subHeading ? (
        <p className="text-btnColor text-sm md:text-lg leading-7  w-full font-semibold">
          {subHeading}
        </p>
      ) : null}
      {name ? (
        <p className="font-semibold md:text-[28px] md:leading-[35px] text-[24px] leading-10">
          {name}
        </p>
      ) : null}
      {heading ? (
        <h3 className="font-bold md:text-[55px] leading-[50px] text-[32px]">
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
      {headingText ? <p>{headingText}</p> : null}
      <p className=" md:text-lg text-base text-6 leading-6 md:leading-7 text-neutral-3 font-normal">
        {description}
      </p>
      {linkText ? (
        <Link href={link} className={`text-[${linkColor}] cursor-pointer`}>
          {linkText}
        </Link>
      ) : null}
    </div>
  );
};

export default ServiceTextTemplate;
