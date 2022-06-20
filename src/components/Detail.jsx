import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getGameById, cleanGameDetail, deleteGame, setLoading } from "../redux/actions";
import Loader from "./Loader";
import styles from "../styles/Detail.module.css";
import { MdHome } from "react-icons/md";
import { useHistory } from "react-router-dom";
import trash from "../assets/trash.png";


export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { gameDetail } = useSelector((state) => state); 
    
    const history = useHistory();

    const handleDelete = () => {
        dispatch(deleteGame(id));
        alert('Game delete');
        history.push("/home");
        dispatch(setLoading());
    }

    useEffect(() => {
        dispatch(getGameById(id));
        return () => dispatch(cleanGameDetail());
    }, [dispatch, id]);

   
    return (
        <div>
            <Link to="/home">
            <MdHome className={styles.goBack}>Home</MdHome>
            </Link>
            <div className={styles.gameDetail} >
                {gameDetail.length === 0 ? (
                    <Loader /> ) : (
                                <div>
                                    <div className={styles.gameBack}>
                                        <img loading='lazy' src={gameDetail.image} width="1530px" alt=''/>
                                    </div>
                                    <div className={styles.info}>
                                            <h1>{gameDetail.name}</h1>
                                            <h2>Rating: {gameDetail.rating}</h2>
                                            <h3>Released: {gameDetail.released}</h3>
                                            <p>{gameDetail.description}</p>
                                            <p className={styles.platf}>
                                            Genres: {gameDetail.genres?.map((gen) => {
                                                        return <span className={styles.gen} key={gen}>{gen}</span>
                                                    })}
                                            Platforms: {gameDetail.platforms?.map((plat) => {
                                                        return <span className={styles.plat} key={plat}>{plat}</span>
                                            })}
                                            </p>
                                            {gameDetail.createdInDb && 
                                            <img className={styles.img}
                                            src={trash} width='40px'
                                            alt="trash"
                                            onClick={handleDelete}
                                             />
                                            }
                                    </div>
                                </div>
                    
                )}
            </div>
        </div>
      );
    };