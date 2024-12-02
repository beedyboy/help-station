"use client";
import { SimpleFooter } from "@/components/layout/SimpleFooter";
import { AMBUCYCLE_PLANS } from "@/constants/subscriptions";
import SubscriptionCard from "@/domain/subscriptions/subscription-card";
import Image from "next/image";
import React from "react";

interface PlanProps {
  title: string;
  isOpen: boolean;
}

const PlanItem: React.FC<PlanProps> = ({ title, isOpen }) => {
  return (
    <div className="w-full py-4 flex justify-start gap-2">
      <div className="w-8 h-8  border-[#373946] flex-col justify-center items-center flex">
        <Image
          src="/icons/step_radio.svg"
          alt="Emergency"
          width={32}
          height={32}
        />
      </div>
      <p
        className={`text-[18px] font-semibold font-sans leading-[30px] break-words ${
          isOpen ? "text-primary-4" : "text-gray-800"
        }`}
      >
        {title}
      </p>
      <div className="w-6 h-6 flex">
        <Image
          src={`/icons/${isOpen ? "arrow-down-green" : "arrow-right"}.svg`}
          alt="Emergency"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const plans = [
    { title: "Ambucycle Subscription Plan", isOpen: true },
    { title: "Ambulance Subscription Plans", isOpen: false },
  ];

  return (
    <div className="flex md:w-[260px] w-full pl-5 pt-12 bg-background-6 flex-col justify-start items-start">
      {plans.map((plan, index) => (
        <PlanItem key={index} title={plan.title} isOpen={plan.isOpen} />
      ))}
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="md:h-[960px] h-auto bg-white justify-start items-center inline-flex">
      <div className="grow shrink basis-0  md:flex-col justify-start items-center inline-flex">
        <div className=" grow shrink basis-0 px-8 py-12 flex-col justify-start items-start flex">
          <div className="h-[805px] flex-col justify-start items-start gap-12 flex">
            <div className="flex-col justify-start items-start gap-8 flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="w-[440px] text-[#1b1b20] text-[32px] font-semibold font-['BR Firma'] tracking-tight">
                  Ambucycle plan 
                  <br />
                </div>
              </div>
              <div className="w-full rounded-xl justify-start items-start gap-8 inline-flex flex-col md:flex-row">
                {AMBUCYCLE_PLANS.map((plan, index) => (
                  <SubscriptionCard
                    key={index}
                    color={plan.color}
                    bgColor={plan.bgColor}
                    title={plan.title}
                    price={plan.price}
                    benefits={plan.features}
                    icon={plan.icon}
                    onGetStarted={() => alert("Get Started clicked!")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <SimpleFooter />
      </div>
    </div>
  );
};

const SubscriptionPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default SubscriptionPage;
