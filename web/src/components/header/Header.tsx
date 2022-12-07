import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
function Header(props) {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img className="header__icon" src={Logo} alt="" />
        </Link>
      </div>

      <div className="header__center">
        <input type="text" />
        <Link to="/search">
          <SearchIcon />
        </Link>
      </div>

      <div className="header__right">
      {!props.user &&  <Link to="/login"><p>Become a member / Login</p></Link>}
       
        <LanguageIcon />
        {props.user &&  <img id="profileimage" src={props.user.photoURL} />}
        
        
      </div>
    </div>
  );
}
import { connect } from "react-redux";
const mapStateToProps = (state) => {
	return {
		user: state.userState?.user,
	};
};

export default connect(mapStateToProps)(Header);
