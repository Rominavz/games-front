import axios from 'axios';
import{
    GET_ALL_GAMES,
    GET_GAME_BY_ID,
    CLEAN_GAME_DETAIL,
    GET_ALL_GENRES,
    SET_CURRENT_PAGE,
    FILTER_BY_ORIGEN,
    FILTER_BY_GENRE,
    FILTER_BY_PLATFORMS,
    ORDER_GAMES,
    CREATE_GAME,
    DELETE_GAME,
    SET_LOADING,
} from '../actions/types';

export const getAllGames = (name) =>{
    return (dispatch)=>{
        axios.get(`/videogames?name=${name ? name : ''}`)
        .then(response => {
            return dispatch({
            type: GET_ALL_GAMES, payload: response.data});
        })
       /*  .catch(error =>{
            alert('Sorry, Games not found')
        }) */
        .catch((error) => {
            console.log(error);
        });
    }
}
export const getGameById = (id) => {
    return (dispatch) =>{
    axios.get(`/videogame/${id}`)
    .then(response =>{
                return dispatch({
                type: GET_GAME_BY_ID, payload: response.data});
        })
    .catch((error) => {
        console.log(error);
    });
    };
};
export const cleanGameDetail = () => {
    return{
        type: CLEAN_GAME_DETAIL,
    }
};

export const setCurrentPage = (payload) => {
    return{
        type: SET_CURRENT_PAGE,
        payload,
    }
};
export const getAllGenres = () =>{
    return (dispatch) =>{
    axios.get(`/genres`)
    .then(response => {
        return dispatch ({
            type: GET_ALL_GENRES, payload: response.data});
    })
    .catch(error => {
        alert(error.response.data.message);
    });
    };
};
export const filterGameByOrigen = (payload) => {
    return{
        type: FILTER_BY_ORIGEN,
        payload,
    }
};
export const filterGameByGenre = (payload) => {
    return{
        type: FILTER_BY_GENRE,
        payload,
    }
};
export const filterGameByPlatforms = (payload) => {
    return{
        type: FILTER_BY_PLATFORMS,
        payload,
    }
};
export const orderGames = (payload) => {
    return{
        type: ORDER_GAMES,
        payload,
    }
};
export const createGame = (game) => {
    return async (dispatch) =>{
    try{
        await axios.post(`/videogame`, game);
            return dispatch ({
                type: CREATE_GAME,
            });
        }catch(error) {
        console.log(error);
        }
    };
};
export const deleteGame = (id) => {
    return async (dispatch) =>{
    try{
        await axios.delete(`/delete/${id}`);
            return dispatch ({
                type: DELETE_GAME,
            });
        }catch(error) {
        console.log(error);
        }
    };
};
export const setLoading = () => {
    return { type: SET_LOADING };
};