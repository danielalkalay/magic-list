import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="main-nav">
      <Link to="/music">
        <li className="music btn f1 yellow">
          <i className="fas fa-music"></i>
        </li>
      </Link>
      <Link to="/sport">
        <li className="btn f1 yellow">
          <i className="fas fa-volleyball-ball"></i>
        </li>
      </Link>
      <Link to="/movies">
        <li className="btn f1 yellow">
          <i className="fas fa-film"></i>
        </li>
      </Link>
      <Link to="/todo">
        <li className="btn f1 yellow">
          <i className="far fa-check-square"></i>
        </li>
      </Link>
    </ul>
  );
};

export default Navbar;
