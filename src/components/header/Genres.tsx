import { IconsArrowB } from "@/icons/Icons";
import { ItemBrowse } from "./ItemBrowse";

export const Genres = () => {
  return (
    <ul className="flex justify-center items-center">
      <li className="cursor-pointer py-2 px-3 group  rounded-md hover:bg-black/20">
        <div className="relative w-full h-full flex justify-center items-center">
          <span>Genres</span>
          <span className="group-hover:rotate-180 transition-all duration-300">
            <IconsArrowB />
          </span>
          <div className="group-hover:opacity-100 group-hover:pointer-events-auto opacity-0 absolute right-0 top-7  transition-opacity duration-300  py-3 px-1 w-[300px] pointer-events-none pt-5">
            <div className="hidden fixed w-full h-screen top-[50px] left-0 bg-black/50 group-hover:block pointer-events-none "></div>

            <div className="relative w-full h-full bg-black/80 py-3 rounded-md px-2">
              <div className="absolute z-[2] right-8 -top-7 w-0 h-0 border-solid border-[14px]  border-black/90  border-l-transparent border-r-transparent border-t-transparent "></div>
              <ul className="grid grid-cols-3 grid-rows-2 justify-center items-center">
                <ItemBrowse link="#" title="Action" />
                <ItemBrowse link="#" title="Drama" />
                <ItemBrowse link="#" title="comedy" />
                <ItemBrowse link="#" title="fantasy" />
                <ItemBrowse link="#" title="horror" />
                <ItemBrowse link="#" title="romance" />
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};
