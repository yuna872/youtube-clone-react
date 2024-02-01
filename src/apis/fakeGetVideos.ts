import { TPopularVideo, TVideo } from "../types/Video";
import axios from "axios";

export default class FakeGetVideos {
  constructor() {}

  async getVideos(keyword: string | undefined) {
    return keyword ? this.listByKeyword("") : this.mostPopular();
  }

  async getVideo(id: string) {
    return this.listByKeyword(id);
  }

  private async mostPopular(): Promise<TPopularVideo[]> {
    return axios.get(`/data/most_popular.json`).then((res) => res.data.items);
  }

  private async listByKeyword(keyword: string): Promise<TVideo[]> {
    return axios
      .get(`/data/list_by_keyword.json`)
      .then((res) => res.data.items);
  }

  private async listByVideoId(id: string) {
    return axios.get(`/data/video.json`).then((res) => res.data.items);
  }
}
