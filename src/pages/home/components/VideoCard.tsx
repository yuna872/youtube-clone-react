import { useNavigate } from "react-router-dom";
import { TPopularVideo } from "../../../types/Video";
import { formatAgo } from "../../../util/date";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../../../context/YoutubeApiContext";
import { QUERY_KEYS } from "../../../apis/queryKeys";

type TVideoCardProps = {
  video: TPopularVideo;
};

function VideoCard({ video }: TVideoCardProps) {
  const navigate = useNavigate();
  const { channel } = useYoutubeApi();
  const {
    title,
    description,
    thumbnails,
    channelTitle,
    publishedAt,
    channelId,
  } = video.snippet;

  const { data: channelThumbnail } = useQuery({
    queryKey: QUERY_KEYS.CHANNEL.thumbnail(channelId),
    queryFn: () => {
      return channel.getChannelThumbnail(channelId);
    },
    staleTime:1000 * 60 * 5 // 채널정보는 자주 update 되지 않으니 staleTime 5분으로 설정
  });

  return (
    <li key={description} onClick={() => navigate(`/watch/${video.id}`)} className="cursor-pointer mb-[40px]">
      <img src={thumbnails.medium.url} alt={title} className="w-full rounded-[4px]" />
      <div className="flex flex-row w-full mt-[12px] gap-[12px]">
        <div className="rounded-full max-w-[36px] max-h-[36px] overflow-hidden">
          <img src={channelThumbnail} className="object-cover w-full h-full"/>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-[#f1f1f1] text-[16px] break-words line-clamp-2">
            {title}
          </p>
          <p className="text-[#aaa] text-[14px]">{channelTitle}</p>
          <p className="text-[#aaa] text-[14px]">{formatAgo(publishedAt)}</p>
        </div>
      </div>
    </li>
  );
}

export default VideoCard;
