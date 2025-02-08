import React, { useState } from "react";
import CountrySelector from "../countrySelector/country";
import { COUNTRIES } from "@/constants/countries";
import { SelectMenuOption } from "@/constants/types";

export default function UserForm({ closeModal }: { closeModal: () => void }) {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState<SelectMenuOption["value"]>(
    COUNTRIES[0].value
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Country:", country);
    // Handle form submission logic here

    if (email && country) {
      closeModal();
    }
  };

  return (
    <div className="flex w-full flex-col justify-center items-center ">
      <div className="bg-white p-3 w-full max-w-md">
        <h2 className="text-2xl md:text-[32px] text-[#383A47] font-bold mb-6">
          Please fill in these details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <CountrySelector
              id="country-selector"
              open={isOpen}
              onToggle={() => setIsOpen(!isOpen)}
              onChange={setCountry}
              selectedValue={
                COUNTRIES.find((option) => option.value === country) ||
                COUNTRIES[0]
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-6 text-white py-2 px-4 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
