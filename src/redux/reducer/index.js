import{
    GET_ALL_GAMES,
    GET_GAME_BY_ID,
    CLEAN_GAME_DETAIL,
    SET_CURRENT_PAGE,
    GET_ALL_GENRES,
    FILTER_BY_ORIGEN,
    FILTER_BY_GENRE,
    FILTER_BY_PLATFORMS,
    ORDER_GAMES,
    DELETE_GAME,
   /*  SET_LOADING, */
    
} from '../actions/types'

const initialState = {
    games: [],
    allGames:[],
    gameDetail:[],
    allGenres:[],
    page:1,
    /* loading: true, */
}


function rootReducer(state= initialState, {type, payload}){
    switch(type){
        case GET_ALL_GAMES:
            return{
                ...state,
                games: payload,
                allGames: payload,  
               /*  loading: false, */
            };
        /* case SET_LOADING:
            return {
                ...state,
                loading: true,
            }; */
        case GET_GAME_BY_ID:
            return{
                ...state,
                gameDetail: payload,
                /* loading: false, */
            }; 
        case CLEAN_GAME_DETAIL:
            return{
                ...state,
                gameDetail:[],
            }; 
        case DELETE_GAME:
            return{
                ...state,
            }; 
        case SET_CURRENT_PAGE:
            return{
                ...state,
                page: payload,
            };
        case GET_ALL_GENRES:
            return{
                ...state,
                allGenres: payload,
            };
        case FILTER_BY_ORIGEN:
            const allGames = state.allGames;
            const origenFilter = payload === 'created' ? allGames.filter(c => c.createdInDb) : allGames.filter(c => !c.createdInDb);
            return{
                ...state,
                games: payload === 'All' ? allGames: origenFilter,
            };
        case FILTER_BY_GENRE:
            const allGameGenres = state.allGames;
            const genresFilter = payload === 'All' ? allGameGenres  : allGameGenres.filter(g => g.genres?.includes(payload));
            return{
                ...state,
                games: genresFilter,
            };
        case FILTER_BY_PLATFORMS:
            const allGamePlatforms = state.allGames;
            const platformsFilter = payload === 'All' ? allGamePlatforms  : allGamePlatforms.filter(g => g.platforms?.includes(payload));
            return{
                ...state,
                games: platformsFilter,
            };
        case ORDER_GAMES:
            let ordered = state.games;
            payload === 'Asc' &&
                ordered.sort((a,b) =>{
                    return a.name.localeCompare(b.name);
                })
            payload === 'Desc' &&
                ordered.sort((a,b) =>{
                    return b.name.localeCompare(a.name);
                });
            payload === 'Max' &&
                ordered.sort((a,b) =>{
                    return b.rating - a.rating;
                });
            
            payload === 'Min' &&
                ordered.sort((a,b) =>{
                    return a.rating - b.rating;
                });  
            return{
                ...state,
                games: ordered,
            }
    
    default: return state;
    } 
}

export default rootReducer;