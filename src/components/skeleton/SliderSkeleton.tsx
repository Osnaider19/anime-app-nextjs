export const SliderSkeleton = () => {
  return (
    <div className="w-full h-full relative px-8  pt-[80px]">
      <div className="w-full relative h-[388px]">
        <div className="absolute left-0 top-0 w-full h-full bg-[#ffffff30] animate-pulse rounded-lg px-5 py-3 flex justify-end items-center flex-col">
          <div className="h-7 w-[300px] rounded-md bg-[#ffffff60] mt-4"></div>
          <div className="h-4 w-[400px] rounded-md bg-[#ffffff60] mt-4"></div>
          <div className="h-24 w-[80%] rounded-md bg-[#ffffff60] mt-4"></div>
        </div>
      </div>
    </div>
  );
};
