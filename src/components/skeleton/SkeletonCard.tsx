import "./skeleton-card.css";
export const SkeletonCard = () => {
  return (
    <div className="w-[200px] h-[250px] relative  border-[#ffffff20] overflow-hidden  border shadow-2xl shadow-[#ffffff10] rounded-md animate-pulse">
      <div className="w-full relative flex flex-col min-h-full  items-end justify-end pb-1  px-2">
        <div className="w-full h-5  rounded-md bg-[#ffffff30] mb-2 animate-pulse"></div>
        <div className="w-full h-3 bg-[#ffffff30] mb-3 rounded-md animate-pulse duration-100"></div>
      </div>
    </div>
  );
};
