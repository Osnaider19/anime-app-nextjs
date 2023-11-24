export default function BannerImg({ img }: { img: string }) {
  return (
    <div className="w-full relative min-h-[400px] h-full">
      <img
        src={img}
        className="w-full  absolute left-0 top-0 h-full object-cover"
        alt=""
      />
    </div>
  );
}
