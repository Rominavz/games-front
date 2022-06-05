import React from "react";
import styles from "../styles/Slider.module.css";
import slider from "../assets/slider.jpg"

import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";


function Slider() {
  return (
    <div className={styles.slider}>
      <figure>
        <img src={slider} alt="slide" />
      </figure>
      
      <div className={styles.landingContainer}>
        <h1>ONLINE GAMING SITE</h1>
        <h3>Discover the extraordinary world of video games</h3>
        <Link to="/home">
            <MdHome className={styles.homeBtn}>Home</MdHome>
        </Link>
      </div>
    </div>
  );
}

export default Slider;