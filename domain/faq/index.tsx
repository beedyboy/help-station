"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import aboutImg from "@/public/images/help_station_about.svg";
import FAQDropdown from "@/components/dropdown/faqDropdown";
import { faqData } from "@/constants/faq";
import { RiSearch2Line } from "react-icons/ri";
import shrugBroImg from "@/public/images/help_station_shrug_bro.svg";
import ImageTemplate from "@/components/image";
import ServiceLayout from "@/components/layout/our-services/serviceLayout";
import ServiceTextTemplate from "@/components/layout/our-services/serviceTextTemplate";
import MainLayout from "@/components/layout/MainLayout";

function FAQ() {
  const [faq, setFaq] = useState(faqData);
  const [query, setQuery] = useState<string>("");

  const handleFAQ = (id: number) => {
    const arr = faq.map((faq) => {
      if (faq.id == id) {
        return { ...faq, isOpen: !faq.isOpen };
      } else return faq;
    });

    setFaq(arr);
  };

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setQuery(text);
  };

  const handleSearch = () => {
    setFaq((items) =>
      items.filter((item) =>
        item.question.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  useEffect(() => {
    const debounce = () => {
      setFaq((items) =>
        items.filter((item) =>
          item.question.toLowerCase().includes(query.toLowerCase())
        )
      );
    };
    const timer = setTimeout(() => {
      if (query.length > 2) {
        debounce();
      } else return setFaq(faqData);
    }, 3000);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <MainLayout>
      <main className="w-full flex justify-center flex-col gap-7 md:gap-12 items-center ">
        <section className="relative h-[400px] flex justify-center items-center w-full">
          <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-[400px]">
            <Image
              src={aboutImg}
              alt="contact_us"
              style={{
                width: "100%",
                background: "#3BAD6B",
                objectFit: "contain",
                height: "400px",
              }}
            />
          </div>

          <div className="z-10 md:w-[55%] w-[90%] text-white text-center flex justify-center items-center flex-col gap-2 md:gap-3">
            <div className="flex justify-center items-center flex-col w-[70%]">
              <div className=" h-[46px] w-[46px]">
                <Image
                  src="/icons/wpf_faq.svg"
                  alt=""
                  width={100}
                  height={100}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h2 className="pb-3 md:pb-0 leading-10 font-bold md:text-6xl text-[36px] md:leading-[80px]">
                Frequently Asked Questions
              </h2>
              <div className="flex text-center flex-col gap-3">
                <p className="font-normal md:text-[20px] leading-10">
                  Everything you need to know about our products and billings.
                </p>
              </div>
            </div>

            <div className="w-full relative border-none">
              <div className="absolute left-2 top-3">
                <RiSearch2Line color="black" fill="black" size={28} />
              </div>
              <div
                onClick={handleSearch}
                className="absolute right-2 top-1 p-2 px-3 md:px-8 text-center rounded-lg bg-primary-4 "
              >
                <p className="text-white">Search</p>
              </div>
              <input
                name="search"
                type="text"
                onChange={handleQuery}
                className="rounded-lg outline bg-white px-10 p-3 w-[100%] border-white border-[1px] outline-white placeholder:text-sm text-primary-5"
                placeholder="Type your question here"
              />
            </div>
          </div>
        </section>

        <section className=" w-full flex justify-center items-center p-2">
          <div className="md:w-[85%] w-[90%] flex flex-col gap-3">
            {faq.length > 0 ? (
              faq.map((faq) => (
                <div key={faq.id}>
                  <FAQDropdown
                    id={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={faq.isOpen}
                    onClick={(id: number) => handleFAQ(id)}
                  />
                </div>
              ))
            ) : (
              <div className="text-lg font-medium text-primary-5 p-4">
                <p>
                  No result from the search , navigate to our contact Us page to
                  send a direct message.
                </p>
                <p>Thanks</p>
              </div>
            )}
          </div>
        </section>

        <div className="md:w-[85%] w-[100%] bg-[#c5e9cf] md:rounded-2xl md:mb-8">
          <ServiceLayout bgColor="#c5e9cf">
            <div className="py-2 md:p-6  w-full flex rounded-lg flex-col items-center lg:flex-row gap-4  lg:gap-3 justify-center">
              <div className="lg:w-[40%] lg:h-[70%]  h-[350px] justify-center items-center w-full rounded-lg overflow-hidden">
                <div className=" overflow-hidden md:h-full">
                  <ImageTemplate src={shrugBroImg} />
                </div>
              </div>
              <div className="lg:w-[60%] w-full flex lg:pl-8 justify-start items-center lg:gap-2 lg:justify-center flex-col ">
                <div className="w-[80%]">
                  <ServiceTextTemplate
                    heading="Didn’t Find the Answer You Need"
                    headingText=""
                    description="For more detailed information and additional resources, please visit our website. Our team is also available to assist you with any further questions you may have."
                    linkText="www.Helpstationfaq.com"
                    linkColor="#32A061"
                    subDescription=""
                    hasOnclickFn={false}
                    link=""
                    name=""
                    onClick={() => console.log("")}
                    subHeading=""
                    text=""
                  />
                </div>
              </div>
            </div>
          </ServiceLayout>
        </div>
      </main>
    </MainLayout>
  );
}

export default FAQ;
