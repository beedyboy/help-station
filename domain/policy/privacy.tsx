import ReusableList from "@/components/listItem";
import {
  ambulanceDrivers,
  ambulancePartners,
  commitmentText,
  HMOs,
  individualCustomer,
} from "@/constants/policy";

const PrivacyPolicyPage = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          INTRODUCTION
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          We at Help Emergency Services Limited are strongly committed to
          protecting and safeguarding your private information while serving
          you. In other for us to provide you with optimal care and comply with
          your choices, we have required from you, certain private information.
          This Privacy Notice will inform you of the personal data we collect,
          use and share and how we protect your private data. It is important
          that you read this Notice together with all our terms and conditions
          provided on our website and mobile application, before you subscribe
          to our services. This Privacy Notice applies to all our users;
          partners, customers, drivers, HMOs etc. all over the world
        </p>

        <p className="text-[#383A47] md:leading-[30px] py-4 leading-6 text-base md:text-lg font-normal">
          Help Emergency Services Limited is the data controller for the
          personal data obtained on our website or mobile application. Any
          reference to “we”, “us”, or “our” in this Notice refers to Help
          Emergency Services Limited. You agree to our Privacy Policy by
          visiting our website and using our services.
        </p>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          AGE RESTRICTION
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          You affirm that you are over the age of majority and have the right to
          contract in your own name, and that you have read this Privacy Notice
          and fully understand its contents. Individuals under the age of
          majority are not allowed to sign up for our services and provide us
          with their information.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          OUR COMMITMENT
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          We comply with relevant data protection laws and regulations. This
          means that the personal information we hold about you shall only be:
        </p>

        <div>
          {commitmentText.map((item, i) => {
            return (
              <div key={i}>
                <ReusableList text={item} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          DATA COLLECTION
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          We use different methods to collect data from you. You may give us
          your data by creating an account on our website or mobile application,
          filing and submitting our online forms, communicating with our contact
          agents, communicating with us through our website chat features, using
          our services or partnering with us, subscribing to our services or
          publications, giving us feedback on our services, making a complaint
          or enquiry. We may also obtain your data from third parties and
          publicly available sources. For ambulance drivers, your employers
          would be required to share your personal data with us and HMOs may
          also need to share certain personal data of their members. The data
          which we collect from you include:
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          INDIVIDUAL CUSTOMERS
        </h3>
        <div>
          {individualCustomer.map((item, i) => {
            return (
              <div key={i}>
                <ReusableList text={item} />
              </div>
            );
          })}
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          AMBULANCE DRIVERS
        </h3>
        <div>
          {ambulanceDrivers.map((item, i) => {
            return (
              <div key={i}>
                <ReusableList text={item} />
              </div>
            );
          })}
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          AMBULANCE PARTNERS
        </h3>
        <div>
          {ambulancePartners.map((item, i) => {
            return (
              <div key={i}>
                <ReusableList text={item} />
              </div>
            );
          })}
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          HEALTH MANAGEMENT ORGANIZATIONS (HMOs)
        </h3>
        <div>
          {HMOs.map((item, i) => {
            return (
              <div key={i}>
                <ReusableList text={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
