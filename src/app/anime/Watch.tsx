import { StreamingEpisode } from "@/types/types";
import Link from "next/link";
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
          <h2 className="py-2 font-semibold">
            <Link href={{ query: "watch" }}>Watch</Link>
          </h2>
          <div className="flex justify-start gap-x-3 items-center w-full h-full flex-wrap ">
            {streamingEpisodes.map((episode, index) => {
              if (index > 5) return;
              return (
                <a href={episode.url} target="_blank" rel="noopener noreferrer">
                  <div
                    className="w-[200px] h-[120px] relative rounded-md overflow-hidden shadow-xl shadow-[#ffffff10]"
                    key={index}
                  >
                    <div
                      className="absolute left-0 top-0 w-full h-full flex justify-center items-end "
                      style={{
                        background:
                          "linear-gradient(transparent, transparent  ,  rgba(0, 0, 0 , .8))",
                      }}
                    >
                      <p className="text-center line-clamp-1 pb-1">
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
