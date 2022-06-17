import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { createGame, getAllGames, getAllGenres, setLoading } from "../redux/actions";
import trash from "../assets/trash.png";

import {
        FormContainer,
        Delete,
        InputLabel,
        InfoImg,
        Top,
        Content,
        Select,
        InputText,
        BtnForm,
        BackBtn,
        Error,
       } from "../styles/Form";

import { validate } from "../utils/validation";

export default function Form() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { allGames, allGenres} = useSelector((state) => state);
   
    const allPlatforms = allGames.map((e)=> e.platforms);
    const platforms = [...new Set(allPlatforms.flat())].sort();
    

    const [game, setGame] = useState({
        name: "",
        description: "",
        released: "",
        rating: "",
        image: "",
        platforms:[],
        genres: [],
      });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getAllGenres());
        dispatch(getAllGames());
      },[dispatch]);

    const handleOnChange = (e) => {
        setGame({
          ...game,
          [e.target.name]: e.target.value,
        });
    
        setErrors(validate({ 
            ...game,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSelectPlatforms = (e) => {
        setGame({
            ...game,
            platforms: [...new Set([...game.platforms, e.target.value])],
        });
    
        setErrors(validate({ 
            ...game,
            platforms: [...new Set([...game.platforms, e.target.value])],
        }));
    };

    const handleDeletePlatforms = (plat) => {
        setGame({
          ...game,
          platforms: game.platforms.filter((p) => p !== plat),
          
        });
        setErrors(validate({ 
            ...game,
            platforms: game.platforms.filter((p) => p !== plat),
        }));
      };

    const handleSelectGenres = (e) => {
        setGame({
            ...game,
            genres: [...new Set([...game.genres, e.target.value])],
        });
    
        setErrors(validate({ 
            ...game,
            genres: [...new Set([...game.genres, e.target.value])],
        }));
    };

    const handleDeleteGenres = (gen) => {
        setGame({
          ...game,
          genres: game.genres.filter((g) => g !== gen),
          
        });
        setErrors(validate({ 
            ...game,
            genres: game.genres.filter((g) => g !== gen),
        }));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (
          game.name &&
          game.description &&
          game.rating &&
          game.image &&
          game.platforms.length &&
          game.genres.length &&
          !Object.keys(errors).length
        ) {
          dispatch(createGame(game));
          alert("Video game successfully created");
          setGame({
            name: "",
            description: "",
            released: "",
            rating: "",
            image: "",
            platforms:[],
            genres: [],
          });
          history.push("/home");
          dispatch(setLoading());
        } else {
          alert("Please complete the required fields or review the errors");
        }
    };

      return(
        <FormContainer onSubmit={handleOnSubmit}>
            <Top>
                <Link to="/home">
                <BackBtn title="Regresar" secondary></BackBtn>
                </Link>
            </Top>
            <div>
                    <InfoImg>
                        <img
                        src={ game.image
                              ? game.image
                              : "https://cdn.pixabay.com/photo/2020/11/07/13/05/character-5720913_960_720.png"
                            }
                        alt="dog profile"
                        />
                    </InfoImg>
                    <Top><h1>CREATE YOUR VIDEO GAME</h1></Top>
                    <Content>   
                          <InputLabel>
                              <p>Name</p>
                              <InputText
                              type="text"
                              name="name"
                              value={game.name}
                              autoComplete="off"
                              placeholder="Name"
                              onChange={handleOnChange}
                              />
                              {errors.name && <Error>{errors.name}</Error>} 
                          </InputLabel>

                          <InputLabel>
                              <p>Description</p>
                              <InputText
                              type="text"
                              name="description"
                              value={game.description}
                              autoComplete="off"
                              placeholder="Description"
                              onChange={handleOnChange}
                              />
                              {errors.description && <Error>{errors.description}</Error>} 
                          </InputLabel>

                          <InputLabel>
                            <p>Image</p>
                            <InputText
                            type="url"
                            name="image"
                            value={game.image}
                            autoComplete="off"
                            placeholder="Enter Url from your Image"
                            onChange={handleOnChange}
                            />
                            {errors.image && <Error>{errors.image}</Error>} 
                          </InputLabel>
                          
                          <InputLabel>
                              <p>Released</p>
                              <InputText
                              type="date"
                              name="released"
                              value={game.released}
                              autoComplete="off"
                              placeholder="Released"
                              onChange={handleOnChange}
                              />
                          </InputLabel>
                          
                          <InputLabel>
                              <p>Rating</p>
                              <label for="rating">{game.rating}</label>
                              <InputText
                              type="range"
                              min="1"
                              max="5"
                              step="0.1"
                              name="rating"
                              value={game.rating}
                              onChange={handleOnChange}
                              />
                              {errors.rating && <Error>{errors.rating}</Error>} 
                          </InputLabel>

                          <InputLabel>
                              <Select name="platforms" onChange={handleSelectPlatforms}>
                                <option value="">Platforms</option>
                                {platforms?.map((plat) => {
                                        return (
                                        <option key={plat} value={plat}>
                                            {plat}
                                        </option>)
                                    })}
                              </Select>
                              {errors.platforms && <Error>{errors.platforms}</Error>}  
                              <div>
                                  {game.platforms.map((plat) => (
                                      <Delete key={plat.id}>
                                      {plat}
                                      <img
                                          src={trash}
                                          alt="trash"
                                          onClick={() => handleDeletePlatforms(plat)}
                                      />
                                      </Delete>
                                  ))}
                              </div>
                           </InputLabel>

                           <InputLabel>
                              <Select name="genres" onChange={handleSelectGenres}>
                                <option value="">Genres</option>
                                {allGenres?.map((gen) => {
                                        return (
                                        <option key={gen.id} value={gen.name}>
                                            {gen.name}
                                        </option>)
                                    })}
                              </Select>
                              {errors.genres && <Error>{errors.genres}</Error>}  
                              <div>
                                  {game.genres.map((gen) => (
                                      <Delete key={gen.id}>
                                      {gen}
                                      <img
                                          src={trash}
                                          alt="trash"
                                          onClick={() => handleDeleteGenres(gen)}
                                      />
                                      </Delete>
                                  ))}
                              </div>
                            </InputLabel>
                            
                            <div>
                                <BtnForm type="submit" tertiary>
                                    SAVE
                                </BtnForm>
                            </div>
                        </Content>
             </div>
        </FormContainer>
)
}