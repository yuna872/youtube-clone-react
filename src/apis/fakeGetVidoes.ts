import axios from "axios";

export default class FakeGetVideos {
  constructor() {}

  async searchByKeyword(keyword : string) {
    return axios
      .get(`/data/list_by_keyword.json`)
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item : any) => ({ ...item, id: item.id.videoId }))
      );
  }

  async mostPopular() {
    return axios.get(`/data/most_popular.json`).then((res) => res.data.items);
  }
}
