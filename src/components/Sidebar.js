import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const ismenuOpen = useSelector((store) => store.collapse.isMenuOpen);

  // EARLY RETURN = if ismenuopen is false, it will not go to further code and return early from here
  // if (!ismenuOpen) return null;

  // --------------- OR --------------//
  // USIGN TERNARY CONDITION
  return ismenuOpen ? (
    <div className=" h-screen p-5   shadow-md w-[216px]">
      <ul className="">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul className="mt-3 pt-3 border-t">
        <li>Library</li>
        <li>Watch later</li>
        <li>History</li>
      </ul>
      <h1 className="mt-3 pt-3 border-t">Subscriptions</h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
    </div>
  ) : null;
};

export default Sidebar;
