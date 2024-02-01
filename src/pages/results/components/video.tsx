import { useNavigate } from "react-router-dom";

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
    <div className="flex flex-row mr-auto">
      <div className='w-[420px] h-[236px] flex justify-center align-middle rounded-[12px] overflow-hidden mr-[16px]'>
          <img src={video.thumbnails} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <p className="text-youtubeWhite text-title break-words">{video.title}</p>
        <p className="text-youtubeWhite text-desc py-[12px] break-words">{video.channelTitle}</p>
        <p className="text-youtubeGray text-desc break-words">{video.description}</p>
      </div>
    </div>
  );
}

export default Video;
