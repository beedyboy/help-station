import ImageTemplate from "@/components/image";
import ServiceLayout from "@/components/layout/our-services/serviceLayout";
import ServiceTextTemplate from "@/components/layout/our-services/serviceTextTemplate";
import ourPartnerImg from "@/public/images/help_station_ourpartners.svg";
import ourPartnerLogoImg from "@/public/images/help_station_partnerslogo.svg";
import onlineTestImg from "@/public/images/help_station_online_test.svg";
import officeImg from "@/public/images/help_station_office_pana.svg";
import contractImg from "@/public/images/help_station_contract_pana.svg";
import ButtonGroup from "@/components/button/índex";
import MainLayout from "@/components/layout/MainLayout";

function OurPartner({ openModal }: { openModal: () => void }) {
  return (
    <MainLayout>
      <main className="w-full flex-col gap-7 flex justify-center items-center">
        <section className="lg:w-[85%] w-full flex flex-col md:gap-3 gap-10  lg:gap-28 items-center">
          <ServiceLayout bgColor="white">
            <div className="p-6 lg:p-0 w-full flex flex-col lg:justify-between items-center lg:flex-row gap-3 lg:gap-6 justify-center">
              <div className="lg:w-[50%]  w-full flex justify-start items-center lg:gap-6 lg:justify-center flex-col ">
                <ServiceTextTemplate
                  description=" At HelpStation, we believe in the power of partnerships to ensure everyone has access to essential medical emergency services. By joining forces with us, you can help expand our reach and enhance the quality of emergency response in our communities. As a partner, you'll gain access to exclusive resources, support, and opportunities to make a meaningful impact."
                  subHeading="Join Us Today"
                  heading="Become a partner "
                  subDescription=""
                  hasOnclickFn={false}
                  link=""
                  name=""
                  onClick={() => console.log("")}
                  text=""
                  headingText=""
                  linkColor="#fff"
                  linkText=""
                />
              </div>
              <div className="lg:w-[45%] lg:h-fit z-10 md:h-[350px] w-full flex justify-center items-center rounded-lg ">
                <div className="lg:full lg:h-[500px] md:h-[100%] h-[360px] ">
                  <ImageTemplate src={ourPartnerImg} />
                </div>
              </div>
            </div>
          </ServiceLayout>

          {/*  */}
        </section>

        <section className=" w-full flex flex-col gap-3 lg:gap-28 items-center">
          <div className="relative py-7 w-full flex justify-center items-center">
            <div className="absolute -z-20 h-[100%] bg-[#e1efe6] md:w-[380px] w-[200px] left-0 top-0"></div>
            <div className="absolute -z-10 h-[100%] bg-[#c4d9cc] md:w-[170px] w-[75px] left-12 md:left-[6rem] top-0"></div>

            <div className="flex flex-col justify-center items-center p-4">
              <ImageTemplate src={ourPartnerLogoImg} />
            </div>
          </div>
        </section>

        <section className="lg:w-[85%] w-full flex flex-col gap-3 items-center">
          <div className="md:p-16 p-6  md:w-[65%] text-center  flex justify-center flex-col items-center gap-4 ">
            <p className="  font-bold md:text-5xl text-[32px] md:leading-[55px] leading-9">
              Become a Partner in 3 Easy Steps
            </p>
            <p className="text-[#70727F] text-sm leading-5 px-10 md:w-[70%]">
              Discover how simple it is get started in 3 minutes, following the
              steps below.
            </p>
          </div>
        </section>

        <section className="lg:w-[85%] w-[90%] flex md:justify-between flex-col md:flex-row gap-10 md:gap-28 items-center">
          <div className="flex justify-start flex-col gap-3 md:w-[40%] w-[100%]  ">
            <h3 className="text-primary-4 font-br-firma md:p-2 font-bold md:text-[48px] md:leading-[60px] text-[32px] leading-10">
              Step 1
            </h3>
            <p className="md:text-[18px] font-normal text-base leading-6 md:leading-[30px] md:p-2 text-primary-5">
              Click on this {""}
              <span className="font-semibold">&quot;Get started&quot;</span>
              link below and fill the form, provide information about your
              company and all the required information.
            </p>

            <div onClick={() => openModal()}>
              <ButtonGroup bgColor="#3BAD6B">
                <p className="px-4 text-white leading-10 font-bold">
                  Get Started
                </p>
              </ButtonGroup>
            </div>
          </div>

          <div className="flex justify-center items-center  md:w-[50%] w-[100%]">
            <div className="md:h-[440px] md:w-[485px] w-[100%] h-[100%]">
              <ImageTemplate src={onlineTestImg} />
            </div>
          </div>
        </section>

        {/*  */}

        <section className="lg:w-[85%] w-[90%] flex md:justify-between flex-col-reverse md:flex-row gap-10 only-of-type:md:gap-28 items-center">
          <div className="flex justify-center items-center  md:w-[50%] w-[100%]">
            <div className=" w-[100%] h-[100%]">
              <ImageTemplate src={officeImg} />
            </div>
          </div>

          <div className="flex justify-start flex-col gap-3 md:w-[40%] p-2 w-[100%] ">
            <h3 className="text-primary-4 font-br-firma md:p-2 font-bold md:text-[48px] md:leading-[60px] text-[32px] leading-10">
              Step 2
            </h3>
            <p className="md:text-[18px] md:px-2 font-normal text-base leading-6 md:leading-[30px] text-primary-5">
              After submission, an engagement officer will reach out to you to
              ensure you understand the process and finalise the process.
            </p>
          </div>
        </section>

        {/*  */}

        <section className="lg:w-[85%] w-[90%] flex md:justify-between flex-col md:flex-row gap-10 lg:gap-28 items-center">
          <div className="flex justify-start flex-col gap-3 md:w-[40%] w-[100%] ">
            <h3 className="text-primary-4 font-br-firma font-bold md:text-[48px] md:leading-[60px] text-[32px] leading-10">
              Step 3
            </h3>
            <p className="md:text-[18px] text-base leading-6 md:leading-[30px]  text-primary-5">
              A contract will be signed, and{" "}
              <span className="font-semibold"> You’re all set!</span>
            </p>

            <div onClick={() => openModal()}>
              <ButtonGroup bgColor="#3BAD6B">
                <p className="px-4 text-white leading-10 font-bold">
                  Get Started
                </p>
              </ButtonGroup>
            </div>
          </div>

          <div className="flex justify-center items-center  md:w-[50%] w-[100%]">
            <div className="md:h-[440px] md:w-[485px] w-[100%] h-[100%]">
              <ImageTemplate src={contractImg} />
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default OurPartner;
