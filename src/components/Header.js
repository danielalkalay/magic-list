import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/magic-list">
      <div className="main-header yellow ">magic-List</div>
    </Link>
  );
};

export default Header;
