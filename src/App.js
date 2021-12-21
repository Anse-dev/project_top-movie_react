import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./components/Home";
import { useHomeFetch } from "./hooks/HomeFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
function App() {
  const { setSearchTerm, searchTerm } = useHomeFetch();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
