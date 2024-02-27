import { useQuery } from "@tanstack/react-query";
import { TVideo } from "../../../types/Video";
import { formatWithDots } from "../../../util/date";
import { QUERY_KEYS } from "../../../apis/queryKeys";
import { useYoutubeApi } from "../../../context/YoutubeApiContext";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import ChannelInfo from "./ChannelInfo";
import {
  ArrowDownTrayIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type TVideoPlayerProps = {
  video: TVideo;
};

function VideoPlayer({ video }: any) {
  console.log(video);
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
    staleTime: 1000 * 60 * 5,
  });

  const iconStyle = "text-youtubeWhite w-[20px] h-[20px] my-auto";
  const Chip = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex flex-row h-[36px] rounded-[18px] bg-[rgba(255,255,255,0.1)] text-youtubeWhite px-[16px] gap-2 align-middle [&_p]:my-auto text-[14px] font-bold">
        {children}
      </div>
    );
  };

  const [seeMore, setSeeMore] = React.useState(true);
  // [더보기] 버튼 클릭 시
  const handleClickSeeMore = () => {
    setSeeMore(false);
  };
  // [간략히] 버튼 클릭 시
  const handleClickBriefly = () => {
    setSeeMore(true);
  };

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {channelInfo && (
        <section className="flex flex-col gap-3">
          <div className="relative w-full rounded-md pb-[56.25%] overflow-hidden">
            <iframe
              id="player"
              width="100%"
              height="100%"
              src={`http://www.youtube.com/embed/${video.id}`}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            />
          </div>
          <p className="text-[20px] font-bold text-youtubeWhite">{title}</p>
          <div className="flex flex-row justify-between">
            {/* channel info */}
            <ChannelInfo channelInfo={channelInfo} />
            <div className="flex flex-row gap-2">
              <Chip>
                <HandThumbUpIcon className={iconStyle} />
                <p className="border-r pr-2">{likeCount}</p>
                <HandThumbDownIcon className={iconStyle} />
              </Chip>
              <Chip>
                <ShareIcon className={iconStyle} />
                <p>공유</p>
              </Chip>
              <Chip>
                <ArrowDownTrayIcon className={iconStyle} />
                <p>오프라인 저장</p>
              </Chip>
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] text-white rounded-[12px] p-[12px]">
            <div className="flex flex-row gap-1">
              <p className="text-[14px] font-bold">
                조회수 {Number(viewCount).toLocaleString("ko-KR")}회
              </p>
              <p className="text-[14px] font-bold">{publishedDate}</p>
            </div>
            <span className={`whitespace-pre-wrap cursor-pointer ${seeMore ? 'line-clamp-2' : 'line-clamp-none'}`}>
              {description}
              {!seeMore && <p onClick={handleClickBriefly} className="mt-[20px] text-[14px]">간략히</p>}
            </span>
            {seeMore && <span onClick={handleClickSeeMore} className="text-[14px]">더보기</span>}
          </div>
        </section>
      )}
    </>
  );
}

export default VideoPlayer;
