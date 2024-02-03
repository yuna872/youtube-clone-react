import { useQuery } from "@tanstack/react-query";
import { TVideo } from "../../../types/Video";
import { formatWithDots } from "../../../util/date";
import { QUERY_KEYS } from "../../../apis/queryKeys";
import { useYoutubeApi } from "../../../context/YoutubeApiContext";

type TVideoPlayerProps = {
  video: TVideo;
};

function VideoPlayer({ video }: TVideoPlayerProps) {
  const { channel } = useYoutubeApi();
  const {
    title,
    description,
    thumbnails,
    publishedAt,
    channelTitle,
    channelId,
  } = video.snippet;
  const { viewCount, likeCount } = video.statistics;

  const publishedDate = formatWithDots(publishedAt);

  const {
    isLoading,
    error,
    data: channelInfo,
  } = useQuery({
    queryKey: QUERY_KEYS.CHANNEL.item(channelId),
    queryFn: () => channel.getChannelInfo(channelId),
    enabled: !!channelId,
  });

  console.log(channelInfo);

  return (
    <section>
      <div className="relative w-full rounded-md pb-[56.25%]">
        <iframe
          id="player"
          width="100%"
          height="100%"
          src={`http://www.youtube.com/embed/${video.id}`}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      </div>
      <p className="text-2xl font-bold text-youtubeWhite">{title}</p>
      <>{JSON.stringify(channelInfo[0])}</>
      <p>{channelTitle}</p>
      <p>{likeCount}</p>
      <div className="bg-[rgba(255,255,255,0.1)] text-white rounded-[12px]">
        <div className="flex flex-row gap-1">
          <p>조회수 {Number(viewCount).toLocaleString("ko-KR")}회 </p>
          <p>{publishedDate}</p>
        </div>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default VideoPlayer;
