import React from 'react';
import { LinkTo } from "../styles/Link";
import styles from "../styles/Nav.module.css";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.webp";

export default function NavBar(){
    return(
        
            <div className={styles.nav}>
                <LinkTo to='/'>
                <img src={logo} width='80px' alt="logo" />
                </LinkTo>
                <h2>VIDEOGAMES</h2>
                <div className={styles.navsub}>
                <LinkTo to = '/create'>CREATE</LinkTo>
                <SearchBar/> 
                </div>
            </div>
    );
};