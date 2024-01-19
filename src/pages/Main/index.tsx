import { useState } from "react";
import SearchHeader from "./components/SearchHeader";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Videos from "./components/Videos";
import { TVideo } from "../../types/Video";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Main() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data : videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: async () => {
      return fetch(`/data/${keyword ? "list_by_keyword" : "most_popular"}.json`)
        .then((res) => res.json())
        .then((data) => data.items)
    },
  });

  return (
    <>
      <SearchHeader />
      {isLoading && <Loading/>}
      {error && <Error/>}
      {videos && <Videos videos={videos}/>}
    </>
  );
}

export default Main;
