import { CharacterPreview, CharacterPreviewEdge } from "@/types/types";
import Link from "next/link";

export const Characters = ({
  characterPreview,
  id,
}: {
  characterPreview: CharacterPreview;
  id: number;
}) => {
  return (
    <>
      {characterPreview && (
        <section className="py-5">
          <div className="w-full flex justify-between items-center ">
            <h2 className="py-2 font-semibold ">Characters</h2>
            {characterPreview.edges.length > 5 && (
              <Link
                href={`${id}/characters`}
                className="hover:underline text-sm"
              >
                View all
              </Link>
            )}
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {characterPreview.edges?.map((character) => {
              if (!character) return;
              return (
                <div
                  className="bg-[#ffffff10] rounded-md overflow-hidden "
                  key={character.id}
                >
                  <div className="flex justify-center items-center">
                    <div className="w-[80px] max-w-[80px] min-w-[80px] h-[80px] ">
                      <img
                        src={character.node.image.large}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-end w-full  flex-col h-full min-h-full px-3  ">
                      <p className="text-start w-full">
                        {character.node.name?.userPreferred}
                      </p>
                      <p className="text-end w-full">
                        {character.voiceActors[0]?.name?.userPreferred}
                      </p>
                    </div>
                    <div className="w-[80px] max-w-[80px] min-w-[80px] h-[80px] ">
                      <img
                        src={
                          character.voiceActors[0]?.image?.large
                            ? character.voiceActors[0].image.large
                            : "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg"
                        }
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};
