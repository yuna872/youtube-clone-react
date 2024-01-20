type TChannelProps = {
  channel: {
    thumbnails: string;
    channelTitle: string;
    description: string;
  };
};

function Channel({ channel }: TChannelProps) {
  return (
    <div>
      <img src={channel.thumbnails} />
      <p>{channel.channelTitle}</p>
      <p>{channel.description}</p>
    </div>
  );
}

export default Channel;
