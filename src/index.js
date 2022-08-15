import React from 'react';
import Base from "./styles/elements/Base"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextProvider from "./Context/auth";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ContextProvider>
        <StrictMode>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cards" element={<Cards />} />
          </Routes>
          <Base />
        </StrictMode>
      </ContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
);