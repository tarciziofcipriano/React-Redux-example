import React from "react";

import { counterSlice, selectCount } from "./ReduxStructure/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./ReduxStructure/types";

const App = () => {
  // Hooks
    // Armazenar os itens
    const [addMoreItens, setAddMoreItens] = React.useState<string>("2");

    // Contador
    const count = useSelector(selectCount);

    // Disparar ação selecionada
    const dispatch = useDispatch<AppDispatch>();

  // Importar as ações
  const { add, remove, moreItens } = counterSlice.actions;

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
          onClick={() => dispatch(moreItens(+addMoreItens))}
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
