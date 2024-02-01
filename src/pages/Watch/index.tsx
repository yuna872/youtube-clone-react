import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import WatchVideo from "./component/WatchVideo";
import RelatedVideos from "./component/RelatedVideos";

function Watch() {
  const { videoId } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: video,
  } = useQuery({
    queryKey: ["video", videoId],
    queryFn: () => {
      return youtube.getVideo(videoId);
    },
  });


  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {video && (
        <div className="flex flex-row">
          <article className="p-[24px]">
            {/* 영화 컨텐츠 */}
            <WatchVideo video={video[0]} />
            {/* 댓글 */}
          </article>
          {/* 연관된 영상 */}
<RelatedVideos/>
        </div>
      )}
    </>
  );
}

export default Watch;
