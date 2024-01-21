import { useState } from "react";
import { Typography } from "@mui/material";
import { Modal, Select, Button } from "antd";
import { Knowledge } from "./types";
import { fetchKnowledge } from "./fetch-data";
import { styled } from "@stitches/react";
import isAllowed from "./isAllowed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthorizationModal } from "./authorizationModal";


export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthorizationModal />
    </QueryClientProvider>
  );
}
