import React from "react";

type ButtonProps = {
  bgColor?: string;
  borderColor?: string;
  width?: string;
  children: React.ReactNode;
  paddingX?: string;
  paddingY?: string;
};

function ButtonGroup({
  borderColor,
  bgColor = "btnColor",
  children,
  paddingX = "px-5",
  paddingY = "py-5",
}: ButtonProps) {
  return (
    <button
      type="submit"
      className={`rounded-md md:w-[204] w-[167px] `}
      style={{
        borderColor,
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "12px",
        padding: `${paddingX} ${paddingY}`,
      }}
    >
      {children}
    </button>
  );
}

export default ButtonGroup;
