import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {HomePage, getPokemon } from "./Pages/HomePage";
import PokemonPage, { pokeLoader } from "./Pages/PokemonPage";
import PokemonTeamPage from "./Pages/PokemonTeamPage";
import ErrorPage from "./Pages/ErrorPage";
import React from 'react';


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: getPokemon,
      },
      {
        path: "/pokemon/:pokeId",
        element: <PokemonPage />,
        loader: pokeLoader,
      },
      {
        path: "/PokemonTeam/",
        element: <PokemonTeamPage />,
      },
    ],
  },
]);

export default Router;
