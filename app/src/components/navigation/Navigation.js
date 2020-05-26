import React from "react";
import { NavLink } from "react-router-dom";
import "../navigation/Navigation.css";
import LogoPicture from "../../images/logo.png";

const Navigation = () => {
  return (
    <div className="navContainer">
      <div className="logoDiv">
        <img className="logo" src={LogoPicture} alt="logo" />
      </div>
      <nav>
        <ul className="navigation__wrapper__ul">
          <li className="navigation__li">
            <NavLink
              exact
              activeClassName="navigation__Link__active"
              className="navigation__Link"
              to="/"
            >
              Strona główna
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              activeClassName="navigation__Link__active"
              className="navigation__Link"
              to="/people"
            >
              Nasz zespół
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              activeClassName="navigation__Link__active"
              className="navigation__Link"
              to="/contact"
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
