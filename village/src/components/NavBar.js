import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 50%;

  a {
    text-decoration: none;
  }
`;

class NavBar extends React.Component {
  render() {
    return (
      <NavBarContainer>
        <Nav>
          <NavLink exact to="/" activeStyle={{ color: "black" }}>
            Smurf Village
          </NavLink>
          <NavLink to="/smurf-form" activeStyle={{ color: "black" }}>
            Add a Smurf
          </NavLink>
        </Nav>
      </NavBarContainer>
    );
  }
}
export default NavBar;
