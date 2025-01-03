type RadioProps = {
  name: string;
  value: boolean | string ;
  labelName: string;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioInputTemplate: React.FC<RadioProps> = ({
  name,
  value,
  labelName,
  onchange,
}) => {
  return (
    <div className="w-full flex items-center justify-start gap-4">
      <input
        type="checkbox"
        name={name}
        // value={value}
        checked={value ? true : false}
        className="rounded-lg py-2 px-4 border-[#CCCEDB] border-[1px]"
        onChange={onchange}
      />
      <label className="md:text-lg text-base font-semibold leading-6 md:leading-7">
        {labelName}
      </label>
    </div>
  );
};

export default RadioInputTemplate;
