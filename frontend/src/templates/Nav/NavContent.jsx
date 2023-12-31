import React from "react";
import Blobs from "../../components/Blobs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function NavContent(props) {
  const { style, setIsClicked } = props;

  return (
    <div className={`nav-links ${style}`}>
      <ul>
        <div className="nav-items">
          <li onClick={setIsClicked}>
            <HashLink to="/#home">Home</HashLink>
          </li>
          <li onClick={setIsClicked}>
            <HashLink to="../#about-us">About Us</HashLink>
          </li>
          <li onClick={setIsClicked}>
            <HashLink to="../#gallery">Our Work</HashLink>
          </li>
          <li onClick={setIsClicked}>
            <HashLink to="../#pricing">Pricing</HashLink>
          </li>
          <li onClick={setIsClicked}>
            <HashLink to="/#contact">Contact Us</HashLink>
          </li>
        </div>
        <div className="account-container">
          <Link to={"dashboard"}>
            <motion.li
              className="contact-container register"
              whileHover={{
                scale: 1.1,
                backgroundColor: "white",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Blobs size="small" />
              Dash
            </motion.li>
          </Link>
          <Link to={"account"}>
            <motion.li
              className="contact-container login"
              whileHover={{
                scale: 1.1,
                color: "white",
                backgroundColor: "#7f57ff",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Blobs size="small" />
              Login
            </motion.li>
          </Link>
          <Link to={"account/register"}>
            <motion.li
              className="contact-container register"
              whileHover={{
                scale: 1.1,
                backgroundColor: "white",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Blobs size="small" />
              Register
            </motion.li>
          </Link>
        </div>
      </ul>
    </div>
  );
}
