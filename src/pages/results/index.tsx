import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { TVideo } from "../../types/Video";
import Video from "./components/video";
import Channel from "./components/channel";

function Results() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: results,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: async () => {
      return fetch(`/data/list_by_keyword.json`)
        .then((res) => res.json())
        .then((data) => data.items);
    },
  });

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {results && (
        <div className="flex flex-col gap-5">
          {results.map((result: TVideo) => {
            if (result.id.kind === "youtube#video")
              return (
                <Video
                key={result.id.videoId}
                  video={{
                    thumbnails: result.snippet.thumbnails.high.url,
                    title: result.snippet.title,
                    channelTitle : result.snippet.channelTitle,
                    description : result.snippet.description
                  }}
                />
              );
            else if (result.id.kind === "youtube#channel") return <Channel key={result.snippet.channelId} channel={{
                thumbnails: result.snippet.thumbnails.high.url,
                channelTitle : result.snippet.channelTitle,
                description : result.snippet.description
              }}/>;
          })}
        </div>
      )}
    </>
  );
}

export default Results;
