import { Browse } from "./Browse";
import { Genres } from "./Genres";
import { Login } from "./Login";
import { Search } from "./Search";

export const Nav = () => {
  return (
    <div className=" flex justify-center items-center gap-x-2 ">
      <Search/>
      <Browse />
      <Genres/>
      <Login/>
    </div>
  );
};
