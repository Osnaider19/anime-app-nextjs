import { IconPlay } from "@/icons/Icons";
import { queryId } from "@/querys/query";
import { fetchAnime } from "@/services/fetchAnime";
import { StreamingEpisode } from "@/types/types";

type Props = {
  params: {
    id: string;
  };
};

type data = {
  data: {
    Media: {
      streamingEpisodes: StreamingEpisode[];
    };
  };
};
export default async function PageWatch({ params }: Props) {
  const { query } = queryId;
  const variables = {
    id: params.id,
    type: "ANIME",
    isAdult: false,
  };
  const data: data = await fetchAnime(query, variables);
  const { streamingEpisodes } = data.data.Media;

  return (
    <div className="w-full h-full  ">
      <div className="w-full h-full grid grid-cols-4 gap-y-4 gap-x-4">
        {streamingEpisodes?.map((episode, index) => {
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
    </div>
  );
}
