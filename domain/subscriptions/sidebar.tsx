import { useSubscription } from "@/context/SubscriptionContext";
import Image from "next/image";
import { useState } from "react";

interface PlanProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

const PlanItem: React.FC<PlanProps> = ({ title, isOpen, onClick }) => {
  return (
    <div className="w-full py-4 flex justify-start gap-2 cursor-pointer" onClick={onClick}>
      <div className="w-8 h-8  border-[#373946] flex-col justify-center items-center flex">
        <Image
          src="/icons/step_radio.svg"
          alt="Emergency"
          width={32}
          height={32}
        />
      </div>
      <p
        className={`font-source-sans font-semibold text-[18px] leading-[30px] text-left  w-[197px] break-words ${
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
  const { activeIndex, setActiveIndex } = useSubscription();
  const plans = [
    { title: "Ambucycle Subscription Plan", isOpen: true },
    { title: "Ambulance Subscription Plans", isOpen: false },
  ];

  return (
    <div className="flex flex-col justify-start md:w-[366px] w-full pl-5 pt-12 bg-background-6 items-start">
      {plans.map((plan, index) => (
        <PlanItem
          key={index}
          title={plan.title}
          isOpen={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
