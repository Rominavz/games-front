import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Search, IconSearch } from "../styles/SearchBar";
import { getAllGames, setCurrentPage, /* setLoading */ } from "../redux/actions";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setSearch(e.target.value); 
      };
    
    const handleOnClick = (e) => {
        e.preventDefault();
        if (!search) {
          alert('Please enter a video games');
        } else {
          /* dispatch(setLoading()); */
          dispatch(getAllGames(search));
          dispatch(setCurrentPage(1));
          setSearch("");  
        }
        
    };
    return(
        <div>
        <Search onSubmit={handleOnClick}>
            <IconSearch onClick={handleOnClick}/>
            <input
            type='text'
            placeholder='Search Video game..'
            onChange={handleOnChange}
            value={search}
            autoComplete='off'
            />
        </Search>
        </div>
    );
    
}