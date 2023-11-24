"use client";
export const CardDetails = ({ img }: { img: string }) => {
  return (
    <div className="relative min-w-[320px] w-[320px] min-h-[443px] h-full ">
      <div className="relative w-full h-full -mt-36 rounded-lg overflow-hidden  shadow-2xl border border-[#ffffff50] shadow-[#ffffff30]">
        <div
          className="absolute left-0 top-0 w-full  h-full rounded-lg overflow-hidden z-[1]"
          style={{
            background: `linear-gradient(transparent, transparent , transparent )`,
          }}
        ></div>
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover relative"
          loading="lazy"
        />
      </div>
    </div>
  );
};
