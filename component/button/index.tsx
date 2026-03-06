type ButtonProps = {
  text: string;
  textColor: string;
  borderColor: string;
  buttonBg?: string;
  loading?: string;
  onClick?: () => void;
  width: string;
};

function ButtonGroup({ text, textColor }: ButtonProps) {
  return (
    <button className={`text-[${textColor}] border-[1px] py-2 px-4 `}>
      {text}
    </button>
  );
}

export default ButtonGroup;
