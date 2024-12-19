"use client";

import Image from "next/image";

const SUBSCRIPTION_HINT = [
  "Because time can be the difference between life and death, the First Responder plan ensures quicker response time through the use of Ambu cycles dispatched with paramedics to beat the usual Lagos traffic.",
  "Our highly trained paramedics provide basic life support at the scene of an emergency to stabilize the victim before the arrival of advanced treatment or transportation to a certified health center.",
  "The first responder plan is currently available within Lagos Island",
];
const Plan: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-screen">
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-6 flex flex-col items-center gap-4">
        <div className="w-[440px] h-[790px] flex flex-col justify-center items-start gap-12">
          <div className="flex items-center justify-start gap-4">
            <div className="w-10 h-10 p-2 bg-[#f8f8fa] rounded-lg flex justify-center items-center">
              <Image
                src="/icons/chevron-left.svg"
                width={16}
                height={16}
                alt="arrow-left"
              />
            </div>
            <span className="text-[#1b1b20] text-base font-medium">
              Go back
            </span>
          </div>

          <div className="flex flex-col gap-8">
            <h1 className="text-[32px] font-semibold text-[#1b1b20]">
              Subscribe Now
            </h1>
            <form className="space-y-6">
              {/* Input fields */}
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1b1b20]">
                    Selected Plan
                  </label>
                  <div className="bg-[#f8f8fa] border border-[#c5c7d2] rounded-lg p-2">
                    <input
                      type="text"
                      className="w-full bg-transparent text-base text-[#797a88] font-semibold"
                      value="First user plan"
                      disabled
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1b1b20]">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="w-full border border-[#c5c7d2] rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1b1b20]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full border border-[#c5c7d2] rounded-lg p-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1b1b20]">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+234 (555) 000-0000"
                    className="w-full border border-[#c5c7d2] rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1b1b20]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-[#c5c7d2] rounded-lg p-2"
                  />
                </div>

                {/* do a flex with select option fields for genotype and gender */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1b1b20]">
                      Genotype
                    </label>
                    <select
                      className="w-full border border-[#c5c7d2] rounded-lg p-2"
                      name="genotype"
                    >
                      <option value="">Select Genotype</option>
                      <option value="AA">AA</option>
                      <option value="AS">AS</option>
                      <option value="SS">SS</option>
                      <option value="AC">AC</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1b1b20]">
                      Gender
                    </label>
                    <select
                      className="w-full border border-[#c5c7d2] rounded-lg p-2"
                      name="gender"
                    >
                      <option value="">Select Gender </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Content (Hidden on Mobile) */}
      <div className="hidden md:flex md:w-1/2 flex-col bg-gradient-to-tr from-[#0f1728] to-[#2d2e2c] justify-center px-24">
        <Image src="/icons/stars.svg" width={46} height={46} alt="stars" />
        <div className="flex flex-col gap-8 text-white">
          <div className="self-stretch">
            <span className="text-5xl font-bold font-['Source Sans Pro']">
              It’s Simply{" "}
            </span>
            <span className="text-[#3bad6b] text-5xl font-bold font-['Source Sans Pro']">
              HELP
            </span>
            <span className="text-5xl font-bold font-['Source Sans Pro']">
              {" "}
              on the Go!
            </span>
          </div>

          {SUBSCRIPTION_HINT.map((hint, index) => (
            <p key={index} className="text-sm">
              {hint}
            </p>
          ))}

          <div className="h-10 pr-3 justify-start items-start gap-2 inline-flex">
            <Image
              src="/images/group_avatars.png"
              width={100}
              height={100}
              alt="satisfied client"
            />
            <span>Join 40,000+ users</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
