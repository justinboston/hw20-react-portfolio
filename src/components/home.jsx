import React from 'react';
import { Link } from "react-router-dom";


function Homepage() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>JUSTIN BOSTON</h2>
        <p>This is my portfolio</p>
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img
          src={Portrait}
          alt="self portrait"
        />
      </div>
    </section>
  );
}

export default Homepage;
