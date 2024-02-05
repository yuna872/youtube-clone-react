export type TChannel = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  statistics: TStatistics;
  contentDetails: TContentDetails;
};

type TStatistics = {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
};

type TContentDetails = [
  relatedPlaylists: {
    likes: string;
    uploads: string;
  }
];
