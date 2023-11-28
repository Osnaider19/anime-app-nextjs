"use client";
export const CardDetails = ({ img }: { img: string }) => {
  return (
    <div className="relative min-w-[320px] w-[320px] min-h-[248px] h-full  ">
      <div className="relative w-full h-full">
        {/* <div
          className="absolute left-0 top-0 w-full  h-full rounded-lg overflow-hidden z-[1]"
          style={{
            background: `linear-gradient(transparent, transparent , transparent )`,
          }}
        ></div> */}
        <img
          src={img}
          alt=""
          className="min-h-[430px] w-full h-full object-cover absolute left-0 -top-36 rounded-lg   shadow-2xl border border-[#ffffff50] shadow-[#ffffff30] "
          loading="lazy"
        />
      </div>
    </div>
  );
};
