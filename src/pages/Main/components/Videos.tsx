import { TVideo } from "../../../types/Video";

type TVideosProps = {
  videos: TVideo[];
};

function Videos({ videos }: TVideosProps) {
  // [TODO] 해당 비디오 채널 정보 불러오기 (채널 프로필 이미지)
  // [TODO] 현재 게시물 조회수 조회하기
  // [TODO] 해당 게시물 올린 시점으로부터 시간 계산하는 방법
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-4">
      {videos.map((video) => (
        <div key={video.id.videoId} className="col">
          <a href={`/watch/${video.id.videoId}`}>
            <img
              src={video.snippet.thumbnails.medium.url}
              className="object-cover rounded-[12px]"
            />
          </a>
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-full">
              <p className="text-[#f1f1f1] text-[16px]">
                {video.snippet.title.length > 50
                  ? video.snippet.title.slice(0, 50) + "..."
                  : video.snippet.title}
              </p>
              <p className="text-[#aaa] text-[14px]">
                {video.snippet.channelTitle}
              </p>
              <p className="text-[#aaa] text-[14px]">{"조회수 13만회 1년전"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Videos;
