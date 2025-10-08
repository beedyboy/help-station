import React from "react";

type InputProps = {
  placeholder: string;
  name: string;
  value: string | number | Date;
  labelName: string;
  type: "text" | "number" | "email" | "password" | "date" | "tel";
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number | null;
};

const InputTemplate: React.FC<InputProps> = ({
  name,
  value,
  type,
  labelName,
  placeholder,
  onchange,
}) => {
  const onlyNumberKey = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "Delete",
    ];

    if (allowedKeys.includes(evt.key)) return;

    if (!/^[0-9]$/.test(evt.key)) {
      evt.preventDefault();
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <label className="md:text-lg text-base font-medium leading-6 md:leading-7">
        {labelName}
      </label>
      <input
        onKeyDown={(e) => {
          if (type === "tel" || type === "number") {
            onlyNumberKey(e);
          }
        }}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value as string}
        className="rounded-lg placeholder:text-background-2 placeholder:text-sm py-2 px-4 border-[#CCCEDB] border-[1px] outline-none"
        onChange={onchange}
        min={type === "number" ? 0 : undefined}
      />
    </div>
  );
};

export default InputTemplate;
