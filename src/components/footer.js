import React from 'react';
import { FaGithub, FaLinkedin, FaGmail, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/justinboston" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/justin-boston/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="https://app.slack.com/client/T0684NG5K2R/C067T4RGRMM/rimeto_profile/U06DVV93QCC" target="blank">
            <li>
              <FaGmail />
            </li>
          </a>
          <a href="https://www.instagram.com/just.bos" target="blank">
            <li>
              <FaInstagram />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
