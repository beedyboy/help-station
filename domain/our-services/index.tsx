import ImageTemplate from "@/components/image";
import ServiceLayout from "@/components/layout/our-services/serviceLayout";
import ServiceTextTemplate from "@/components/layout/our-services/serviceTextTemplate";
import serviceHelpTeamImg from "@/public/images/help_station_servicehelp.svg";
import serviceCallImg from "@/public/images/help_station_call_center.svg";
import serviceEmergencyCenterimg from "@/public/images/help_station_emergency_station.svg";
import serviceHealthImg from "@/public/images/help_station_health.svg";
import serviceLabImg from "@/public/images/help_station_laboratory.svg";

function OurService() {
  return (
    <main className="w-full flex justify-center items-center">
      <section className="lg:w-[85%] w-full flex flex-col gap-3 lg:gap-28 items-center">
        {/*  */}
        <ServiceLayout bgColor="white">
          <div className="p-6 lg:p-0 w-full flex flex-col lg:justify-between items-center lg:flex-row gap-3 lg:gap-6 justify-center">
            <div className="lg:w-[50%]  w-full flex justify-start items-center lg:gap-6 lg:justify-center flex-col ">
              <ServiceTextTemplate
                description=" With our network of ambulances, first responders and emergency-ready
        hospitals, we are equipped to provide you with prompt and efficient
        access to emergency services, to ensure no more life is lost due to lack
        of access to pre-hospital care and provide safety for you and your loved
        ones when every second counts."
                subHeading="Our Service"
                heading="HELP in emergency
            situations"
              />
            </div>
            <div className="lg:w-[45%] lg:h-fit h-[350px] w-full flex justify-center items-center rounded-lg overflow-hidden">
              <div className="lg:full  lg:h-[500px]">
                <ImageTemplate src={serviceHelpTeamImg} />
              </div>
            </div>
          </div>
        </ServiceLayout>

        {/*  */}

        <div className="flex justify-center items-center w-full">
          <div className="lg:w-[55%] w-[90%] text-center">
            <p className="text-btnColor text-sm lg:text-lg leading-6  w-full font-semibold">
              Keep going, we’ve got you covered.
            </p>

            <h3 className="font-bold lg:text-[46px] lg:leading-[50px] leading-8 text-[30px]">
              Explore our services below and choose{" "}
              <span className="text-btnColor">HELP</span>
            </h3>
          </div>
        </div>

        {/*  */}
        <div className="lg:w-[100%] bg-[#ffeaea] lg:px-5  rounded-2xl">
          <ServiceLayout bgColor="#ffeaea">
            <div className=" p-6 w-full flex rounded-lg flex-col items-center lg:flex-row gap-3 lg:gap-6 justify-center">
              <div className="lg:w-[40%] lg:h-[70%] h-[350px] justify-end items-end w-full rounded-lg overflow-hidden">
                <div className="lg:w-[386px]  lg:h-[386px]">
                  <ImageTemplate src={serviceCallImg} />
                </div>
              </div>
              <div className="lg:w-[60%] w-full flex justify-start items-center lg:gap-6 lg:justify-center flex-col ">
                <ServiceTextTemplate
                  heading="Instant ambulance request."
                  headingText="Swift Medical Evacuation Anytime, Anywhere"
                  description="Trust HelpStation to provide rapid and reliable ambulance services for critical medical emergencies, whether on the ground or in the air. With our fully equipped ambulance or state-of-the-art aircraft and experienced medical personnel, we ensure swift evacuation, following a medical emergency, to the nearest emergency ready facility, no matter where you are. Your safety and well-being are our top priority. Count on HelpStation to be your lifeline in times of urgent medical care."
                  linkText="Find Out More"
                  linkColor="#DA2750"
                />
              </div>
            </div>
          </ServiceLayout>
        </div>

        {/*  */}

        <ServiceLayout bgColor="white">
          <div className="p-6 lg:p-0 w-full flex flex-col items-center lg:flex-row gap-3 lg:gap-6 justify-center">
            <div className="lg:w-[50%] w-full flex justify-start items-center lg:gap-6 lg:justify-center flex-col ">
              <ServiceTextTemplate
                description=" Creating long lasting memories for your client and guest need not be tainted with mishaps. When you choose us, you’re not just renting an ambulance; you’re choosing peace of mind. Our team of highly skilled and certified paramedics and equipment are ready to provide immediate medical assistance whenever the need arises."
                headingText="Creating memories with peace of mind, secure that event!"
                heading="Emergency Coverage at Event"
                linkColor=""
                linkText="Request Now"
              />
            </div>
            <div className="lg:w-[50%] lg:h-fit h-[350px] w-full flex justify-center items-center rounded-lg overflow-hidden">
              <div className="lg:w-[500px]  lg:h-[500px]">
                <ImageTemplate src={serviceEmergencyCenterimg} />
              </div>
            </div>
          </div>
        </ServiceLayout>

        {/*  */}

        <div className="lg:w-[100%] bg-[#c5e9cf] rounded-2xl">
          <ServiceLayout bgColor="#c5e9cf">
            <div className=" p-6 w-full flex rounded-lg flex-col-reverse items-center lg:flex-row  lg:gap-3 justify-center">
              <div className="lg:w-[60%] w-full flex lg:pl-8 justify-start items-center lg:gap-2 lg:justify-center flex-col ">
                <ServiceTextTemplate
                  heading="Instant ambulance request."
                  headingText="Swift Medical Evacuation Anytime, Anywhere"
                  description="Trust HelpStation to provide rapid and reliable ambulance services for critical medical emergencies, whether on the ground or in the air. With our fully equipped ambulance or state-of-the-art aircraft and experienced medical personnel, we ensure swift evacuation, following a medical emergency, to the nearest emergency ready facility, no matter where you are. Your safety and well-being are our top priority. Count on HelpStation to be your lifeline in times of urgent medical care."
                  linkText="Find Out More"
                  linkColor="#32A061"
                />
              </div>
              <div className="lg:w-[40%] lg:h-[70%]  h-[350px] justify-center items-center w-full rounded-lg overflow-hidden">
                <div className="lg:w-[386px] w-full overflow-hidden h-full lg:h-[386px] rounded-lg ">
                  <ImageTemplate src={serviceLabImg} />
                </div>
              </div>
            </div>
          </ServiceLayout>
        </div>
        {/*  */}

        {/*  */}

        <ServiceLayout bgColor="white">
          <div className="p-6 lg:p-0 w-full flex flex-col-reverse items-center lg:flex-row gap-3 lg:gap-6 justify-center">
            <div className="lg:w-[50%] lg:h-fit h-[350px] w-full flex justify-center items-center rounded-lg overflow-hidden">
              <div className="lg:w-[500px]  lg:h-[500px]">
                <ImageTemplate src={serviceHealthImg} />
              </div>
            </div>

            <div className="lg:w-[50%] w-full flex justify-start items-center lg:gap-6 lg:justify-center flex-col ">
              <ServiceTextTemplate
                description="Maximize efficiency and minimize risk with HelpStation’s comprehensive Health, Safety, and  Environment (HSE) services. Our integrated approach simplifies safety management, offering tailored solutions to meet your unique needs. From incident response to employee training, rely on HelpStation to elevate your safety standards and protect your organizations most valuable assets while empowering you to focus on your core mission."
                headingText="Ensure safety at every turn"
                heading="Health, Safety, and Environment"
                linkColor="#e26336"
                linkText="Find Out More"
              />
            </div>
          </div>
        </ServiceLayout>

        {/*  */}
        <div className="lg:w-[100%] bg-[#D7D9E3] rounded-2xl">
          <ServiceLayout bgColor="[#D7D9E3]">
            <div className="p-6 w-full flex rounded-lg flex-col-reverse items-center lg:flex-row  lg:gap-3 justify-center">
              <div className="lg:w-[60%] w-full flex lg:pl-8 justify-start items-center lg:gap-2 lg:justify-center flex-col ">
                <ServiceTextTemplate
                  heading="Food Handlers’ Screening"
                  headingText="Norem ipsum dolor sit amet, consectetur "
                  description="Your customers trust you to keep their food safe and delicious. Our food handlers screening ensures you’re equipped with the knowledge and skills to protect their health and your reputation. Take the step towards excellence and show your commitment to safety. Discover how our screening can help you make a difference."
                  linkText="Book Now"
                  linkColor="#1B1C20"
                />
              </div>
              <div className="lg:w-[40%] lg:h-[70%] h-[350px] justify-center items-center w-full rounded-lg overflow-hidden">
                <div className="lg:w-[386px] w-full h-full lg:h-[386px]">
                  <ImageTemplate src={serviceCallImg} />
                </div>
              </div>
            </div>
          </ServiceLayout>
        </div>
        {/*  */}

        {/*  */}

        <div className="lg:pb-8">
          <ServiceLayout bgColor="white">
            <div className="p-6 lg:p-0 w-full flex flex-col items-center lg:flex-row gap-3 lg:gap-6 justify-center">
              <div className="lg:w-[50%] w-full flex justify-start items-center lg:gap-6 lg:justify-center flex-col ">
                <ServiceTextTemplate
                  description="Here at HelpStation, we know how important it is to treat your loved one with respect and dignity during their final journey. Our dedicated team will be there for you every step of the way, offering compassionate support and professional hearse services. We want to help you give them the send-off they deserve."
                  headingText="Honoring Your Loved One with Dignity and Respect"
                  heading="Hearse Services"
                  linkColor=""
                  linkText="Request a quote"
                />
              </div>
              <div className="lg:w-[50%] lg:h-fit h-[350px] w-full flex justify-center items-center rounded-lg overflow-hidden">
                <div className="lg:w-[500px]  lg:h-[500px]">
                  <ImageTemplate src={serviceEmergencyCenterimg} />
                </div>
              </div>
            </div>
          </ServiceLayout>
        </div>
      </section>
    </main>
  );
}

export default OurService;
