import React from "react";
import { NavLink } from "react-router-dom";
import "../navigation/Navigation.css";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
