import React from "react";

const StartSelect = () => {
  return (
    <div style={{ paddingTop: "30%" }}>
      <div
        style={{
          width: "60px",
          height: "60px",
          display: "flex",
        }}
      >
        {/* Boton select start */}
        <button
          style={{
            width: "20px",
            height: "60px",
            backgroundColor: "black",
            transform: "rotate(45deg)",
            borderRadius: "25%",
          }}
        ></button>
        <button
          style={{
            width: "20px",
            height: "60px",
            backgroundColor: "black",
            marginLeft: "15px",
            transform: "rotate(45deg)",
            borderRadius: "25%",
          }}
        ></button>
      </div>
    </div>
  );
};

export default StartSelect;
