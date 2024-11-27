import Link from "next/link";

type ServiceTextProps = {
  subHeading?: string;
  heading?: string;
  text?: string;
  headingText?: string;
  description?: string;
  linkText?: string;
  linkColor?: string;
};

const ServiceTextTemplate = ({
  heading = "",
  description = "",
  headingText = "",
  subHeading = "",
  linkText = "",
  linkColor = "",
}: ServiceTextProps) => {
  return (
    <div className="h-full w-full flex flex-col justify-start gap-4">
      <p className="text-btnColor text-sm md:text-lg leading-7  w-full font-semibold">
        {subHeading}
      </p>
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
      <p>{headingText}</p>
      <p className="md:pr-8 md:text-lg text-base text-6 leading-6 md:leading-7 text-neutral-3 font-normal">
        {description}
      </p>
      <Link href={""} className={`text-[${linkColor}]`}>
        {linkText}
      </Link>
    </div>
  );
};

export default ServiceTextTemplate;
