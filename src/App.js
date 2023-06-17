import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import { useState } from "react";
import { useData } from "./context/Context";
import SearchBook from "./component/SearchBook";

function App() {
  return (
    <div>
      <SearchBook />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
