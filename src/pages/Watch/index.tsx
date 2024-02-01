import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useYoutubeApi } from "../../context/YoutubeApiContext";

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
      {video && <p>{JSON.stringify(video)}</p>}
    </>
  );
}

export default Watch;
