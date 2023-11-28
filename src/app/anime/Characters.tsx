import { CharacterPreview } from "@/types/types";

export const Characters = ({
  characterPreview,
}: {
  characterPreview: CharacterPreview;
}) => {
  return (
    <>
      {characterPreview && (
        <section className="py-5">
          <h2 className="py-2 font-semibold">Characters</h2>
          <div className="grid_characters">
            {characterPreview.edges?.map((character) => {
              if (!character) return;
              return (
                <div
                  className="bg-[#ffffff10] rounded-md overflow-hidden  shadow-[#ffffff10]"
                  key={character.id}
                >
                  <div className="flex justify-center items-center">
                    <div className="w-[100px] max-w-[100px] min-w-[100px] h-[100px] ">
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
                    <div className="w-[100px] max-w-[100px] min-w-[100px] h-[100px] ">
                      <img
                        src={character.voiceActors[0]?.image?.large}
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
