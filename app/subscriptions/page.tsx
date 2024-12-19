"use client";
import { SimpleFooter } from "@/components/layout/SimpleFooter";
import {
  AMBUCYCLE_PLANS,
  AMBULANCE_SUBSCRIPTION_PLANS,
} from "@/constants/subscriptions";
import {
  SubscriptionProvider,
  useSubscription,
} from "@/context/SubscriptionContext";
import Sidebar from "@/domain/subscriptions/sidebar";
import SubscriptionCard from "@/domain/subscriptions/subscription-card";

const MainContent: React.FC = () => {
  const { activeIndex } = useSubscription();
  const plansData = [AMBUCYCLE_PLANS, AMBULANCE_SUBSCRIPTION_PLANS];
  const titles = ["Ambucycle Plan", "Ambulance Subscription Plans"];

  return (
    <div className="md:h-[960px] h-auto md:pl-[32px] justify-start items-center">
      <div className="grow shrink basis-0 py-12 md:flex-col justify-start items-center">
        <div className="flex-col justify-start items-start gap-8 flex">
          <div className="w-[440px] text-[#1b1b20] text-[32px] font-semibold font-['BR Firma'] tracking-tight">
            {/* Ambucycle plan */}
            {titles[activeIndex]}
          </div>
          {/* Horizontal Scrolling Container */}
          <div className="w-full rounded-xl overflow-x-auto md:scrollbar-hide">
            <div className="flex flex-row gap-8">
              {plansData[activeIndex].map((plan, index) => (
                <SubscriptionCard
                  key={index}
                  color={plan.color}
                  bgColor={plan.bgColor}
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
      <div className="min-h-screen flex flex-col sm:flex-row mt-[120px] gap-3 overflow-hidden">
        <Sidebar />
        <div className="grow overflow-hidden">
          <MainContent />
        </div>
      </div>
    </SubscriptionProvider>
  );
}
