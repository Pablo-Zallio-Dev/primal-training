//import React from 'react'
import { Link } from "react-router-dom";

const MenuDesktop = () => {
  return (
    <nav className="flex items-center gap-14">
      <Link className="links-nav-desktop" to="/">
        home
      </Link>
      <Link className="links-nav-desktop" to="/about">
        about
      </Link>
      <Link
        className="links-nav-desktop btn-page transform duration-200"
        to="/reserve"
      >
        reserve your spot
      </Link>
    </nav>
  );
};

export default MenuDesktop;
