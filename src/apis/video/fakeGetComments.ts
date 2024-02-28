import axios from "axios";

export default class FakeGetComments {
  constructor() {}

  async getComments(id: string) {
    return this.commentByVideoId(id);
  }

  private async commentByVideoId(id: string) {
    return axios.get(`/data/comments.json`).then((res) => res.data);
  }
}
