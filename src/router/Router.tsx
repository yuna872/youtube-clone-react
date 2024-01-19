import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/index";
import Watch from "../pages/watch/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main Page (Hot Video)
  },
  {
    path: "/result/:keyword",
    element: <Main />, // Main Page (Hot Video)
  },
  {
    path: "/watch/:videoId",
    element: <Watch />, // Main Page (Hot Video)
  },
]);

export default router;
