const ContainerButton = ({children}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
        {children}
    </div>
  );
};

export default ContainerButton;
