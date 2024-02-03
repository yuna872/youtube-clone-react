import axios, { AxiosInstance } from "axios";

export default class GetChannelInfo {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
        baseURL: "https://www.googleapis.com/youtube/v3",
        params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
      });
  }

  async getChannelInfo(id: string) {
    return this.listByChannelId(id)
  }

  private async listByChannelId(id: string) {
    return this.httpClient.get("channels", {
      params: {
        part: "snippet,contentDetails,statistics",
        id,
      },
    })
  }
}
