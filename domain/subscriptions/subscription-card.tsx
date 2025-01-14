"use client";
import { formatCurrency } from "@/utils/string";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SubscriptionCardProps {
  color: string;
  bgColor: string;
  category: string;
  title: string;
  price: number;
  benefits: Array<string>;
  icon: string;
}
 
const bgClasses = {
  green: 'bg-[#d9efe5]/50',
  orange: 'bg-[#fee3d5]/50',
  yellow: 'bg-[#F7C436]/50',
  wine: 'bg-[#fbd6da]/50',
};

const textClasses = {
  green: {
    text: 'text-primary-4',
    bg: 'bg-primary-4'
  },
  orange: {
    text: 'text-primary-1',
    bg: 'bg-primary-1'
  },
  yellow: {
    text: 'text-primary-light-2',
    bg: 'bg-primary-light-2'
  },
  wine: {
    text: 'text-primary-3',
    bg: 'bg-primary-3'
  },
};


const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  color,
  bgColor,
  category,
  title,
  price,
  benefits,
  icon,
}) => {
  // const formattedTitle = title.replace(/\s+/g, "-").toLowerCase(); 
  const slugify = (text: string) =>
    text.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");

 
  return (
    <div className="w-[360px] h-[693px] rounded-2xl border  border-[#c5c7d2] flex-col justify-start items-start inline-flex">
      {/* Top Section */}
      <div className="self-stretch h-[296px] px-8 pt-10 pb-8 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-[116px] flex-col justify-start items-center gap-4 flex">
          <div className="justify-start items-start inline-flex">
            <div
              className={`px-3 py-1 rounded-2xl justify-center items-center flex ${bgClasses[bgColor as keyof typeof bgClasses]}`}
            >
              <div className={`text-center text-sm font-medium ${textClasses[color as keyof typeof textClasses]?.text}`}>
                {title}
              </div>
            </div>
          </div>

          <div className="self-stretch h-[72px] flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-[#1b1b20] text-[32px] font-bold">
              {/* ₦{price} */}
              {formatCurrency(Number(price))}
            </div>
            <div className="self-stretch text-center text-[#373946] text-base font-normal">
              per year
            </div>
          </div>
        </div>
        <div className="self-stretch h-12 flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch rounded-lg justify-start items-start inline-flex">
          <Link
              href={`/subscriptions/${slugify(category)}/${slugify(title)}`}
              className={`grow shrink basis-0 h-12 px-5 py-3 text-center rounded-lg shadow border ${textClasses[color as keyof typeof textClasses]?.bg}`}
            >
              <span className="text-white text-base font-semibold">Get started</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="self-stretch  px-8 pb-10 flex-col justify-start items-start gap-8 flex">
        <div className="w-full h-px bg-[#c5c7d2]"></div>
        <div className="self-stretch h-[368px] flex-col justify-start items-start gap-4 flex">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="self-stretch justify-start items-start gap-3 inline-flex leading-[24px]"
            >
              <Image
                src={icon}
                alt="Subscription Card"
                width={24}
                height={24}
              />
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div
                  className="self-stretch text-base font-[16px] font-weight-400 "
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
