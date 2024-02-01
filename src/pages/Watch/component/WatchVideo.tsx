import dayjs from "dayjs";
import { TVideo } from "../../../types/Video";
import { formatAgo, formatWithDots } from "../../../util/date";

type TWatchVideoProps = {
  video: TVideo;
};

function WatchVideo({ video }: TWatchVideoProps) {
  const { title, description, thumbnails, publishedAt,channelTitle } = video.snippet;
  const { viewCount, likeCount } = video.statistics;

  const publishedDate = formatWithDots(publishedAt);
  return (
    <section>
      <div className="relative w-full rounded-md pb-[56.25%]">
        <iframe
          id="player"
          width="100%"
          height="100%"
          src={`http://www.youtube.com/embed/${video.id}`}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        ></iframe>
      </div>
      <p className="text-2xl font-bold text-youtubeWhite">{title}</p>
      <p>{channelTitle}</p>
      <p>{likeCount}</p>
      <div className="bg-[rgba(255,255,255,0.1)] text-white rounded-[12px]">
        <div className="flex flex-row gap-1">
          <p>조회수 {Number(viewCount).toLocaleString('ko-KR')}회 </p>
          <p>{publishedDate}</p>
        </div>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default WatchVideo;
