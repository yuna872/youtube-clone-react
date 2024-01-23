import { FormEvent, useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  VideoCameraIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();

  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/results/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <div className="bg-bgColor w-full flex flex-row justify-between items-center h-[56px] sticky top-0 px-[16px]">
      {/* 로고 */}
      <div className="flex flex-row align-middle gap-[16px]">
        <Bars3Icon className="fill-white-100 w-[24px] h-[24px] storke-white m-[8px]" />
        <Logo />
      </div>
      {/* 키워드 입력 */}
      <div className="flex flex-row basis-[35%] gap-3"> 
        <div className="w-full flex flex-row rounded-full border border-[#FFFFFF1A] h-[40px] overflow-hidden">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-row justify-between"
          >
            <input
              placeholder="검색"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="bg-transparent text-white ml-[32px] w-full"
            />
            {text && <XMarkIcon onClick={() => setText("")} />}
            <div className="w-[64px] flex justify-center bg-[#FFFFFF1A]">
              <MagnifyingGlassIcon className="stroke-white w-[24px]" />
            </div>
          </form>
        </div>
        <div className="w-[40px] h-[40px] bg-[#FFFFFF1A] rounded-full flex justify-center align-middle">
          <MicrophoneIcon className="w-[20px] h-[20px] storke-white my-auto" />
        </div>
      </div>

      {/* buttons */}
      <div className="flex flex-row gap-6 align-middle mr-[20px]">
        <VideoCameraIcon className="w-[24px] h-[24px] stroke-white my-auto"/>
        <BellIcon className="w-[24px] h-[24px] stroke-white my-auto"/>
        <div className="w-[32px] h-[32px] rounded-full flex justify-center align-middle overflow-hidden">
          <img className="object-cover" src="https://yt3.ggpht.com/yti/AGOGRCqQl9wuLJFhjx1cdrdcMexTLA9StA3OveWfAA=s88-c-k-c0x00ffffff-no-rj-mo"/>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
