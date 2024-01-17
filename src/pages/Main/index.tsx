import { useState } from "react";
import SearchHeader from "./components/SearchHeader";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function Main() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: async () => {
      return fetch(`/data/${keyword ? "list_by_keyword" : "most_popular"}.json`)
        .then((res) => res.json())
        .then((data) => data.items);
    },
  });

  return (
    <>
      <SearchHeader />
      {isLoading && <p>Loading...</p>}
      {error && <p>An error is occurred</p>}
      {videos && (
        <ul>
          {videos.map((video: any) => (
            <li className="text-white">{video.snippet.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Main;
