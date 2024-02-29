import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../../../context/YoutubeApiContext";
import { QUERY_KEYS } from "../../../apis/queryKeys";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import {
  Bars3BottomLeftIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { formatAgo } from "../../../util/date";

type TCommentsProps = {
  videoId: string;
};

function Comments({ videoId }: TCommentsProps) {
  const { comments } = useYoutubeApi();

  const { isLoading, error, data } = useQuery({
    queryKey: QUERY_KEYS.COMMENTS.item(videoId),
    queryFn: () => comments.getComments(videoId),
  });

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {data && (
        <>
          {/* 댓글 작성 */}
          <div className="flex flex-col mt-[24px] mb-[32px]">
            <div className="flex flex-row items-center">
              <p>댓글 1022개</p>
              <div className="flex flex-row items-center">
                <Bars3BottomLeftIcon className="w-[24px]"/>
                <p>정렬 기준</p>
              </div>
            </div>
            <div className="flex flex-row">

              <div className="w-[40px] h-[40px] min-w-[40px] min-h-[40px] rounded-full overflow-hidden">
                <img
                  className="object-cover"
                  src="https://yt3.ggpht.com/yti/AGOGRCqQl9wuLJFhjx1cdrdcMexTLA9StA3OveWfAA=s88-c-k-c0x00ffffff-no-rj-mo"
                  />
              </div>
                  </div>
          </div>
          {/* 댓글 목록 */}
          <div className="flex flex-col gap-[16px]">
            {data.map((item: any) => {
              const comment = item.snippet.topLevelComment.snippet;
              const replies = item.replies ? item.replies : null;
              return (
                <div
                  className="flex flex-row gap-[16px]"
                  key={item.snippet.topLevelComment.id}
                >
                  <div className="w-[40px] h-[40px] min-w-[40px] min-h-[40px] rounded-full overflow-hidden">
                    <img
                      src={comment.authorProfileImageUrl}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="flex flex-row gap-[4px] items-center">
                      <p className="text-[13px] font-bold">
                        {comment.authorDisplayName}
                      </p>
                      <p className="text-[12px] text-[#606060]">
                        {formatAgo(comment.publishedAt)}
                      </p>
                    </div>
                    <p className="text-[14px]">{comment.textDisplay}</p>
                    <div className="flex flex-row items-center gap-[8px]">
                      <HandThumbUpIcon className="w-[24px]" />
                      <p className="text-[12px]">{comment.likeCount}</p>
                      <HandThumbDownIcon className="w-[24px]" />
                    </div>
                    {replies && <p>답글 {replies.comments.length}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Comments;
