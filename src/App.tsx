import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { counterSlice, selectCount } from "./ReduxStructure/actions";

const App = () => {
  // Contador
  const count = useSelector(selectCount);

  // Disparar ação selecionada
  const dispatch = useDispatch();

  // Ações
  const { add, remove, moreItens } = counterSlice.actions;

  // Hook para adicionar mais itens de uma vez só
  const [addMoreItens, setAddMoreItens] = React.useState<string>("2");
  const incrementValue = Number(addMoreItens) || 0;

  return (
    <div style={{ textAlign: "center", paddingTop: "60px", fontSize: "70px" }}>
      <p>React Redux example:</p>
      <button
        style={{
          fontSize: "70px",
          width: "100px",
          backgroundColor: "lightgreen",
        }}
        onClick={() => dispatch(add())}
      >
        +
      </button>
      <span style={{ margin: "0px 30px" }}>{count}</span>
      <button
        style={{
          fontSize: "70px",
          width: "100px",
          backgroundColor: "lightcoral",
        }}
        onClick={() => dispatch(remove())}
      >
        -
      </button>
      <div>
        <button
          style={{ fontSize: "20px" }}
          onClick={() => dispatch(moreItens(incrementValue))}
        >
          Adicionar de uma vez
        </button>
      </div>
      <input
        style={{
          fontSize: "50px",
          width: "130px",
          textAlign: "center",
          borderRadius: "15px",
        }}
        value={addMoreItens}
        onChange={(e) => setAddMoreItens(e.target.value)}
      />
    </div>
  );
};

export default App;
