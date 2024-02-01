import { Outlet, createBrowserRouter } from "react-router-dom";
import Watch from "../pages/watch/index";
import Results from "../pages/results";
import SearchHeader from "../pages/components/SearchHeader";
import Videos from "../pages/home/index";
import SideBar from "../pages/components/SideBar";
import Chips from "../pages/components/Chips";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Main Page (Hot Video)
    children: [
      {
        path: "",
        element: <LayoutWithSideBar />, // with SideBar
        children: [
          {
            path: "",
            element: <Videos />, // 홈 페이지
          },
          {
            path: "/results/:keyword",
            element: <Results />, // 키워드로 검색한 결과
          },
        ],
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
  return (
    <div className="relative">
      <SearchHeader />
      <Outlet />
    </div>
  );
}

// sideBar를 포함하는 레이아웃
function LayoutWithSideBar(): JSX.Element {
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="flex flex-col w-full">
        <Chips />
        <Outlet />
      </div>
    </div>
  );
}

export default router;
