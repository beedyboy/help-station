"use client";

const Plan: React.FC = () => {

  // const router = useRouter();
  // const { plan } = router.query;
  return (
   
    <div className="w-full flex flex-col md:flex-row min-h-screen">
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-6 flex flex-col items-start gap-4">
        
        <div className="w-[440px] h-[790px] flex flex-col justify-center items-center gap-12">

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 p-2 bg-[#f8f8fa] rounded-lg flex justify-center items-center">
              {/* Icon Placeholder */}
              <div className="w-6 h-6"></div>
            </div>
            <span className="text-[#1b1b20] text-base font-medium">Go back</span>
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
              </div>
            </form>
          </div>

        </div>

      </div>

      {/* Right Content (Hidden on Mobile) */}
      <div className="hidden md:flex md:w-1/2 bg-gray-100 justify-center items-center">
        <h2 className="text-xl font-bold">Right Content</h2>
      </div>
    </div>
  );
};

export default Plan;