import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import React from 'react';


export const getPokemon = async() => {
  let response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30")
  return response.data.results
}

export const HomePage=()=> {
  const pokeData = useLoaderData();
  const [myPokemon, setMyPokemon] = useState([]);

  useEffect(() => {
    setMyPokemon(pokeData);
    // console.log('use effect ran')
  }, []);

  return (
     <ol>
      <h2>HOME</h2>
      {myPokemon.map((pokemon, index) => (
        <li key={index} name={pokemon.name} url={pokemon.url}>
          <Link to={`/pokemon/${pokemon.name}/`}>{pokemon.name}</Link>
        </li>
      ))}
    </ol>
   
  );
};

