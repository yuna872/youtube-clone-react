import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
