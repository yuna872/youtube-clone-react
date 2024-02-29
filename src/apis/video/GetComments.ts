import axios, { AxiosInstance } from "axios";

export default class GetComments {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
    });
  }

  async getComments(videoId: string) {
    return this.getCommentsByVideoID;
  }

  private getCommentsByVideoID(videoId: string) {
    return this.httpClient
      .get("commentThreads", {
        params: {
          part: "snippet%2Creplies",
          videoId,
        },
      })
      .then((res) => res.data.items);
  }
}
