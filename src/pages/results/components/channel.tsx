type TChannelProps = {
  channel: {
    thumbnails: string;
    channelTitle: string;
    description: string;
  };
};

function Channel({ channel }: TChannelProps) {
  return (
    <div className="flex flex-row">
      <div className="w-[420px] flex justify-center align-middle mr-[16px]">
        <div className="w-[136px] h-[136px] rounded-full overflow-hidden">
          <img src={channel.thumbnails} className="object-cover" />
        </div>
      </div>
      <div className="flex flex-col py-[16px] pr-[16px] justify-center">
        <p className="text-youtubeWhite text-title mb-[8px]">
          {channel.channelTitle}
        </p>
        <p className="text-youtubeGray text-desc mb-[4px]">
          {channel.description}
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <button className="text-[14px] bg-youtubeWhite text-black rounded-[18px] px-[16px] h-[36px]">
          구독
        </button>
      </div>
    </div>
  );
}

export default Channel;
