import '../game/styles.css'

const Screen = ({pokemones}) => {
  return (
    <div className="container-screen">
      <div className="screen-text">

        <div className="screen">
         {pokemones?.map((pokemon) => (
          <div>
          <p style={{fontFamily: "Pokemon Classic", fontSize: "8px"}}>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} alt="pokemones"/>
          </div>
         ))}
        </div>
        <div className="container-text">
          <p className="text">
            Nintendo <span>GAME BOY</span>
            <span style={{ fontSize: '8px' }}> TM</span>
          </p>
          </div>
      </div>
    </div>
  );
};

export default Screen;
