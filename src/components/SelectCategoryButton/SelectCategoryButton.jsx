"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectCategoryButton = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="flex items-center justify-center m-2 border-b-2 p-5">
      {/* <p className="text-black font-medium sm:font-semibold sm:text-lg"> */}
      {/* Select Category: */}
      {/* </p> */}
      <FormControl sx={{ m: 1 }} className=" w-64">
        <InputLabel
          id="demo-simple-select-helper-label"
          className="text-black text-lg font-semibold"
        >
          Select Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
          className="rounded-full border-red-500 border"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>Fruits</MenuItem>
          <MenuItem value={30}>Vegetables</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCategoryButton;
