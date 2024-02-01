import { useNavigate } from "react-router-dom";
import { TPopularVideo } from "../../../types/Video";
import { formatAgo } from "../../../util/date";

type TVideoCardProps = {
  video: TPopularVideo;
};

function VideoCard({ video }: TVideoCardProps) {
  const navigate = useNavigate();
  const { title, description, thumbnails, channelTitle, publishedAt } =
    video.snippet;
  return (
    <li key={description}>
      <img src={thumbnails.medium.url} alt={title} className="w-full" />
      <div className="flex flex-row w-full mt-[12px]">
        {/* <div className="bg-white rounded-[100%] w-[36px] h-[36px]"></div> */}
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
