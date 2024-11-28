import Image from "next/image";
import aboutImg from "@/public/images/help_station_about.svg";
import ImageTemplate from "@/components/image";
import ServiceTextTemplate from "@/components/layout/our-services/serviceTextTemplate";
import CEOImg from "@/public/images/help_station_CEO.svg";
import COFounderImg from "@/public/images/help_station_co-founder.svg";
import marketingLeadImg from "@/public/images/help_station_marketing-lead.svg";
import productLeadImg from "@/public/images/help_station_product-lead.svg";
import helpBgImg from "@/public/images/about_background_image.svg";
import helpImg from "@/public/images/help_station_help.svg";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { aboutImages } from "@/constants/about";

function AboutUsPage() {
  return (
    <main className=" flex flex-col gap-3 md:gap-20 max-w-[1440px] overflow-hidden">
      <section className="relative h-[600px] flex justify-center items-center w-full">
        <div className=" absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-[600px]">
          <Image
            src={aboutImg}
            alt="about_us"
            style={{
              background: "#3BAD6B",
              objectFit: "contain",
              height: "600px",
            }}
          />
        </div>

        <div className="z-10 md:w-[55%] w-[90%] text-white text-center flex justify-center items-center flex-col gap-2  md:gap-3">
          <h4 className="md:text-2xl text-base font-semibold md:leading-7 ">
            About{" "}
          </h4>
          <h2 className="leading-4 pb-3 md:pb-0 font-bold md:text-6xl text-[36px] md:leading-[80px]">
            About Our Company
          </h2>
          <div className="flex text-center flex-col gap-3">
            <p>
              A healthcare logistics company leveraging smart technology to
              provide quality emergency care and creating synergies between the
              various stakeholders in the healthcare ecosystem. The HELP
              platform provides improved access to emergency medical services in
              a timely and efficient manner with affordability options. We also
              provide healthcare navigation services which includes hospital
              mapping and service directory, laboratory and diagnostic center
              inventory and a pharmacy database.{" "}
            </p>
            <p>
              Our management team is deeply invested in sustaining and building
              on the existing emergency services framework. We aim to create
              solutions that will drive quality, improve cross communication and
              provider affordability options.
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-[#F9F9FC] flex flex-col justify-cente  p-2 md:gap-20 md:p-16 items-center w-full ">
        {/*1  */}
        <div className=" relative flex justify-center items-center bg-[#F9F9FC] w-full py-6 md:py-0 ">
          <div className="absolute  flex justify-center items-center md:w-[254px] md:h-[254px] h-[183px] w-[183px] rounded-full bg-[#D7F1DE] -top-6 md:-top-3  -left-[150px] md:-left-[250px]">
            <div className="h-[80%] w-[85%] md:w-[80%] bg-[#F9F9FC] rounded-full">
              {" "}
            </div>
          </div>
          <div className=" w-[90%] z-10 md:mt-20">
            <div className=" flex items-center md:gap-10 md:flex-row flex-col w-full">
              <div className="w-full  h-[350px] md:w-[700px] md:h-[480px]">
                <ImageTemplate src={CEOImg} />
              </div>
              <div className="w-full">
                <ServiceTextTemplate
                  subHeading="CEO/Co-Founder"
                  headingText="DEJI FABORODE, MD, MHA"
                  description="Deji Faborode, MD, MHA, is the Chief Executive Officer (CEO) and Co-Founder of HelpStation, bringing over 12 years of expertise in healthcare to the team. With a robust background in clinical practice, healthcare administration, and strategic initiatives, Deji excels in leading product development and business growth. His leadership has been pivotal in securing funding and managing finances, driving the company's mission forward. Deji's career includes significant roles such as Associate Director at Merck, where he oversaw a $5M market research budget for oncology, and Director of Market Access Strategy at Ipsos, managing a $2M retainer. He has also led impactful projects at Avalere Health and AmeriHealth Caritas, demonstrating his proficiency in market access and quality improvement. An alumnus of the University of North Carolina and Obafemi Awolowo University, Deji holds an MHA and an MBChB, complemented by certifications in Six Sigma and quality improvement. His strategic vision and commitment to healthcare transformation make him an invaluable leader at HelpStation."
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}

        <div className=" relative flex justify-center items-center bg-[#F9F9FC] w-full">
          <div className="absolute flex justify-center items-center md:w-[254px] md:h-[254px] h-[183px] w-[183px] rounded-full bg-[#D7F1DE] md:-top-40 -top-20 -right-[150px] md:-right-[250px]">
            <div className="h-[80%] w-[80%] bg-[#F9F9FC] rounded-full"> </div>
          </div>

          <div className=" w-[90%] z-10 md:mt-20">
            <div className=" flex items-center md:gap-10 md:flex-row flex-col-reverse w-full">
              <div className="w-full">
                <ServiceTextTemplate
                  subHeading="COO / Co - Founder"
                  headingText="YEWANDE ALEBIOSU, MD"
                  description="Yewande Alebiosu, MD, is the Chief Operations Officer and Co-Founder of HelpStation, leveraging her extensive medical background and strategic acumen to drive operational excellence. With a Bachelor of Medicine and Surgery from the University of Lagos, Yewande has been instrumental in reducing operational costs through optimising capabilities and minimising waste.
Her leadership has been key in cultivating strategic relationships with stakeholders, leading to policy changes that enhance emergency healthcare services. Yewande's strategic initiatives have boosted HelpStation's revenue and her expertise in product development, process optimization, and market strategy has been crucial in expanding telemedicine services across Nigeria.
With a proven track record in leading teams and driving organisational growth, Yewande is committed to ensuring equitable access to quality healthcare for all communities. Her dedication to healthcare innovation and operational efficiency makes her a cornerstone of HelpStation's mission and success."
                />
              </div>

              <div className="w-full h-[350px] md:w-[700px] md:h-[480px]">
                <ImageTemplate src={COFounderImg} />
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}

        <div className=" relative flex justify-center items-center bg-[#F9F9FC] w-full">
          <div className="absolute  flex justify-center items-center md:w-[254px] md:h-[254px] h-[183px] w-[183px] rounded-full bg-[#D7F1DE] -top-3 -left-[150px] md:-left-[250px]">
            <div className="h-[80%] w-[85%] md:w-[80%] bg-[#F9F9FC] rounded-full">
              {" "}
            </div>
          </div>
          <div className=" w-[90%] z-10 md:mt-20 mt-10">
            <div className=" flex items-center md:gap-10 md:flex-row flex-col w-full">
              <div className="w-full h-[350px] md:w-[700px] md:h-[480px]">
                <ImageTemplate src={marketingLeadImg} />
              </div>
              <div className="w-full">
                <ServiceTextTemplate
                  subHeading="Marketing and Growth Lead"
                  headingText="MARTINS MOMAH "
                  description="Martins is the Marketing and Growth Lead at HelpStation, bringing over 15 years of experience in sales, marketing, and growth within the HealthTech and pharma sectors. A seasoned pharmacist consultant, Martins excels in driving organisational goals through innovative strategies and efficient team management. At HelpStation, Martins leverages his extensive background in international business negotiations and brand activations to spearhead growth initiatives. His leadership has been pivotal in managing a team of over 100 sales representatives across Nigeria and Ghana, achieving significant market penetration and brand recognition. With a  B. Pharm degree from the University of Lagos, Martins has a  proven track record in product pricing, positioning, and data-driven decision-making, Martins has successfully executed nationwide campaigns that drive brand visibility and customer engagement. His entrepreneurial ventures, including founding Lokal Broda Limited and LB Pharmacy Limited, demonstrate his commitment to healthcare innovation and community wellness."
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}

        <div className=" relative flex justify-center items-center bg-[#F9F9FC] w-full">
          <div className="absolute flex justify-center items-center md:w-[254px] md:h-[254px] h-[183px] w-[183px] rounded-full bg-[#D7F1DE] md:-top-40 -top-12 -right-[150px] md:-right-[250px]">
            <div className="h-[80%] w-[80%] bg-[#F9F9FC] rounded-full"> </div>
          </div>

          <div className=" w-[90%] z-10 md:mt-20 mt-10">
            <div className=" flex items-center md:gap-10 md:flex-row flex-col-reverse w-full">
              <div className="w-full">
                <ServiceTextTemplate
                  subHeading="Product and Process Lead"
                  headingText="MICHAEL FARONBI"
                  description="Michael is the Product and Process Lead at HelpStation. He is skilled in modelling, simulating, and optimizing solutions and thrives in driving operational efficiency and effectiveness. He has successfully managed  large-scale projects across continents, collaborating closely with diverse teams and stakeholders to deliver impactful results. 
