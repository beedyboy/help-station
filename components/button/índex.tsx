"use client";

import React from "react";
import { useRouter } from "next/navigation";

type ButtonProps = {
  bgColor?: string;
  borderColor?: string;
  width?: string;
  children: React.ReactNode;
  paddingX?: string;
  paddingY?: string;
  link?: string;
};

function ButtonGroup({
  borderColor,
  bgColor = "btnColor",
  children,
  link,
  paddingX = "px-5",
  paddingY = "py-5",
}: ButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };
  return (
    <button
      type="submit"
      className={`rounded-md md:w-auto w-[167px] `}
      style={{
        borderColor,
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "12px",
        padding: `${paddingX} ${paddingY}`,
        width: "auto",
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default ButtonGroup;
