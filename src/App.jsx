import "./App.css";
import Actions from "./game/buttons/Actions";
import StartSelect from "./game/buttons/StartSelect";
import Screen from "./game/screen";
import Pad from "./game/buttons/Pad"

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* container game */}
        <div
          style={{
            width: "350px",
            height: "500px",
            border: "2px black solid",
            borderRadius: "5px 5px 35px 5px",
          }}
        >
          {/* container screen */}
          <Screen />

          {/* container buttons */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Pad />
            <StartSelect />
            {/* Boton A y B */}
            <Actions />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
