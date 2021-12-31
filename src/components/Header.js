import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/home">
      <div className="main-header yellow f1">magic-List</div>
    </Link>
  );
};

export default Header;
