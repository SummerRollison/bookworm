import React from "react";
import { Link } from "react-router-dom";

import "../styling/nav.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/read">Read</Link>
        <Link to="/want-to-read">Want to Read</Link>
      </div>
    </div>
  );
};

export default Header;
