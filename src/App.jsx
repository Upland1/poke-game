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
  const [hoverPokemon, setHoverPokemon] = useState(0)
  const [selectedPokemones, setSelectedPokemons] = useState([])
  const [playerHp, setPlayerHp] = useState(null);
  const [enemyHp, setEnemyHp] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [_, setWinner] = useState(''); 

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

  const handlePress = (dir) => {
    console.log(dir);
    if (dir === 'right') {
      setHoverPokemon(hoverPokemon + 1);
    }
    if (dir === 'left') {
      setHoverPokemon(hoverPokemon - 1);
    }
  };

  const handleSelectPokemon = () => {
    console.log('select pokemon', hoverPokemon);
    const pokemonSelected = pokemones.filter(
      (pokemon) => pokemon.id === hoverPokemon
    );
  
    const enemySelected = computerSelection();
    
    const selections = [enemySelected, pokemonSelected]; 
    console.log({ selections });
  
    setSelectedPokemons(selections);
  
    setPlayerHp(pokemonSelected[0].stats[0].base_stat);
    setEnemyHp(enemySelected[0].stats[0].base_stat);
  };

  const computerSelection = () => {
    const randomId = Math.floor(Math.random() * pokemones.length)
    const selectElement = pokemones.filter((pokemon) => pokemon.id == randomId)

    return selectElement
  }

  const handleAttack = () => {
    if (gameOver) return; 
  
    const playerDamage = Math.floor(Math.random() * 20) + 5; 
    setEnemyHp(prev => {
      const newHp = Math.max(prev - playerDamage, 0);
      if (newHp === 0) {
        setGameOver(true);
        setWinner('player');
      }
      return newHp;
    });
  
    setTimeout(() => {
      setEnemyHp((currentEnemyHp) => {
        if (currentEnemyHp > 0) {
          const enemyDamage = Math.floor(Math.random() * 20) + 5;
          setPlayerHp(prev => {
            const newHp = Math.max(prev - enemyDamage, 0);
            if (newHp === 0) {
              setGameOver(true);
              setWinner('enemy');
            }
            return newHp;
          });
        }
        return currentEnemyHp;
      });
    }, 500); 
  };

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
          <Screen 
          pokemones={pokemones} 
          hoverPokemon={hoverPokemon} 
          selectedPokemones={selectedPokemones} 
          playerHp={playerHp} 
          enemyHp={enemyHp}
          />
        
          {/* container buttons */}
          <ContainerButtons>
            {/* Pad direccional */}
            <Pad handlePress={handlePress}/>
            {/* Botones start select */}
            <StartSelect handleSelectPokemon={handleSelectPokemon} />
            {/* Boton A y B */}
            <Actions handleAttack={handleAttack}/>
          </ContainerButtons>
        </ContainerGame> 
      </MainContainer>
    </>
  );
}

export default App;
