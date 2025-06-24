import SearchField from "./componenets/SearchField";
import GifCard from "./componenets/GifCard";

import "./style.css";

import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios"; // Maybe we'll need axios? 🤔

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState("");
  const GIPHY_API_KEY = `https://api.giphy.com/v1/gifs/search/${searchText}`;

  // const searchGetRequest = async () => {
  //   const response = await axios.get(GIPHY_API_KEY)
  //   if (response.error !== null){
  //     console.log("Error occured when calling API")
  //     console.log(response.error)
  //   }
  //   else {
  //     console.log("Data recieved from api request")
  //     console.log(response.data)
  //   }
  // } 

  return (
    <div className="app">
      <h1 className="title">What's the vibe today?</h1>
      <SearchField id="search-text-box"/>
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
