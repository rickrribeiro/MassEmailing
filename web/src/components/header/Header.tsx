import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={Logo} alt="" />
      </Link>

      <div className="header__center">
        <input type="text" />
        <Link to="/search">
          <SearchIcon />
        </Link>
      </div>

      <div className="header__right">
        <p>Become a member</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
