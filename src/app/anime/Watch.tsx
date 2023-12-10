import { ModalWatch } from "@/components/modal/ModalWatch";
import { IconPlay } from "@/icons/Icons";
import { StreamingEpisode } from "@/types/types";

export const Watch = ({
  streamingEpisodes,
  id,
}: {
  streamingEpisodes: StreamingEpisode[];
  id: number;
}) => {
  return (
    <>
      {streamingEpisodes.length > 0 && (
        <section className="w-full h-full pt-7">
          <div className="w-full flex justify-between items-center">
            <h2 className="py-2 font-semibold">Watch</h2>
            <ModalWatch streamingEpisodes={streamingEpisodes} />
          </div>
          <div className="w-full h-full grid grid-cols-4 gap-y-4 gap-x-4">
            {streamingEpisodes.reverse().map((episode, index) => {
              if (index > 7) return;
              return (
                <a
                  href={episode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <div
                    className="w-full h-full relative overflow-hidden rounded-sm hover:opacity-90 transition-opacity duration-300 group"
                    key={index}
                  >
                    <div
                      className="absolute left-0 top-0 w-full h-full flex justify-center items-end "
                      style={{
                        background:
                          "linear-gradient(transparent, transparent  ,  rgba(0, 0, 0 , .8))",
                      }}
                    >
                      <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center">
                        <div className="relative w-[50px] h-[50px] flex justify-center items-center bg-[#00000030] rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                          <IconPlay size="20" fill="#fff" />
                        </div>
                      </div>
                      <p className="text-center line-clamp-2 pb-1 px-3">
                        {episode.title}
                      </p>
                    </div>
                    <img
                      src={episode.thumbnail}
                      alt={`image from the episode ${episode.title} `}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};
