import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue">
      <Link to="/" className="brand-logo center">Exam Forecaster</Link>
    </nav>
  );
};

export default Navbar;