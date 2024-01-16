import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type NavProps = {
  keyword: string;
  setKeyword: (v: string) => void;
};

function SearchHeader({ keyword, setKeyword }: NavProps) {
  return (
    <div className="flex flex-row justify-between items-center h-[56px]">
      {/* 로고 */}
      <div></div>
      {/* 키워드 입력 */}
      <div className="flex flex-row rounded-full border-solid border-white">
        <input
          placeholder="검색"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="bg-transparent text-white"
        />
        <MagnifyingGlassIcon className="stroke-white w-[24px]" />
      </div>
      {/* buttons */}
      <div></div>
    </div>
  );
}

export default SearchHeader;
