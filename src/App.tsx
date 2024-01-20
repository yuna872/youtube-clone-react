import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchHeader from "./pages/components/SearchHeader";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
