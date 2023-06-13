import { BrowserRouter ,  Routes , Route } from "react-router-dom";
import  Home  from "./pages/Home";
import  Starred  from "./pages/Starred";
import React from 'react';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/starred" element = {<Starred />} />
        <Route path="*" element = {<div> Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
