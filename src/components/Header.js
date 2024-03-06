import React, { useEffect, useState } from "react";
import "../components/Header.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function Header() {
  //========================================
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <div className="container">
        <div className="left">
          <NavLink className="logo" to="/">
            BOBA MOVIES
          </NavLink>
          <NavLink className="navItem" to="/home">
            HOME
          </NavLink>
          <Link
            className="navItem"
            to="trend"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
          >
            TRENDING
          </Link>

          <Link
            className="navItem"
            to="popular"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
          >
            POPULAR
          </Link>
          <Link
            className="navItem"
            to="coming"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
          >
            UP COMING
          </Link>
          <Link
            className="navItem"
            to="rated"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
          >
            TOP RATED
          </Link>

          <NavLink className="navItem" to="/search">
            SEARCH
          </NavLink>
        </div>
        <div className="right">
          <NavLink className="signin" to="/signup">
            SIGN UP
          </NavLink>
          <NavLink className="login" to="/login">
            LOG IN
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
