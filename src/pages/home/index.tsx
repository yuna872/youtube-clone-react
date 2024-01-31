import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { TPopularVideo, TVideo } from "../../types/Video";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Chips from "../components/Chips";
import FakeVideos from "../../apis/fakeGetVidoes";
import GetVideos from "../../apis/getVideos";
import FakeGetVideos from "../../apis/fakeGetVidoes";
import { useYoutubeApi } from "../../context/YoutubeApiContext";

function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
      return youtube.mostPopular();
    },
  });

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {videos && (
        <div className="flex flex-col justify-center border">
          <div className="grid sm:grid-cols-1 xxl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-flow-row gap-4">
            {videos.map((video: TPopularVideo) => {
              return (
                <div key={video.snippet.description} className="col mr-[16px]">
                  <a href={`/watch/${video.id}`} className="w-full">
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      className="object-none rounded-[12px]"
                    />
                  </a>
                  <div className="flex flex-row w-full mt-[12px]">
                    <div className="bg-white rounded-[50%] w-[36px] h-[36px] mr-[12px]"></div>
                    <div className="flex flex-col w-full">
                      <p className="text-[#f1f1f1] text-[16px] break-words">
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
        </div>
      )}
    </>
  );
}

export default Videos;
