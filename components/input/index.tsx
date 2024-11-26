type InputProps = {
  name: string;
  value: string | number;
  labelName: string;
  type: "text" | "number" | "email" | "password" | "date";
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputTemplate: React.FC<InputProps> = ({
  name,
  value,
  type,
  labelName,
  onchange,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="md:text-lg text-base font-semibold leading-6 md:leading-7">
        {labelName}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className="rounded-lg py-2 px-4 border-[#CCCEDB] border-[1px] outline-none"
        onChange={onchange}
      />
    </div>
  );
};

export default InputTemplate;
