export default function BannerImg({
  img,
  name,
}: {
  img: string;
  name: string;
}) {
  return (
    <div className="w-full relative h-[240px] md:min-h-[350px] md:h-full">
      {img ? (
        <img
          src={img}
          className="w-full  absolute left-0 top-0 h-full object-cover"
          alt={`imagen de ${name}`}
        />
      ) : (
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[#1E112A] to-[#000] "></div>
      )}
    </div>
  );
}
