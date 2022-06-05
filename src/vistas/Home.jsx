import React from "react";
import Games from '../components/Games';
import NavBar from "../components/NavBar";

import { ContainerHome } from '../styles/Home';

export default function Home(){
    return(
        <ContainerHome>
            <NavBar/>
            <Games/>
        </ContainerHome>
    )
};