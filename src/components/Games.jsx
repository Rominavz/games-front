import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames,getAllGenres, setCurrentPage, filterGameByOrigen, filterGameByGenre, orderGames } from '../redux/actions';

import Game from './Game';
import Loader from './Loader';
import Paged from './Paged';
import Filters from './Filters';
import fil from "../assets/fil.png";
import logo from "../assets/logo.webp";
import noResults from '../assets/noResults.png';
import { Card, NoResult, Btnprinc} from '../styles/Home';
import { ConteinerBtn } from "../styles/Button";


export default function Games(){

    const dispatch = useDispatch();
    const { games, page, allGenres } = useSelector((state) =>state);
    const [filters, setFilters] = useState(false);
    
    let gamesPerPage = 15;
    const indexOfLastGame = page * gamesPerPage; 
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = games.slice(indexOfFirstGame,indexOfLastGame);

    useEffect (()=>{
        dispatch(getAllGames());
        dispatch(getAllGenres());
        dispatch(setCurrentPage(1))
    },[dispatch])

 
    const handleFilterOrigen = (e) =>{
        dispatch(filterGameByOrigen(e.target.value));
        dispatch(setCurrentPage(1));
    };

    const handleFilterGenre = (e) =>{
        dispatch(filterGameByGenre(e.target.value));
        dispatch(setCurrentPage(1));
    };

    const handleOrdered = (e) => {
        dispatch(orderGames(e.target.value));
        dispatch(setCurrentPage(1));
    };

    return(
        <div>
                <ConteinerBtn>
                    <Btnprinc title="Filters" onClick={() => setFilters(!filters)}>
                        <img src={fil} width='60px' alt="logo" />
                    </Btnprinc>
                    <Btnprinc title="Reset" onClick={() => window.location.reload()}>
                        <img src={logo} width='58px' alt="logo" />
                    </Btnprinc>
                </ConteinerBtn>
                { filters && (
                    <Filters
                    handleFilterOrigen={handleFilterOrigen}
                    handleFilterGenre={handleFilterGenre}
                    genres={allGenres}
                    handleOrdered={handleOrdered} 
                    />
                 )}
                <Card>
                    { !currentGames.length ? (
                        <Loader /> ) : (
                        typeof currentGames === 'string'?
                        <NoResult>
                        <h4>Games Not Found</h4>
                        <img src={noResults} alt="logo" />
                        </NoResult> :
                        currentGames?.map((e,index) => (
                                <Game
                                key={index} id={e.id} name={e.name} image={e.image} genres={e.genres} rating={e.rating}
                                />
                        )))
                    }
                </Card>
                <Paged gamesPerPage={gamesPerPage}/>
        </div>
    )

}

