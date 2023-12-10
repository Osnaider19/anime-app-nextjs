"use client";
import YouTube from "react-youtube";
export default function Trailer({ idVideo }: { idVideo: string }) {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <YouTube
        videoId={idVideo}
        id={idVideo}
       
        iframeClassName="w-full  h-[300px]"
        loading="lazy"
      />
    </div>
  );
}
