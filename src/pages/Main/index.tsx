import { useState } from "react";
import SearchHeader from "../components/SearchHeader";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { TVideo } from "../../types/Video";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: async () => {
      return fetch(`/data/most_popular.json`)
        .then((res) => res.json())
        .then((data) => data.items);
    },
  });

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {videos && (
        <>
          <div className="grid sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-flow-row gap-4">
            {videos.map((video: TVideo) => {
              return (
                <div key={video.snippet.description} className="col">
                  <a href={`/watch/${video.id.videoId}`}>
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      className="object-cover rounded-[12px]"
                    />
                  </a>
                  <div className="flex flex-row w-full">
                    <div className="flex flex-col w-full">
                      <p className="text-[#f1f1f1] text-[16px]">
                        {video.snippet.title.length > 50
                          ? video.snippet.title.slice(0, 50) + "..."
                          : video.snippet.title}
                      </p>
                      <p className="text-[#aaa] text-[14px]">
                        {video.snippet.channelTitle}
                      </p>
                      <p className="text-[#aaa] text-[14px]">
                        {"조회수 13만회 1년전"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Videos;
