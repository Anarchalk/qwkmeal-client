import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
  // list-style: none;
  display: flex;
  text-transform: uppercase;
  flex-flow: row nowrap;
  align-items: flex-start;
  .li-items {
    padding: 10px 20px;
    text-decoration: none;
  }
  @media (max-width: 699px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -15px;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    .li-items {
      color: #86754d;
      font-weight: normal;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <NavLink
        activeClassName="main-nav-active2"
        className="li-items"
        style={{ color: "#86754d" }}
        to={"/my_plans"}
      >
        My Plans{" "}
      </NavLink>
      <NavLink
        activeClassName="main-nav-active2"
        className="li-items"
        style={{ color: "#86754d" }}
        to={"/grocery_list"}
      >
        Grocery List{" "}
      </NavLink>
    </Ul>
  );
};

export default RightNav;
