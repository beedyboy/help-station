import ReusableList from "@/components/listItem";
import {
  ambulanceDrivers,
  ambulancePartners,
  applicatants,
  commitmentText,
  data_sharing,
  HMOs,
  how_to_your_data,
  individualCustomer,
  your_right,
} from "@/constants/policy";

const PrivacyPolicyPage = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <p className="text-primary-5"> Last Updated: [9/25/2025] </p>
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          HELPSTATION PRIVACY POLICY
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          HelpStation (“HelpStation,” “we,” “our,” or “us”) is committed to
          protecting and safeguarding your personal information. This Privacy
          Policy explains how we collect, use, share, and protect your data when
          you use our website or services. Please read this Policy carefully
          together with our Terms and Conditions before subscribing to or using
          our services. By using our website or services, you consent to the
          practices described in this Policy.
          {/* We at Help Emergency Services Limited are strongly committed to
          protecting and safeguarding your private information while serving
          you. In other for us to provide you with optimal care and comply with
          your choices, we have required from you, certain private information.
          This Privacy Notice will inform you of the personal data we collect,
          use and share and how we protect your private data. It is important
          that you read this Notice together with all our terms and conditions
          provided on our website and mobile application, before you subscribe
          to our services. This Privacy Notice applies to all our users;
          partners, customers, drivers, HMOs etc. all over the world */}
        </p>
        {/* 
        <p className="text-[#383A47] md:leading-[30px] py-4 leading-6 text-base md:text-lg font-normal">
          Help Emergency Services Limited is the data controller for the
          personal data obtained on our website or mobile application. Any
          reference to “we”, “us”, or “our” in this Notice refers to Help
          Emergency Services Limited. You agree to our Privacy Policy by
          visiting our website and using our services.
        </p> */}
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          1. DATA CONTROLLER
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          HelpStation is the data controller responsible for the personal
          information collected through our website and services
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          2. APPLICABILITY
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          This Privacy Policy applies to all our users globally, including:
        </p>
        <div>
          {applicatants.map((item, i) => {
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
          3. AGE RESTRICTION
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          You affirm that you are of the age of majority in your jurisdiction
          and have the legal capacity to contract in your own name. Individuals
          under the age of majority are not permitted to sign up for our
          services or provide personal data to us.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          4. OUR COMMITMENT TO DATA PROTECTION
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          We comply with all applicable data protection laws and regulations.
          This means that personal information we hold about you will only be:
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
          5. DATA WE COLLECT
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          We may collect personal data directly from you, through your use of
          our services, or from third parties (including employers, HMOs, or
          publicly available sources).
        </p>

        {/* 5.1 */}
        <div className="flex flex-col  gap-4  mt-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-primary-5 font-br-firma font-semibold text-lg leading-[20px] md:text-[18px] md:leading-[25px]">
              5.1 Individual Customers
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

          {/* 5.2 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-primary-5 font-br-firma font-semibold text-lg leading-[20px] md:text-[18px] md:leading-[25px]">
              5.2 Ambulance Drivers
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

          {/* 5.3 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-primary-5 font-br-firma font-semibold text-lg leading-[20px] md:text-[18px] md:leading-[25px]">
              5.3 Ambulance Partners
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

          {/* 5.4 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-primary-5 font-br-firma font-semibold text-lg leading-[20px] md:text-[18px] md:leading-[25px]">
              5.4 Health Management Organizations (HMOs)
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

          {/* 5.5 */}
        </div>
      </div>

      {/*  */}

      {/*  */}
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          6. HOW WE USE YOUR DATA
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          We use your data to:
        </p>
        <div>
          {how_to_your_data.map((item, i) => {
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
          7. DATA SHARING
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          We may share your data with:
        </p>
        <div>
          {data_sharing.map((item, i) => {
            return (
              <div key={i}>
                <ReusableList text={item} />
              </div>
            );
          })}
        </div>

        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          We do not sell your personal data to third parties.
        </p>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          8. DATA RETENTION
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          We retain your personal data only for as long as necessary to fulfill
          the purposes outlined in this Policy, including compliance with legal,
          accounting, or reporting requirements.
        </p>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          9. DATA SECURITY
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          We implement appropriate security measures to prevent unauthorized
          access, alteration, disclosure, or destruction of your personal
          information. However, no method of transmission or storage is 100%
          secure.
        </p>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          10. YOUR RIGHTS
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          Depending on your jurisdiction, you may have the following rights:
        </p>
        <div>
          {your_right.map((item, i) => {
            return (
              <div key={i}>
                <ReusableList text={item} />
              </div>
            );
          })}
        </div>

        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          Requests can be made by contacting us at info@helpstation.ng.
        </p>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          11. INTERNATIONAL DATA TRANSFERS
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          As a global service provider, your data may be transferred and
          processed outside your country of residence. We ensure that
          appropriate safeguards are in place for such transfers.
        </p>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          12. COOKIES AND TRACKING TECHNOLOGIES
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          Our website may use cookies and similar technologies to improve user
          experience, analyze traffic, and provide personalized services. You
          may adjust your browser settings to refuse cookies, though this may
          affect your service experience.
        </p>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          13. CHANGES TO THIS POLICY
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          We may update this Privacy Policy from time to time. Any updates will
          be posted on our website with the updated “Last Updated” date.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-primary-5 font-br-firma font-semibold text-2xl leading-[30px] md:text-[28px] md:leading-[35px]">
          14. CONTACT US
        </h3>
        <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
          For questions, concerns, or requests related to this Privacy Policy,
          please contact us at:
        </p>

        <p className="text-[#383A47] font-semibold md:leading-[20px] leading-3 text-base md:text-lg ">
          HelpStation
        </p>
        <p className="text-[#383A47] md:leading-[10px] leading-3 text-base md:text-lg font-normal">
          <span className="font-semibold">Email:</span> info@helpstation.ng
        </p>
        <p className="text-[#383A47] md:leading-[20px] leading-3 text-base md:text-lg font-normal">
          <span className="font-semibold">Phone:</span> 09132000013 or
          09132000014
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
