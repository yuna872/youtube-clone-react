import axios from "axios";

export default class FakeGetComments {
  constructor() {}

  async getComments(videoId: string) {
    return this.commentByVideoId(videoId);
  }

  private async commentByVideoId(videoId: string) {
    return axios.get(`/data/comments.json`).then((res) => res.data.items);
  }
}
