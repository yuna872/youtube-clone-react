import { Outlet, createBrowserRouter } from "react-router-dom";
import Watch from "../pages/watch/index";
import Results from "../pages/results";
import SearchHeader from "../pages/components/SearchHeader";
import Videos from "../pages/main/index";


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

function Layout(): JSX.Element {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}
export default router;
