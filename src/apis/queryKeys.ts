export const QUERY_KEYS = {
  VIDEO: {
    all: ["videos"], // most popular videos
    search: (keyword: string | undefined) => [...QUERY_KEYS.VIDEO.all, keyword], // searched by keyword
    item: (id: string) => [...QUERY_KEYS.VIDEO.all, id], // watch (single video)
  },
  COMMENTS: {
    all: ["comments"],
    item: (id: string) => [...QUERY_KEYS.COMMENTS.all, id],
  },
  CHANNEL: {
    all: ["channel"],
    item: (id: string) => [...QUERY_KEYS.CHANNEL.all, id], // single inquiry
    thumbnail: (id: string) => [...QUERY_KEYS.CHANNEL.all, "thumbnail", id], // thumbnail
  },
};
