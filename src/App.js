import { button } from "./Component/Button";
import React from "react";

function App() {
  function search() {}
  return (
    <div>
      <button onClick={search} text="search" color="red">
        See recipes
      </button>
    </div>
  );
}
export default App;
