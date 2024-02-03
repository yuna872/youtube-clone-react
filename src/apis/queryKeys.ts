export const QUERY_KEYS = {
  VIDEO: {
    all: ["videos"], // most popular videos
    search: (keyword: string | undefined) => [...QUERY_KEYS.VIDEO.all, keyword], // searched by keyword
    item: (id: string) => [...QUERY_KEYS.VIDEO.all, id], // watch (single video)
  },
  CHANNEL: {
    all: ["channel"],
    item: (id: string) => [...QUERY_KEYS.CHANNEL.all, id], // single inquiry
  },
};
