import Image from "next/image";
import aboutImg from "@/public/images/help_station_about.svg";

function ContactUsPage() {
  return (
    <main className="w-full flex justify-center flex-col gap-4 items-center">
      <section className="relative h-[400px] flex justify-center items-center w-full">
        <div className=" absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-[400px]">
          <Image
            src={aboutImg}
            alt="about_us"
            style={{
              background: "#3BAD6B",
              objectFit: "contain",
              height: "400px",
            }}
          />
        </div>

        <div className="z-10 md:w-[55%] w-[90%] text-white text-center flex justify-center items-center flex-col gap-2  md:gap-3">
          <h2 className="leading-4 pb-3 md:pb-0 font-bold md:text-6xl text-[36px] md:leading-[80px]">
            Contact Us
          </h2>
          <div className="flex text-center flex-col gap-3">
            <p>
              Our dedicated team are available to assist you. Whether you have
              questions, need support, or simply want to chat, we&apos;re here
              for you 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center">
        <div className="md:w-[70%] text-center">
          <p className="text-lg font-semibold leaidng-8">
            Stay In Touch With Us
          </p>
          <h3 className="font-bold text-3xl leading-10 text-[#1B1C20]">
            We’d love to hear from you
          </h3>
          <div></div>
        </div>
      </section>
    </main>
  );
}

export default ContactUsPage;
