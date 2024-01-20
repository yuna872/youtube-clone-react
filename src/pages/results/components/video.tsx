type TVideoProps = {
  video: {
    thumbnails: string;
    title: string;
    channelTitle: string;
    description: string;
  };
};

function Video({ video }: TVideoProps) {
  return (
    <div>
      <img src={video.thumbnails} />
      <p>{video.title}</p>
      <p>{video.channelTitle}</p>
      <p>{video.description}</p>
    </div>
  );
}

export default Video;
