import { Outlet, createBrowserRouter } from "react-router-dom";
import Watch from "../pages/watch/index";
import Results from "../pages/results";
import SearchHeader from "../pages/components/SearchHeader";
import Videos from "../pages/home/index";
import SideBar from "../pages/components/SideBar";
import Chips from "../pages/components/Chips";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Main Page (Hot Video)
    children: [
      {
        path: "",
        element: <Videos />, // 홈 페이지
      },
      {
        path: "/results/:keyword",
        element: <Results />, // 키워드로 검색한 결과
      },
      {
        path: "/watch/:videoId",
        element: <Watch />, // 동영상 상세 페이지
      },
    ],
  },
]);

// 기본 레이아웃 (only Search Header)
function Layout(): JSX.Element {
  const [openSidebar, setOpenSidebar] = React.useState(false);
  return (
    <div className="relative">
      <SearchHeader setOpenSidebar={setOpenSidebar}/>
      <div className="flex">
        <SideBar open={openSidebar} />
        <Outlet />
      </div>
    </div>
  );
}

export default router;
