import Image from "next/image";
import React from "react";

interface SubscriptionCardProps {
  color: string;
  bgColor: string;
  title: string;
  price: string;
  benefits: Array<string>;
  icon: string;
  onGetStarted: () => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  color,
  bgColor,
  title,
  price,
  benefits,
  icon,
  onGetStarted,
}) => {
  return (
    <div className="w-[296px] h-[693px] rounded-2xl border  border-[#c5c7d2] flex-col justify-start items-start inline-flex">
      {/* Top Section */}
      <div className="self-stretch h-[252px] px-8 pt-10 pb-8 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-[116px] flex-col justify-start items-center gap-4 flex">
          <div className="justify-start items-start inline-flex">
            <div
              className={`px-3 py-1 rounded-2xl justify-center items-center flex bg-${bgColor}`}
            >
              <div className={`text-center text-sm font-medium text-${color}`}>
                {title}
              </div>
            </div>
          </div>

          <div className="self-stretch h-[72px] flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-[#1b1b20] text-[32px] font-bold">
              ₦{price}
            </div>
            <div className="self-stretch text-center text-[#373946] text-base font-normal">
              per year
            </div>
          </div>
        </div>
        <div className="self-stretch h-12 flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch rounded-lg justify-start items-start inline-flex">
            <button
              className={`grow shrink basis-0 h-12 px-5 py-3 rounded-lg shadow border bg-${color}`}
              onClick={onGetStarted}
            >
              <span className="text-white text-base font-semibold">
                Get started
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="self-stretch h-[441px] px-8 pb-10 flex-col justify-start items-start gap-8 flex">
        <div className="w-full h-px bg-[#c5c7d2]"></div>
        <div className="self-stretch h-[368px] flex-col justify-start items-start gap-4 flex">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="self-stretch justify-start items-start gap-3 inline-flex leading-normal"
            >
              <Image
                src={icon}
                alt="Subscription Card"
                width={24}
                height={24}
              />
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div
                  className="self-stretch text-base font-normal"
                  //   style={{ color: "#373946" }}
                  dangerouslySetInnerHTML={{ __html: benefit }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
