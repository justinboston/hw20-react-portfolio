import React from 'react';
import { Link } from "react-router-dom";


function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>JUSTIN BOSTON</h2>
        <p>This is my portfolio</p>
        <Link to="projects">
          <button>View my Projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img
          src="./assets/justinboston.png"
          alt="self portrait"
        />
      </div>
    </section>
  );
}

export default Home;
