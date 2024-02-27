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
  async getChannelThumbnail(id: string){
    return this.getThumbnailUrl(id)
  }

  private async listByChannelId(id: string) {
    return this.httpClient.get("channels", {
      params: {
        part: "snippet,contentDetails,statistics",
        id,
      },
    }).then((res) => res.data.items[0])
  }

  private async getThumbnailUrl(id : string) {
    return this.httpClient.get('channels', {
      params: {
        part: "snippet",
        id,
        fields : 'items(id,snippet(thumbnails))'
      },
    }).then((res) => res.data.items[0].snippet.thumbnails.medium.url)
  }
}
