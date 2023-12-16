"use client";
export const CardDetails = ({
  img,
  name,
}: {
  img: string;

  name: string;
}) => {
  return (
    <div className="w-[130px] h-[100px] md:min-w-[210px] md:w-[210px]  md:h-[200px] relative">
      <div className="relative w-full h-full">
        <img
          src={img}
          alt={`image de ${name}`}
          className="w-[130px] h-[170px] md:min-w-[210px] md:w-[210px]  md:h-[280px] object-cover absolute left-0 -top-16 rounded-md border border-[#ffffff40] "
          loading="lazy"
        />
      </div>
    </div>
  );
};
