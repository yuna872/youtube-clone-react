import { createContext, useContext } from "react";
import GetVideos from "../apis/video/getVideos";
import FakeGetVideos from "../apis/video/fakeGetVideos";
import GetChannelInfo from "../apis/channel/getChannelInfo";
import FakeGetChannelInfo from "../apis/channel/fakeGetChannelInfo";

// Context를 생성하고 초기값 빈 배열로 세팅
export const YoutubeApiContext = createContext<any>(null);

type TYoutubeApiProviderProps = {
  children: React.ReactNode;
};

export function YoutubeApiProvider({ children }: TYoutubeApiProviderProps) {
  const youtube = new FakeGetVideos();
  const channel = new FakeGetChannelInfo();
  // const youtube = new GetVideos();
  // const channel = new GetChannelInfo();

  return (
    <YoutubeApiContext.Provider value={{ youtube, channel }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
