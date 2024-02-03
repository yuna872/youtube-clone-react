import axios from "axios";

export default class FakeGetChannelInfo {
  constructor() {}

  async getChannelInfo(id: string) {
    return this.listByChannelId(id);
  }

  private async listByChannelId(id: string) {
    return axios.get(`/data/channel.json`).then((res) => res.data.items);
  }
}
