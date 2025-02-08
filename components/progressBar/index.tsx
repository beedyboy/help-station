const ProgressBar = ({ width = "30" }) => {
  return (
    <div className="md:w-[339px] rounded-md overflow-hidden shadow-md shadow-[#E8E9ED] w-full h-[10px] bg-white">
      <div
        className="h-[100%] bg-primary-4 "
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
