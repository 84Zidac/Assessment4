import axios from "axios";
import { useLoaderData } from "react-router-dom";
import PokemonCardContent from "../components/PokemonCardContent";
import React from 'react';

export async function pokeLoader({ params }) {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${params.pokeId}`
  );
  return response.data;
}

export default function PokeViewer() {
  const pokeData = useLoaderData();

  return (
    <>
      <PokemonCardContent details={pokeData} />
    </>
  );
}
