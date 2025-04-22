import '../styles.css'
const StartSelect = ({handleSelectPokemon}) => {
  return (
    <div style={{ paddingTop: "30%" }}>
      <div
        class="button-container"
      >
        {/* Boton select */}
        <button
          id="button-start" onClick={handleSelectPokemon}
        ></button>
        {/* Boton start */}
        <button
          id="button-select" 
        ></button>
      </div>
    </div>
  );
};

export default StartSelect;
