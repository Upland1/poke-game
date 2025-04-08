import "./App.css";

// Partes de App
import Actions from "./game/buttons/Actions";
import StartSelect from "./game/buttons/StartSelect";
import Screen from "./game/screen";
import Pad from "./game/buttons/Pad"
import ContainerGame from "./game/containerGame"
import ContainerButtons from "./game/containerButton"
import MainContainer from "./game/mainContainer"

// React
import { useState, useEffect } from "react";

function App() {

  const [pokemones, setPokemones] = useState([])

  const BASE_URL = "https://pokeapi.co/api/v2/"

  const getPokemones = async() => {
    const res = await fetch(`${BASE_URL}/pokemon`)
    const data = await res.json()
    console.log(data)
    const pokemonsDetails = await getDetails(data.results)
    setPokemones(pokemonsDetails)
  }

  const getDetails = async (results) => {
    const res = await Promise.all(results.map((result) => fetch(result.url)))
    const data = await Promise.all(res.map((el) => el.json()))
    return data
  }

  const handlePress = (direction) => {
    console.log(direction)
  }

  useEffect(() => {
    getPokemones()
  }, [])

  return (
    <>
      {/* main container */}
      <MainContainer>
        {/* container game */}
        <ContainerGame>
          {/* container screen */}
          <Screen pokemones={pokemones} />
        
          {/* container buttons */}
          <ContainerButtons>
            {/* Pad direccional */}
            <Pad handlePress={handlePress}/>
            {/* Botones start select */}
            <StartSelect />
            {/* Boton A y B */}
            <Actions />
          </ContainerButtons>
        </ContainerGame> 
      </MainContainer>
    </>
  );
}

export default App;
