"use client";
import { SimpleFooter } from "@/components/layout/SimpleFooter";
import { plansData } from "@/constants/subscriptions";
import {
  SubscriptionProvider,
  useSubscription,
} from "@/context/SubscriptionContext";
import Sidebar from "@/domain/subscriptions/sidebar";
import SubscriptionCard from "@/domain/subscriptions/subscription-card";

const MainContent: React.FC = () => {
  const { activeIndex } = useSubscription();
  const titles = ["Ambucycle Plan", "Ambulance Subscription Plans"];

  return (
    <div className="md:h-[960px] h-auto md:pl-[32px] justify-start items-center  md:space-x-4 md:overflow-x-auto scroll-smooth no-scrollbar">
      <div className="grow shrink basis-0 py-12 md:flex-col justify-start items-center">
        <div className="flex-col justify-start items-start gap-8 flex">
          <div className="w-[440px] text-[#1b1b20] text-[32px] font-semibold font-['BR Firma'] tracking-tight">
            {/* Ambucycle plan */}
            {titles[activeIndex]}
          </div>
          {/* Horizontal Scrolling Container */}
          <div className="w-full h-auto rounded-xl overflow-x-auto md:space-x-4 md:overflow-x-auto  no-scrollbar scrollbar-hide">
            <div className="flex flex-row gap-4 md:space-x-4 md:overflow-x-auto scroll-smooth no-scrollbar w-full ">
              {plansData[activeIndex].map((plan, index) => (
                <SubscriptionCard
                  key={index}
                  color={plan.color}
                  bgColor={plan.bgColor}
                  category={titles[activeIndex]}
                  title={plan.title}
                  price={plan.price}
                  benefits={plan.features}
                  icon={plan.icon}
                />
              ))}
            </div>
          </div>
        </div>
        <SimpleFooter />
      </div>
    </div>
  );
};

export default function SubscriptionsPage() {
  return (
    <SubscriptionProvider>
      <div className="min-h-screen flex flex-col sm:flex-row mt-[120px] gap-3 overflow-hidden no-scrollbar">
        <Sidebar />
        <div className="w-full md:space-x-4 md:overflow-x-auto scroll-smooth no-scrollbar">
          <MainContent />
        </div>
      </div>
    </SubscriptionProvider>
  );
}
