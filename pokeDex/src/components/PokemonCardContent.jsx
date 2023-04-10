import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { teamContext } from "../App";
// import { teamContext } from "./data";
import React from "react";
import { useEffect, useState, useContext } from "react";

export function pickBackGroundColor(color) {
  const colorDict = {
    grass: "green",
    fire: "red",
    electric: "yellow",
    ground: "brown",
    rock: "brown",
    water: "blue",
    psychic: "purple",
    poison: "purple",
    dragon: "silver",
    steel: "silver",
    flying: "cyan",
    ice: "cyan",
    normal: "gray",
  };
  if (color in colorDict) {
    return { width: "18rem", backgroundColor: colorDict[color] };
  } else {
    return { width: "18rem", backgroundColor: "white" };
  }
}

export default function PokemonCardContent(props) {

  const backroundColor = pickBackGroundColor(props.details.types[0].type.name);
  const {onTeam} = useContext(teamContext)
  const { setOnTeam} = useContext(teamContext);
  const [nameInput, setNameInput] = useState('')
  useEffect(() => {
  
    setNameInput(props.details.species.name);

    // console.log(pokeData)
  }, []);
  function addToTeam(e) {
    e.preventDefault
    // console.log(onTeam);
    const index = onTeam.indexOf(nameInput);
    if (index === -1) {
    setOnTeam([...onTeam, nameInput])
    localStorage.setItem("onTeam", JSON.stringify([...onTeam, nameInput]));
  }
    else if (index === 0) {
      const x= [...onTeam].shift()
      console.log(`x is: ${x}`)
      setOnTeam(x)
      localStorage.setItem("onTeam", JSON.stringify(x));
    }
    else{
      // console.log(index)
      const x = [...onTeam].splice(index, 1)
      console.log(`index: ${index}`)
      console.log(`x is: ${x}`)
      setOnTeam(x)
      localStorage.setItem("onTeam", JSON.stringify(x));
    }
    // console.log(onTeam)
  }
  return (
    <Card style={backroundColor}>
      <Card.Img variant="top" src={props.details.sprites.front_default} />
      <Container>
        <Row>
          <Col>{props.details.moves[0].move.name}</Col>
          <Col>{props.details.moves[1].move.name}</Col>
        </Row>
        <Row>
          <Col>{props.details.moves[2].move.name}</Col>
          <Col>{props.details.moves[3].move.name}</Col>
        </Row>
      </Container>

      <Card.Body>
        <Button href="/" variant="link">
          Home
        </Button>
        <Button onClick={addToTeam} variant="link" name={props.details.species.name} >
          Catch/Release
        </Button>
      </Card.Body>
    </Card>
  );
}
