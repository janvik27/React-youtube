import React from "react";
import menu from "../assets/images/menu.png";
import youtube from "../assets/images/youtube.png";
import usericon from "../assets/images/usericon.png";
import SearchIcon from "../svg icons/SearchIcon";
import { toggleMenu } from "../utils/collapseSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg w-screen h-[56px] bg-white ">
      {/* menu icon and youtube logo */}
      <div className="flex col-span-1 ">
        <img
          onClick={() => handleToggleMenu()}
          className="h-8 cursor-pointer"
          src={menu}
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 mx-2 cursor-pointer"
            src={youtube}
            alt="youtube-logo"
          />
        </a>
      </div>
      {/* search bar */}
      <div className="flex col-span-10 pl-40 h-[40px]">
        <input
          className="w-1/2 border-solid border-[1px] border-gray-400 rounded-l-3xl px-4 py-2 focus:outline-gray-400"
          type="text"
          placeholder="Search"
        />
        <button className="  w-14 px-4 border-gray-400 border rounded-r-3xl bg-gray-100">
          <SearchIcon />
        </button>
      </div>
      {/* user profile section */}
      <div className="col-span-1">
        <img className="h-8 " src={usericon} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
