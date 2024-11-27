"use client";
import React, { useState } from "react";
import FormTemplate from "@/components/formTemplate";
import FoodHandlerFormOne from "@/domain/our-services/foodHandler-form/foodFormOne";
import FoodHandlerFormTwo from "@/domain/our-services/foodHandler-form/foodFormTwo";

export type FoodHandlerFormProps = { email: string; phoneNumber: number };

function FoodHandleForm() {
  const [input, setInput] = useState<FoodHandlerFormProps>({
    email: "",
    phoneNumber: 234,
  });

  const handleFoodHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    return setInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="md:w-[90%] w-full p-4 md:p-0">
        <FormTemplate
          componentOne={
            <FoodHandlerFormOne
              onchange={handleFoodHandler}
              formInput={input}
            />
          }
          componentTwo={
            <FoodHandlerFormTwo
              onchange={handleFoodHandler}
              formInput={input}
            />
          }
          bg="#FFF4D2"
          heading="Request Form For Food Handlers Test"
          headingText="Thank you for choosing HelpStation for your Food Handlers Test. To streamline the process and ensure we fulfil your requirements accurately, please fill out the following request form."
          formHeading="Food Handlers’ Screening "
          formText="Be more than just a bystander"
        />
      </div>
    </div>
  );
}

export default FoodHandleForm;
