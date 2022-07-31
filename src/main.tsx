import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "@/App";
import "@/assets/styles/index.css";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
