import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import { createContext, useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import React from 'react';
// import {teamContext} from './components/data'





// export const teamContext = createContext(null);
// function App() {
//   // const {onTeam} = useContext(teamContext)
//   // const { setOnTeam} = useContext(teamContext);
 
//   const [onTeam, setOnTeam] = useState([])

//   console.log(`from app ${onTeam}`)
//   // useEffect(() => {
//   //   setOnTeam([...onTeam]);
//   //   console.log('useEffectRan')
//   // }, []);
  
//   return (

//     <teamContext.Provider value={{ onTeam, setOnTeam }}>
//       <Header />
//       <Outlet />
//     </teamContext.Provider>
//   );
// }

// export default App;
// import { createContext, useState, useEffect, useContext } from "react";

export const teamContext = createContext(null);

function App() {
  console.log(`local storage: ${(localStorage.getItem('onTeam'))} type of: ${typeof localStorage.getItem('onTeam')}`)
  const [onTeam, setOnTeam] = useState(JSON.parse((localStorage.getItem(['onTeam']))));
  console.log(`onTeam: ${onTeam} type of: ${typeof onTeam}`)

  // useEffect(() => {
  //   const storedOnTeam = localStorage.getItem("onTeam");
  //   if (storedOnTeam) {
  //     setOnTeam(JSON.parse(storedOnTeam));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("onTeam", JSON.stringify(onTeam));
  // }, [onTeam]);

  return (
    <teamContext.Provider value={{ onTeam, setOnTeam }}>
      <Header />
      <Outlet />
    </teamContext.Provider>
  );
}

export default App;