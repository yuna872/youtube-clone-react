import axios, { AxiosInstance } from "axios";

export default class GetVideos {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
    });
  }

  async getVideos(keyword: string | undefined) {
    return keyword ? this.listByKeyword(keyword) : this.mostPopular();
  }

  async getVideo(id: string) {
    return this.listByVideoId(id);
  }

  // 검색된 비디오 목록
  private async listByKeyword(keyword: string) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => {
        return res.data.items;
      });
  }

  // 가장 인기 있는 비디오 목록
  private async mostPopular() {
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
          regionCode: "KR",
        },
      })
      .then((res) => {
        console.log(res.data.items);
        return res.data.items;
      });
  }

  // 비디오 상세
  private async listByVideoId(id: string) {
    return this.httpClient.get("videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        id,
      },
    });
  }
}
