import SearchField from "./componenets/SearchField";
import GifCard from "./componenets/GifCard";

import "./style.css";

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios"; // Maybe we'll need axios? 🤔

// const GIPHY_API_KEY = `https://api.giphy.com/v1/gifs/search/${searchText}`;

const App = () => {

  return (
    <div className="app">
      <h1 className="title">GIF Generator</h1>
      <div id="search-box">
        <SearchField/>
      </div>
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
