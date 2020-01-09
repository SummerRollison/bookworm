import React from "react";
import { Link } from "react-router-dom";

import "../styling/header.css";

const Header = () => {
  return (
    <header className="nav">
      <Link to="/">
        <h1 className="title text-shadow">Bookworm</h1>
      </Link>
      <div className="nav-bar">
        <nav className="nav-links">
          <Link to="/" className="text-shadow">
            Home
          </Link>
          <Link to="/read" className="text-shadow">
            Read
          </Link>
          <Link to="/want-to-read" className="text-shadow">
            Want List
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
