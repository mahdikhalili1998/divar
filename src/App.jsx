import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import Router from "Router/Router";
import defaultOptions from "configs/reactQuery";
import Layout from "layout/layout";
import { ToastContainer } from "react-toastify";

function App() {
  const queryClient = new QueryClient(defaultOptions);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Router />
            <ToastContainer />
          </Layout>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
