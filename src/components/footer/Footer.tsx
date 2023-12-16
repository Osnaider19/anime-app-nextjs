import { Divider } from "@nextui-org/react";
import { ItemLink } from "./ItemLink";
import {
  IconFacebook,
  IconInstagram,
  IconTiktok,
  IconYoutube,
} from "@/icons/Icons";

export const Footer = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-between gap-y-8 md:gap-y-0 items-start gap-x-3 flex-wrap px-8 md:px-16 relative z-10 py-4 pt-28">
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none bg-gradient-to-b from-[#000] to-[#1E112A] -z-[1]"></div>
        <div>
          <h4 className="py-1 font-semibold">Browse</h4>
          <div className="w-full h-full flex flex-col ">
            <ItemLink link="#">Trending</ItemLink>
            <ItemLink link="#">popular</ItemLink>
            <ItemLink link="#">upcoming next season</ItemLink>
            <ItemLink link="#">top 100 anime</ItemLink>
            <ItemLink link="#">popupar this season</ItemLink>
          </div>
        </div>

        <div>
          <h4 className="py-1 font-semibold">Social</h4>
          <div className="w-full h-full flex flex-col ">
            <ItemLink link="#">
              <div className="flex items-center gap-x-2">
                <span className="block">
                  <IconFacebook fill="#fff" size="20" />
                </span>
                <p>facebook</p>
              </div>
            </ItemLink>
            <ItemLink link="#">
              <div className="flex items-center gap-x-2 gap-y-1">
                <span className="block">
                  <IconYoutube fill="#fff" size="20" />
                </span>
                <p>Youtube</p>
              </div>
            </ItemLink>

            <ItemLink link="#">
              <div className="flex items-center gap-x-2">
                <span className="block">
                  <IconInstagram fill="#fff" size="20" />
                </span>
                <p>Instagram</p>
              </div>
            </ItemLink>

            <ItemLink link="#">
              <div className="flex items-center gap-x-2">
                <span className="block">
                  <IconTiktok fill="#fff" size="20" />
                </span>
                <p>Tik tok</p>
              </div>
            </ItemLink>
          </div>
        </div>

        <div>
          <h4 className="py-1 font-semibold">NexAnime</h4>
          <div className="w-full h-full flex flex-col ">
            <ItemLink link="#">About</ItemLink>
            <ItemLink link="#">Help</ItemLink>
            <ItemLink link="#">Terms of Use</ItemLink>
            <ItemLink link="#">Privacity policy</ItemLink>
            <ItemLink link="#">AdChoices</ItemLink>
            <ItemLink link="#">Your Privacity Choices</ItemLink>
            <ItemLink link="#">Cookies Consent tool</ItemLink>
            <ItemLink link="#">Get the apps</ItemLink>
            <ItemLink link="#">Jobs</ItemLink>
          </div>
        </div>

        <div>
          <h4 className="py-1 font-semibold">Account</h4>
          <div className="w-full h-full flex flex-col ">
            <ItemLink link="#">Create Account</ItemLink>
            <ItemLink link="#">log in</ItemLink>
          </div>
        </div>
        <Divider className="my-6" />
      </div>
    </div>
  );
};
