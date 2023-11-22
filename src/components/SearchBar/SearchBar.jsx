import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <li className="flex items-center md:w-32 lg:w-44">
      <TextField
        id="standard-search"
        label="Find fruits"
        type="search"
        variant="standard"
      />
      <SearchIcon
        // fontSize="large"
        className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-3xl text-black cursor-pointer hover:text-red-500"
      />
    </li>
  );
};

export default SearchBar;
