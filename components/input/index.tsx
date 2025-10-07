type InputProps = {
  placeholder: string;
  name: string;
  value: string | Date;
  labelName: string;
  type: "text" | "number" | "email" | "password" | "date";
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
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="md:text-lg text-base font-medium leading-6 md:leading-7">
        {labelName}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value as string}
        className="rounded-lg placeholder:text-background-2 placeholder:text-sm py-2 px-4 border-[#CCCEDB] border-[1px] outline-none"
        onChange={onchange}
        min={type === "text" ? undefined : 0}
      />
    </div>
  );
};

export default InputTemplate;
