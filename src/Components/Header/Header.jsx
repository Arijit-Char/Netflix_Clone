import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div className="header">
     
        <img src={logo} alt="logo" />
    
      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recentlyadded">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>
      
        <CiSearch className="searchBt"/>
      
    </div>
  );
}

export default Header;
