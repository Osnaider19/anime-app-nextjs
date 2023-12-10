"use client";
export const CardDetails = ({
  img,

  name,
}: {
  img: string;

  name: string;
}) => {
  return (
    <div className="relative w-full h-full  ">
      <div className="relative w-full h-full">
        <img
          src={img}
          alt={`image de ${name}`}
          className="min-w-[210px] w-[210px]  h-[280px] object-cover absolute left-0 -top-16 rounded-md border border-[#ffffff40] "
          loading="lazy"
        />
      </div>
    </div>
  );
};
