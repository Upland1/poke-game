import '../styles.css'
const Actions = ({handleAttack}) => {
  return (
    <div
      class="button-container-ab"
    >
      <div>
        <button
          class="action-btn" onClick={handleAttack}
        >A</button>
      </div>
      <div>
        <button
          class="action-btn"
        >B</button>
      </div>
    </div>
  );
};

export default Actions;
