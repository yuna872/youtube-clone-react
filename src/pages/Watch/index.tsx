import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Watch() {
  const { videoId } = useParams();

  const {
    isLoading,
    error,
    data: video,
  } = useQuery({
    queryKey: ["video", videoId],
    queryFn: async () => {
      return fetch("/data/video.json")
        .then((res) => res.json())
        .then((data) => data.items[0]);
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
