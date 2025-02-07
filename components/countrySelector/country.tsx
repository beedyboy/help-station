import { COUNTRIES } from "@/constants/countries";
import { SelectMenuOption } from "@/constants/types";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface CountrySelectorProps {
  id: string;
  open: boolean;
  disabled?: boolean;
  onToggle: () => void;
  onChange: (value: SelectMenuOption["value"]) => void;
  selectedValue: SelectMenuOption;
}

export default function CountrySelector({
  id,
  open,
  disabled = false,
  onToggle,
  onChange,
  selectedValue,
}: CountrySelectorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node) && open) {
        onToggle();
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, open, onToggle]);

  return (
    <div ref={ref}>
      <div className="mt-1 relative">
        <button
          type="button"
          className={`${
            disabled ? "bg-neutral-100" : "bg-white"
          } relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={onToggle}
          disabled={disabled}
        >
          <span className="truncate flex items-center">
            <Image
              alt={`${selectedValue.value}`}
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedValue.value}.svg`}
              className={"inline mr-2 h-4 rounded-sm"}
              width={20}
              height={20}
            />
            {selectedValue.title}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {open && (
          <ul
            className={`absolute z-10 mt-1 w-full bg-white shadow-lg max-h-80 rounded-md text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm 
      transition-opacity duration-100 ease-in-out ${
        open ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            <div className="max-h-64 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded scrollbar-thin overflow-y-scroll">
              {COUNTRIES.filter((country) =>
                country.title.toLowerCase().startsWith(query.toLowerCase())
              ).length === 0 ? (
                <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                  Select your country
                </li>
              ) : (
                COUNTRIES.filter((country) =>
                  country.title.toLowerCase().startsWith(query.toLowerCase())
                ).map((value, index) => (
                  <li
                    key={`${id}-${index}`}
                    className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 flex items-center hover:bg-gray-50 transition"
                    id="listbox-option-0"
                    role="option"
                    aria-selected={value.value === selectedValue.value}
                    onClick={() => {
                      onChange(value.value);
                      setQuery("");
                      onToggle();
                    }}
                  >
                    <Image
                      alt={`${value.value}`}
                      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${value.value}.svg`}
                      className={"inline mr-2 h-4 rounded-sm"}
                      width={20}
                      height={20}
                    />
                    <span className="font-normal truncate">{value.title}</span>
                    {value.value === selectedValue.value && (
                      <span className="text-blue-600 absolute inset-y-0 right-0 flex items-center pr-8">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </li>
                ))
              )}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}
