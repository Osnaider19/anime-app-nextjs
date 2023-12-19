import { IconLink } from "@/icons/Icons";
import { ExternalLink } from "@/types/types";

export const ExtraLink = ({ extraLink }: { extraLink: ExternalLink[] }) => {
  return (
    <div className="w-full h-full py-5">
      <h3 className="font-semibold py-2">External & Streaming links</h3>
      <div className="w-full h-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 py-3 gap-y-4 overflow-hidden">
        {extraLink.map(
          ({
            icon,
            color,
            id,
            site,
            url,
            notes,
            type,
            isDisabled,
            language,
          }) => (
            <a href={url} key={id} target="_blank" rel="noopener noreferrer">
              <div
                className={`w-full h-full flex justify-start items-center gap-x-2  rounded-md hover:bg-[#ffffff30] transition-colors duration-300 overflow-hidden`}
                
              >
                <div className="h-[35px] w-[35px] rounded-sm bg-[#0C65A6] flex justify-center items-center overflow-hidden">
                  {icon ? (
                    <img
                      src={icon}
                      alt={`image de ${site}`}
                      className="w-full h-full"
                      style={{ backgroundColor: color ? color : "transparent" }}
                    />
                  ) : (
                    <div className="h-[35px] w-[35px] rounded-sm bg-[#0C65A6] flex justify-center items-center">
                      <IconLink size="30" fill="#fff" />
                    </div>
                  )}
                </div>
                <p>{`${site}`}</p>
              </div>
            </a>
          )
        )}
      </div>
    </div>
  );
};
