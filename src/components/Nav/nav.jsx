import React from "react";


function Nav() {
  return (
    <nav className="navbar">
      <ul className="flex-row">
        <li className="mx-2">
          <Link to="/about">About Me</Link>
        </li>
        <li className="mx-2">
          <Link to="/portfolio">Projects</Link>
        </li>
        <li className="mx-2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
