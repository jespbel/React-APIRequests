import React from "react";
import TextField from '@mui/material/TextField';

const SearchField = () => {
  return (
    <div id="search-box" >
      <TextField 
        label="Search GIF" 
        variant="outlined"
        color="white"/>
    </div>
  );
};

export default SearchField;
