import axios, { AxiosInstance } from "axios";
import { TVideo } from "../types/Video";

export default class GetVideos {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async searchByKeyword(keyword: string) {
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

  async mostPopular() {
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
}
