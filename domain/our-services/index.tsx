import ImageTemplate from "@/components/image";
import ServiceLayout from "@/components/layout/our-services/serviceLayout";
import ServiceTextTemplate from "@/components/layout/our-services/serviceTextTemplate";
import serviceHelpTeamImg from "@/public/images/help_station_servicehelp.svg";
import serviceCallImg from "@/public/images/help_station_call_center.svg";
import serviceEmergencyCenterimg from "@/public/images/help_station_emergency_station.svg";
import serviceHealthImg from "@/public/images/help_station_health.svg";
import serviceLabImg from "@/public/images/help_station_laboratory.svg";
import firstAidImg from "@/public/images/firstaidcpr.svg";
import hearseImg from "@/public/images/hearse.svg";
import aboutImg from "@/public/images/help_station_about.svg";
import Link from "next/link";

function OurService({ openModal }: { openModal: () => void }) {
  return (
    <main className="w-full flex justify-center md:gap-6 flex-col items-center">
      <section className="lg:w-[85%] w-full flex flex-col gap-3 lg:gap-28 items-center">
        {/*  */}
        <ServiceLayout bgColor="white">
          <div className="p-6 lg:p-0 w-full flex flex-col lg:justify-between items-center lg:flex-row gap-5 lg:gap-6 justify-center">
            <div className="lg:w-[50%]  w-full flex justify-start items-center lg:gap-6 lg:justify-center flex-col ">
              <div className="md:w-[95%] w-full">
                <ServiceTextTemplate
                  description=" With our network of ambulances, first responders and emergency-ready
        hospitals, we are equipped to provide you with prompt and efficient
        access to emergency services, to ensure no more life is lost due to lack
        of access to pre-hospital care and provide safety for you and your loved
        ones when every second counts."
                  subHeading="Our Service"
                  heading="HELP in emergency
            situations"
                  subDescription=""
                  hasOnclickFn={false}
                  linkColor=""
                  linkText=""
                  onClick={() => console.log("")}
                  headingText=""
                  name=""
                  link=""
                  text=""
                />
              </div>
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
            <div className=" p-6 w-full flex rounded-lg flex-col-reverse items-center lg:flex-row gap-5 lg:gap-6 justify-center">
              <div className="lg:w-[40%] lg:h-[70%] h-[350px] justify-end items-end w-full rounded-lg overflow-hidden">
                <div className="lg:w-[386px]  lg:h-[386px]">
                  <ImageTemplate src={serviceCallImg} />
                </div>
              </div>
              <div className="lg:w-[60%] w-full flex justify-start items-center lg:gap-6 lg:justify-center flex-col ">
                <div className="md:w-[90%] w-full">
                  <ServiceTextTemplate
                    subDescription=""
                    heading="Instant ambulance request."
                    headingText="Swift Medical Evacuation Anytime, Anywhere"
                    description="Trust HelpStation to provide rapid and reliable ambulance services for critical medical emergencies, whether on the ground or in the air. With our fully equipped ambulance or state-of-the-art aircraft and experienced medical personnel, we ensure swift evacuation, following a medical emergency, to the nearest emergency ready facility, no matter where you are. Your safety and well-being are our top priority. Count on HelpStation to be your lifeline in times of urgent medical care."
                    linkText="Find Out More"
                    linkColor="#DA2750"
                    hasOnclickFn={false}
                    // link="/services/ambulance-form"
                    link="/subscriptions"
                    subHeading=""
                    name=""
                    onClick={() => console.log()}
                    text=""
                  />
                </div>
              </div>
            </div>
          </ServiceLayout>
        </div>

        {/*  */}

        <ServiceLayout bgColor="white">
          <div className="p-6 lg:p-0 w-full flex flex-col items-center lg:flex-row gap-5  lg:gap-6 justify-center">
            <div className="lg:w-[50%] w-full flex justify-start items-center lg:gap-6 lg:justify-center flex-col ">
              <ServiceTextTemplate
                description=" Creating long lasting memories for your client and guest need not be tainted with mishaps. When you choose us, you’re not just renting an ambulance; you’re choosing peace of mind. Our team of highly skilled and certified paramedics and equipment are ready to provide immediate medical assistance whenever the need arises."
                headingText="Creating memories with peace of mind, secure that event!"
                heading="Emergency Coverage at Event"
                linkColor="#DA2750"
                linkText="Request Now"
                subDescription=""
                link="/services/event-form"
                hasOnclickFn={false}
                name=""
                onClick={() => console.log()}
                subHeading=""
                text=""
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
            <div className=" p-6 w-full flex rounded-lg flex-col items-center lg:flex-row gap-5  lg:gap-6 justify-center">
              <div className="lg:w-[60%] w-full flex justify-start items-center lg:gap-2 lg:justify-center flex-col ">
                <div className="md:w-[90%] w-full">
                  <ServiceTextTemplate
                    subDescription="Be the difference between panic and action."
                    heading="First Aid Training"
                    headingText="Be more than just a bystander."
                    description="At home, work, school or wherever you find yourself, your knowledge and emergency readiness skill might just be the tipping factor needed to save a life in an otherwise tragic situation. The outcome of a medical emergency is heavily dependent on prompt intervention of skilled bystanders, before the arrival of a medic."
                    linkText="Find Out More"
                    linkColor="#32A061"
                    hasOnclickFn={true}
                    onClick={() => openModal()}
                    link=""
                    name=""
                    subHeading=""
                    text=""
                  />
                </div>
              </div>
              <div className="lg:w-[40%] lg:h-[70%]  h-[350px] justify-center items-center w-full rounded-lg overflow-hidden">
                <div className="lg:w-[400px] w-full overflow-hidden h-full lg:h-[386px] rounded-lg ">
                  <ImageTemplate src={firstAidImg} />
                </div>
              </div>
            </div>
          </ServiceLayout>
        </div>
        {/*  */}

        {/*  */}

        <ServiceLayout bgColor="white">
          <div className="p-6 lg:p-0 w-full flex flex-col-reverse items-center lg:flex-row gap-5 lg:gap-6 justify-start ro">
            <div className="lg:w-[40%]  lg:h-fit h-[350px] w-full flex justify-center items-center rounded-lg overflow-hidden">
              <div className="lg:w-[600px] rounded-lg overflow-hidden lg:h-[500px]">
                <ImageTemplate src={serviceHealthImg} />
              </div>
            </div>

            <div className="lg:w-[60%]  w-full flex justify-start items-center lg:gap-6 lg:justify-center flex-col ">
              <div className="md:w-[75%] w-full">
                <ServiceTextTemplate
                  description="Maximize efficiency and minimize risk with HelpStation’s comprehensive Health, Safety, and  Environment (HSE) services. Our integrated approach simplifies safety management, offering tailored solutions to meet your unique needs. From incident response to employee training, rely on HelpStation to elevate your safety standards and protect your organizations most valuable assets while empowering you to focus on your core mission."
                  headingText="Ensure safety at every turn"
                  heading="Health, Safety, and Environment"
                  linkColor="#E26336"
                  linkText="Find Out More"
                  link="/services/HSETraining-form"
                  subDescription=""
                  hasOnclickFn={false}
                  name=""
                  onClick={() => console.log()}
                  subHeading=""
                  text=""
                />
              </div>
            </div>
          </div>
        </ServiceLayout>

        {/*  */}
        <div className="lg:w-[100%] bg-[#D7D9E3] rounded-2xl">
          <ServiceLayout bgColor="[#D7D9E3]">
            <div className="p-6 w-full flex rounded-lg flex-col items-center lg:flex-row gap-5  lg:gap-6 justify-center">
              <div className="lg:w-[60%] w-full flex justify-start items-center lg:gap-2 lg:justify-center flex-col ">
                <div className="md:w-[90%] w-full">
                  <ServiceTextTemplate
                    subDescription=""
                    heading="Food Handlers’ Screening"
                    headingText="Norem ipsum dolor sit amet, consectetur "
                    description="Your customers trust you to keep their food safe and delicious. Our food handlers screening ensures you’re equipped with the knowledge and skills to protect their health and your reputation. Take the step towards excellence and show your commitment to safety. Discover how our screening can help you make a difference."
                    linkText="Book Now"
                    linkColor="#1B1C20"
                    link="/services/foodhandler-form"
                    hasOnclickFn={false}
                    name=""
                    onClick={() => console.log()}
                    subHeading=""
                    text=""
                  />
                </div>
              </div>
              <div className="lg:w-[40%] lg:h-[70%] h-[350px] justify-center items-center w-full rounded-lg overflow-hidden">
                <div className="lg:w-[400px] w-full overflow-hidden h-full lg:h-[386px] rounded-lg ">
                  <ImageTemplate src={serviceLabImg} />
                </div>
              </div>
            </div>
          </ServiceLayout>
        </div>
        {/*  */}

        {/*  */}

        <div className="lg:pb-8">
          <ServiceLayout bgColor="white">
            <div className="p-6 lg:p-0 w-full flex flex-col items-center lg:flex-row gap-5 lg:gap-6 justify-center">
              <div className="lg:w-[50%] w-full flex justify-start items-center lg:gap-6 lg:justify-center flex-col ">
                <div className="md:w-[95%] w-full">
                  <ServiceTextTemplate
                    subDescription=""
                    description="Here at HelpStation, we know how important it is to treat your loved one with respect and dignity during their final journey. Our dedicated team will be there for you every step of the way, offering compassionate support and professional hearse services. We want to help you give them the send-off they deserve."
                    headingText="Honoring Your Loved One with Dignity and Respect"
                    heading="Hearse Services"
                    linkColor="#F7C027"
                    linkText="Request a quote"
                    link="/services/hearse-form"
                    hasOnclickFn={false}
                    name=""
                    onClick={() => console.log()}
                    subHeading=""
                    text=""
                  />
                </div>
              </div>
              <div className="lg:w-[50%] lg:h-fit h-[350px] w-full flex justify-center items-center rounded-lg overflow-hidden">
                <div className="lg:w-[500px]  lg:h-[500px]">
                  <ImageTemplate src={hearseImg} />
                </div>
              </div>
            </div>
          </ServiceLayout>
        </div>
      </section>

      <section className="relative h-[400px] flex justify-center items-center w-full">
        <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-[362px] md:h-[463px]">
          <ImageTemplate src={aboutImg} />
        </div>

        <div className="z-10 md:w-[58%] w-[90%] h-full text-white text-center flex justify-center items-center flex-col">
          <div className="flex justify-center h-full font-br-firma items-center gap-5 flex-col w-[80%]">
            <h2 className=" md:leading-[55px] leading-10 text-primary-5 font-bold md:text-[48px] text-[32px] ">
              Explore more of our services and offerings here and
              <span className="text-primary-4"> contact us</span>
            </h2>
            <p className="md:hidden text-[#70727F] text-base leading-6 font-semibold">
              (090132000013, 090132000014, 02013304357)
            </p>
            <div className="w-[199px] h-[56px] flex justify-center items-center rounded-xl bg-primary-4">
              <Link href="/contact-us">
                <p className="font-bold text-[18px]  leading-10">
                  Explore More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OurService;
