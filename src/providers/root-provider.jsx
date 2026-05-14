import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/route";
import "../index.css"

const queryClient = new QueryClient();

function RootProvider() {
  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
export default RootProvider;
