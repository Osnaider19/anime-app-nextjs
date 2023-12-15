"use client";
import YouTube from "react-youtube";
export default function Trailer({ idVideo }: { idVideo: string }) {
  return (
    <>
      {idVideo && (
        <div className="w-full h-full pt-4">
          <h3 className="font-semibold py-2">Trailers</h3>
          <div className="w-full flex justify-start items-center">
            <YouTube
              videoId={idVideo}
              id={idVideo}
              iframeClassName="w-[500px]  h-[400px]"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}
