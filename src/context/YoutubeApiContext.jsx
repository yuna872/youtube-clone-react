import { createContext, useContext } from "react";
import FakeGetVideos from "../apis/fakeGetVidoes";
// import GetVideos from "../apis/getVideos";

// Context를 생성하고 초기값 빈 배열로 세팅
export const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
  const youtube = new FakeGetVideos();
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
