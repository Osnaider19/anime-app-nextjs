export const SkeletonCard = () => {
  return (
    <div className="w-[270px] h-[150px] relative  border-[#ffffff20] overflow-hidden rounded-sm border shadow-2xl shadow-[#ffffff10]">
      <div className="w-full relative flex flex-col min-h-full  items-end justify-end pb-1  px-2">
        <div className="w-full h-5  rounded-md bg-[#ffffff30]"></div>
        <div className="w-full h-3 bg-[#ffffff30]"></div>
      </div>
    </div>
  );
};