At HelpStation, Michael leads the product development lifecycle from ideation through to launch, leveraging research insights to inform product strategy and development. He is committed to implementing innovative solutions that enhance performance and align with our business objectives.
With a Master's in Engineering from the University of Victoria and a Bachelor's in Science from Ternopil National Technical University, He combines technical expertise with a creative problem-solving approach. 
"
                />
              </div>

              <div className="w-full h-[350px] md:w-[700px] md:h-[480px]">
                <ImageTemplate src={productLeadImg} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D7F1DE] w-full flex justify-center items-center ">
        <div className="py-10 w-[80%] text-center text-[#1B1C20] flex flex-col items-center ">
          <h3 className="font-bold  text-5xl leading-[60px] ">Our Gallery</h3>
          <p className="text-lg leading-7 text-[#1B1C20]">
            Explore moments of excellence and dedication captured in our work.
          </p>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 py-10 w-full ">
            {aboutImages.map((image, i) => {
              return (
                <div key={i} className="rounded-xl overflow-hidden">
                  <ImageTemplate src={image} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className=" w-full flex justify-center items-center ">
        <div className="md:w-[80%] w-[85%] flex flex-col gap-4 py-10">
          {/*  */}
          <div className="flex   md:flex-row flex-col justify-start gap-3 md:gap-8">
            <h3 className="font-bold text-2xl leading-10  md:text-5xl md:leading-[60px] ">
              We are focused on making the world a safer place. HELP is on the
              way
            </h3>
            <p className=" text-[#70727F] text-base text-[20px] leading-6 md:leading-7 ">
              Here at HELP, we are passionate about easing the bottlenecks
              around medical emergencies. We are creating better access to
              ambulances and more visibility for appropriate health facilities
            </p>
          </div>
          {/*  */}

          <div className="flex  md:flex-row flex-col md:justify-between items-center gap-32 md:gap-7 ">
            {/*  */}
            <div className="relative md:w-[40%] flex flex-col gap-5 items-center justity-center mt-7">
              <div className="absolute md:-top-2 left-5 md:left-3 -z-10 bottom-0 border-dashed border-2 border-btnColor h-[200px] "></div>
              <div className="-left-36 flex justify-between gap-5 w-full  ">
                <div className="md:w-7 md:h-7 p-4 w-12 h-12 bg-btnColor flex  justify-center items-center rounded-full">
                  <div className="">
                    <MdOutlineAirplanemodeActive size={24} color="white" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg leading-8 text-[#1B1C20]">
                    Mission
                  </h3>
                  <p>
                    To be the leading healthcare logistic company providing
                    solutions that ensure access to quality healthcare services.
                  </p>
                </div>
              </div>

              <div className="-left-36 flex justify-between gap-5 w-full ">
                <div className="md:w-7 md:h-7 p-4 w-12 h-12 bg-btnColor flex  justify-center items-center rounded-full">
                  <IoMdEye size={24} color="white" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg leading-8 text-[#1B1C20]">
                    Vission
                  </h3>
                  <p>
                    To become a one-stop portal for medical services in Africa
                    by 2030.
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="md: md:w-[50%] relative flex  flex-col justify-end items-center">
              <div className="absolute right-4 left-0 ">
                <ImageTemplate src={helpBgImg} />
              </div>
              <div className="w-[40%] top md:-top-10 h-[40%]">
                <ImageTemplate src={helpImg} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUsPage;
