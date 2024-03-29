import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";
import MainLayout from "./components/MainLayout";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/show/:showId" element={<Show />} />
          <Route path="*" element={<div> Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
