"use client";
import { SimpleFooter } from "@/components/layout/SimpleFooter";
import { AMBUCYCLE_PLANS } from "@/constants/subscriptions";
import Sidebar from "@/domain/subscriptions/sidebar";
import SubscriptionCard from "@/domain/subscriptions/subscription-card";


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

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <Sidebar />
      <MainContent />
    </div>
  );
};