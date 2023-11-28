"use client";
import { ModalPage } from "@/components/modal/ModalPage";
import { StreamingEpisode } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  watch: StreamingEpisode[];
  id: number;
};
export const AllWatch = ({ watch, id }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.has("watch");
  const handelClose = () => {
    router.back();
  };
  return (
    <>
      {query && (
        <ModalPage back={handelClose}>
          <div className="max-w-[70%] top-[70px] relative flex justify-center items-center bg-black/70 border border-[#ffffff40] rounded-md overflow-auto h-screen z-50 flex-col pb-44">
            <div className="relative w-full h-full pt-14 pb-8">
              <button
                onClick={handelClose}
                className="absolute top-0 right-0 px-3 py-1"
              >
                X
              </button>
              <h1 className="relative  text-center">todos los videos</h1>
            </div>
            <div className="flex justify-center gap-4 items-center w-full h-full flex-wrap ">
              {watch.map((episode, index) => {
                return (
                  <a
                    href={episode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="w-[200px] h-[120px] relative rounded-md overflow-hidden shadow-xl shadow-[#ffffff10] hover:shadow-[#ffffff30]"
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
          </div>
        </ModalPage>
      )}
    </>
  );
};
