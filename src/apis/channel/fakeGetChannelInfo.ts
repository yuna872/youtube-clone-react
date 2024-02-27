import axios from "axios";

export default class FakeGetChannelInfo {
  constructor() {}

  async getChannelInfo(id: string) {
    return this.listByChannelId(id);
  }

  async getChannelThumbnail(id: string) {
    return this.getThumbnailUrl(id);
  }

  private async listByChannelId(id: string) {
    return axios.get(`/data/channel.json`).then((res) => res.data.items[0]);
  }

  private async getThumbnailUrl(id: string) {
    return axios.get(`/data/channel_thumbnail.json`).then((res) => {
      return res.data.items[0].snippet.thumbnails.medium.url;
    });
  }
}
