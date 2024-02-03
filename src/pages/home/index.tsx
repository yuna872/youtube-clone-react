import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { TPopularVideo } from "../../types/Video";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import VideoCard from "./components/VideoCard";
import { QUERY_KEYS } from "../../apis/queryKeys";

function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: keyword ? QUERY_KEYS.VIDEO.search(keyword) : QUERY_KEYS.VIDEO.all,
    queryFn: () => {
      return youtube.getVideos();
    },
  });

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {videos && (
        <div className="flex flex-col justify-center">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
            {videos?.map((video: TPopularVideo) => (
              <VideoCard video={video} key={video.id} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Videos;
