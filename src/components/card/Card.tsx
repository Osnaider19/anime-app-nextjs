import Link from "next/link";
type Props = {
 id : number;
 imagen : string;
 title : string;
 genres : string[];
 color : string;
}
export const Card = ({id , imagen , title , genres , color ,} : Props ) => {
  return (
    <div
      className="w-[280px] h-[350px] relative border border-[#ffffff20] overflow-hidden rounded-lg shadow-xl"
      key={id}
    >
      <img
        src={imagen}
        alt={`imagen de ${title}`}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        className="w-full h-full  absolute top-0 left-0"
        style={{
          background: `linear-gradient(${
            color + `90`
          }, transparent , transparent , transparent , transparent , rgba(0,0,0,.7) , rgba(0,0,0,.7)  , rgba(0,0,0,.7)  , rgba(0,0,0,.7))`,
        }}
      ></div>
      <div className="w-full min-h-full h-full relative px-3">
        <div className="w-full flex min-h-full  items-end pb-6">
          <div className="w-full">
            <p className="text-center text-2xl font-bold">
              {title}
            </p>
            <div className="flex gap-x-2 w-full h-full flex-wrap justify-center">
              {genres.map((genre, index) => (
                <div key={index} className="flex justify-center items-center">
                  <p className="text-sm">{genre}</p>
                  <span>{index < genres.length - 1 && ", "}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-cente  w-full items-center gap-x-2 py-2">
              <Link href={`/anime/${id}`} className="w-[50%] ">
                <div className="bg-white text-[#000] w-full flex justify-center items-center py-1  rounded-[4px] overflow-hidden">
                  <span className="block font-semibold">Ver</span>
                </div>
              </Link>
              <button className="bg-[#ffffff30] w-[50%] rounded-[4px] flex justify-center items-center py-1">
                <span className="block">+</span>
                <span className="block font-semibold">Mi lista</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
