import { TPopularVideo, TVideo } from "../types/Video";
import axios from "axios";

export default class FakeGetVideos {
  constructor() {}

  async getVideos(keyword: string | undefined) {
    return keyword ? this.searchByKeyword("") : this.mostPopular();
  }

  async searchByKeyword(keyword: string): Promise<TVideo[]> {
    return axios
      .get(`/data/list_by_keyword.json`)
      .then((res) => res.data.items);
  }

  async mostPopular(): Promise<TPopularVideo[]> {
    return axios.get(`/data/most_popular.json`).then((res) => res.data.items);
  }
}
