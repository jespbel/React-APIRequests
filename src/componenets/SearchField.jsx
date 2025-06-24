import React, { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";

const SearchField = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState("");
  const GIPHY_API_KEY = "ViL5oGtY0oigGwJK24RtU5dAEx81oilr"

  const searchGetRequest = async () => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=${GIPHY_API_KEY}`
    const response = await axios.get(url)
    if (response.status !== 200){
      console.log("Error occured when calling API")
      console.log(response.data)
    }
    else {
      console.log("Data recieved from api request")
      console.log(response.data.data)
    }
  } 

  const searchAction = () => {
    document.getElementById("search-text-box").addEventListener("input", (event) => {
      console.log(event.target)
    })
  }

  return (
      <TextField 
        label="What's today's vibe?" 
        variant="outlined"
        id="search-box"
        onChange = {event => {
          setSearchText(event.target.value)
        }}
        onKeyDown = { e => (
          e.keyCode === 13 ? searchGetRequest() : null
        )}
        />
  );
};

export default SearchField;
