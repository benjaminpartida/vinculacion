import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HamburgerMenuClose, HamburgerMenuOpen } from "./utils/Icons";
import { ReactComponent as LogoUnamBlanco } from "../assets/icons/unam-logo-blanco.svg";
import { ReactComponent as LogoInstitutoBlanco } from "../assets/icons/instituto-logo-blanco.svg";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
            <LogoInstitutoBlanco  className="h-32 w-32 m-4" />
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/patentes"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Patentes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/laboratorios"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Laboratorios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/innovacion"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Innovación
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/convenios"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Convenios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/investigacion"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Investigación
              </NavLink>
            </li>
            
          </ul>
          <LogoUnamBlanco  className="h-16 w-16 m-8 right-0 hide" />


          <div className="nav-icon" onClick={handleClick}>

            {click ? (
              <span className="icon">
                <HamburgerMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgerMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;