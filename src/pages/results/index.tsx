import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Video from "./components/video";
import Channel from "./components/channel";
import { TVideo } from "../../types/Video";
import { useYoutubeApi } from "../../context/YoutubeApiContext";

function Results() {
  const navigate = useNavigate()
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
      if (keyword) {
        return youtube.getVideos(keyword);
      }
    },
  });

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {videos && (
        <div className="flex flex-col max-w-[1096px] gap-5 mx-auto">
          {videos.map((result: TVideo) => {
            if (result.id.kind === "youtube#video")
              return (
                <Video
                  key={result.id.videoId}
                  video={{
                    thumbnails: result.snippet.thumbnails.high.url,
                    title: result.snippet.title,
                    channelTitle: result.snippet.channelTitle,
                    description: result.snippet.description,
                  }}
                />
              );
            else if (result.id.kind === "youtube#channel")
              return (
                <Channel
                  key={result.snippet.channelId}
                  channel={{
                    thumbnails: result.snippet.thumbnails.high.url,
                    channelTitle: result.snippet.channelTitle,
                    description: result.snippet.description,
                  }}
                />
              );
          })}
        </div>
      )}
    </>
  );
}

export default Results;
