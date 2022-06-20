import React from 'react';
import { GameContainer, Details, Info, Icono, Bkg, Gen} from "../styles/Game";
import mario from '../assets/mario.png';

export default function Game({id, name, image, genres, rating}){
    return(
        <GameContainer>
            <Details to={`/home/detail/${id}`}> 
                <div>
                    <img loading='lazy'src={image} alt='flag not found'/>
                    <Info>
                    <Icono><img loading='lazy' src={mario} alt='flag not found'/></Icono> 
                        <Bkg>
                        <h3>{name}</h3>
                        <p> Genres</p> 
                        <Gen> 
                            {genres?.map((g) => {
                                return <div key={g}>{g}</div>
                            })}
                         </Gen>   
                            <p>Rating:{rating}</p>
                            <p>More...</p> 
                        </Bkg>
                    </Info>
                </div>
            </Details>
        </GameContainer>
    );
}