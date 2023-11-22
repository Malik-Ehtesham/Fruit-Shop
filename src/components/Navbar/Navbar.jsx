import Link from "next/link";

import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className="bg-neutral-100 flex  p-3 ">
      <ul className="flex justify-evenly items-center w-full ">
        <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 md:w-32 lg:w-44">
          <Link
            href="/"
            className="text-lg text-black font-semibold hover:text-red-500"
          >
            Home
          </Link>
        </li>
        <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  md:w-32 lg:w-44">
          <Link
            href="/"
            className="text-lg text-black font-semibold hover:text-red-500"
          >
            About Us
          </Link>
        </li>
        <img src="/Mainlogo.png" className="w-40 mb-3" />
        <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  md:w-32 lg:w-44">
          <Link
            href="/"
            className="text-lg text-black font-semibold hover:text-red-500"
          >
            Contact Us
          </Link>
        </li>
        <SearchBar />
      </ul>
    </div>
  );
};

export default Navbar;
