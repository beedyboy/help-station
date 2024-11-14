import React from "react";

type ButtonProps = {
  bgColor?: string;
  borderColor?: string;
  width?: string;
  children: React.ReactNode;
};

function ButtonGroup({
  width = "204px",
  borderColor,
  bgColor = "btnColor",
  children,
}: ButtonProps) {
  return (
    <button
      type="submit"
      className={`px-5 py-5 rounded-md `}
      style={{
        width,
        borderColor,
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "12px",
      }}
    >
      {children}
    </button>
  );
}

export default ButtonGroup;
