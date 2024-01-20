import { FormEvent, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router-dom";

function SearchHeader() {
  const navigate = useNavigate();
  const {keyword} = useParams();

  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/results/${text}`);
  };

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <div className="flex flex-row justify-between items-center h-[56px]">
      {/* 로고 */}
      <div></div>
      {/* 키워드 입력 */}
      <form onSubmit={handleSubmit} className="flex flex-row rounded-full">
        <input
          placeholder="검색"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-transparent text-white"
        />
        <MagnifyingGlassIcon className="stroke-white w-[24px]" />
      </form>
      {/* buttons */}
      <div></div>
    </div>
  );
}

export default SearchHeader;
