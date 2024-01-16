import { useState } from "react";
import SearchHeader from "./components/SearchHeader";

function Main() {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <SearchHeader keyword={keyword} setKeyword={setKeyword} />
      <p className="text-white">{keyword}</p>
    </div>
  );
}

export default Main;
