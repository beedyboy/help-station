"use client";
import { useRouter, notFound } from "next/navigation";
import * as Yup from "yup";
import Image from "next/image";
import { SimpleFooter } from "@/components/layout/SimpleFooter";
import React, {
  AwaitedReactNode,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import {
  AMBUCYCLE_PLANS,
  AMBULANCE_SUBSCRIPTION_PLANS,
} from "@/constants/subscriptions";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  genotype: Yup.string().oneOf(["AA", "AS", "SS", "AC"], "Invalid genotype"),
  gender: Yup.string().oneOf(["Male", "Female"], "Gender is required"),
  allergies: Yup.string().required("Allergy status is required"),
  medication: Yup.string().required("Medication status is required"),
});

const SUBSCRIPTION_HINT = [
  "Because time can be the difference between life and death, the First Responder plan ensures quicker response time through the use of Ambu cycles dispatched with paramedics to beat the usual Lagos traffic.",
  "Our highly trained paramedics provide basic life support at the scene of an emergency to stabilize the victim before the arrival of advanced treatment or transportation to a certified health center.",
  "The first responder plan is currently available within Lagos Island",
];
const plansMap = {
  "ambucycle-plan": AMBUCYCLE_PLANS,
  "ambulance-subscription-plans": AMBULANCE_SUBSCRIPTION_PLANS,
};

function Plan({ params }: { params: { category: string; planName: string } }) {
  const resolvedParams = React.use(params);
  const { category, planName } = resolvedParams;

  const planData = plansMap[category]?.find(
    (plan: { title: string }) =>
      plan.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^a-z0-9-]/g, "") === planName
  );

  useEffect(() => {
    if (!planData) {
      notFound();
    }
  }, [planData]);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    genotype: "",
    phone: "",
    plan: "First user plan",
  });
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const newErrors = validationErrors.inner.reduce(
        (acc: any, error: any) => {
          acc[error.path] = error.message;
          return acc;
        },
        {}
      );
      console.log({ newErrors });
      setErrors(newErrors);
      return false;
    }
  };

  const renderSelect = (
    label:
      | string
      | number
      | bigint
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | Promise<AwaitedReactNode>
      | null
      | undefined,
    name: string | undefined,
    options: any[]
  ) => (
    <div>
      <label className="block text-xs font-semibold text-[#1b1b20]">
        {label}
      </label>
      <select
        className="w-full border border-[#c5c7d2] rounded-lg p-2"
        name={name}
        value={formData[name]}
        onChange={handleChange}
      >
        <option value="">Select {label}</option>
        {options.map(
          (
            option:
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | Promise<AwaitedReactNode>
              | Key
              | null
              | undefined
          ) => (
            <option key={option} value={option}>
              {option}
            </option>
          )
        )}
      </select>
      {errors[name] && <p className="text-red-600 text-xs">{errors[name]}</p>}
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit prevented");
    const isValid = await validateForm();
    console.log("form isValid", isValid);
    if (!isValid) return;

    setLoading(true);
    try {
      const metadata = formData;
      const callbackUrl = process.env.NEXT_PUBLIC_CALLBACK_URL;

      const response = await fetch("/api/payment/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          amount: parseFloat(planData.price),
          metadata,
          callback_url: callbackUrl,
        }),
      });

      const responseData = await response.json();
      if (response.ok) {
        // Redirect to Paystack payment page
        const { data } = responseData;
        // console.log({ data });
        window.location.href = data.authorization_url;
      } else {
        alert(`Error: ${responseData.message}`);
      }
    } catch (error) {
      console.error("Payment Initialization Error:", error);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row min-h-screen  mt-[120px] ">
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-6 flex flex-col items-center gap-4">
        <div className="w-[440px] h-[790px] flex flex-col justify-center items-start gap-12">
          <div
            className="flex items-center justify-start gap-4 cursor-pointer"
            onClick={() => router.push("/subscriptions")}
          >
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
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                      value={planData.title}
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
                      name="firstName"
                      placeholder="Enter first name"
                      className="w-full border border-[#c5c7d2] rounded-lg p-2"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-xs">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1b1b20]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border border-[#c5c7d2] rounded-lg p-2"
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-xs">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1b1b20]">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+234 (555) 000-0000"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-[#c5c7d2] rounded-lg p-2"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs">{errors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {renderSelect("Genotype", "genotype", [
                    "AA",
                    "AS",
                    "SS",
                    "AC",
                  ])}
                  {renderSelect("Gender", "gender", ["Male", "Female"])}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {renderSelect("Do you have Allergies?", "allergies", [
                    "Yes",
                    "No",
                  ])}

                  {renderSelect("Are you on any medication?", "medication", [
                    "Yes",
                    "No",
                  ])}
                </div>
                <div className="w-[100%]">
                  <button
                    className={`w-full flex justify-center gap-3 bg-primary-4 p-4 rounded-lg text-white ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    type="submit"
                    disabled={loading}
                  >
                    <Image
                      src="/icons/send.svg"
                      width={20}
                      height={20}
                      alt="send"
                    />{" "}
                    <span>{loading ? "Loading..." : "Get Plan"}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <SimpleFooter />
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
}

export default Plan;
