import "../game/styles.css";

const Screen = ({
  pokemones,
  hoverPokemon,
  selectedPokemones,
  playerHp,
  enemyHp,
}) => {
  console.log(pokemones);

  const getHpColor = () => {
    return '#848484';
  };

  const getHpPercentage = (hp, maxHp) => {
    return (hp / maxHp) * 100;
  };

  return (
    <div className="container-screen">
      <div className="screen-text">
        <div className="screen">
          {selectedPokemones.length === 2 ? (
            <div>
              {/* pokemon enemigo */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div>
                  <img
                    src={selectedPokemones[0][0].sprites?.front_default}
                    alt="imagen1"
                  />
                </div>
                <div className="hp_bar_container">
                  <div
                    className="hp_bar"
                    style={{
                      width: `${getHpPercentage(
                        enemyHp, selectedPokemones[0][0].stats[0].base_stat
                      )}%`,
                      backgroundColor: getHpColor(
                        enemyHp
                      ),
                    }}
                  >
                    
                  </div>
                </div>
              </div>
              {/* pokemon aliado */}
              <div style={{ width: "315px", height: "50%" }}>
                <div>
                  <img
                    src={selectedPokemones[1][0].sprites?.back_default}
                    alt="imagen1"
                  />
                </div>
                <div className="hp_bar_container">
                  <div
                    className="hp_bar"
                    style={{
                      width: `${getHpPercentage(
                        playerHp, selectedPokemones[1][0].stats[0].base_stat
                      )}%`,
                      backgroundColor: getHpColor(
                        playerHp
                      ),
                    }}
                  >
                    
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {pokemones?.map((pokemon) => (
                <div
                  style={{
                    backgroundColor: `${
                      hoverPokemon === pokemon.id ? "yellow" : ""
                    }`,
                  }}
                >
                  <img src={pokemon.sprites.front_default} alt="pokemones" />
                  <p style={{ fontFamily: "Pokemon Classic", fontSize: "8px" }}>
                    {pokemon.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="container-text">
          <p className="text">
            Nintendo <span>GAME BOY</span>
            <span style={{ fontSize: "8px" }}> TM</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screen;
