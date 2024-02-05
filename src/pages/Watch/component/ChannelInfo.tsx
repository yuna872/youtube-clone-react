import { TChannel } from "../../../types/Channel";

type TChannelInfoProps = {
  channelInfo: TChannel;
};

function ChannelInfo({ channelInfo }: TChannelInfoProps) {
  const { thumbnails, title } = channelInfo.snippet;
  const { subscriberCount } = channelInfo.statistics;
  return (
    <div className="flex flex-row gap-[24px] align-middle">
      <div className="flex flex-row gap-[10px] align-middle">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img src={thumbnails.medium.url} className="object-cover" />
        </div>
        <div>
          <p className="text-[16px] text-youtubeWhite font-bold">{title}</p>
          <p className="text-[12px] text-youtubeGray">
            구독자 {subscriberCount}명
          </p>
        </div>
      </div>
      <button className="text-[14px] bg-youtubeWhite text-[#000] font-bold rounded-[18px] px-[16px] h-[36px] whitespace-nowrap">
        구독
      </button>
    </div>
  );
}

export default ChannelInfo;
