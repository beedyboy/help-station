import Image from "next/image";

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

  export default Sidebar;