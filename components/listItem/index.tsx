const ReusableList = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-start  gap-3 px-3">
      <div className="flex justify-center items-center relative w-[5px] h-[50%]">
        <div className=" w-[3px] h-[3px] absolute top-3 left-0  rounded-full bg-black "></div>
      </div>
      <p className="text-[#383A47] md:leading-[30px] leading-6 text-base md:text-lg font-normal">
        {text}
      </p>
    </div>
  );
};

export default ReusableList;
