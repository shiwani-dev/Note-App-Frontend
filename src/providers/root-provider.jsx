import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/route";
import "../index.css";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({});

function RootProvider() {
  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
          <TanStackDevtools
            plugins={[
              {
                name: "TanStack Query",
                render: <ReactQueryDevtoolsPanel />,
              },
            ]}
          />
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
export default RootProvider;
