import React from "react";
import styled from "styled-components";
import Burger from "./Burger.js";
import logo from "../../images/qwkmealsmall.png";
import magnifier from "../../images/smallmagnifier.png";
import profile from "../../images/smallprofile.png";

const Nav = styled.nav`
  width: 100%;
  height: 75px;
  box-shadow: 0px 1px 5px #bcbbba;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 10px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img
          src={logo}
          id="logo"
          alt="logo qwk meal"
          width="500"
          height="500"
        />
        <img
          src={magnifier}
          className="nav-items"
          id="mag"
          width="24"
          height="24"
          alt="magnifier icon"
        />
        <img
          src={profile}
          className="nav-items"
          id="prof"
          width="24"
          height="24"
          alt="profile icon"
        />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
