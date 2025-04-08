const ContainerGame = ({children}) => {
  return (
    <div
      style={{
        width: "350px",
        height: "500px",
        border: "2px black solid",
        borderRadius: "5px 5px 35px 5px",
      }}
    >
        {children}
    </div>
  );
};

export default ContainerGame;
