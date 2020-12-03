import React from "react";
import { button } from "./Component/Button";
import SearchBy from "./Component/SearchBy";

function App() {
  function search() {}
  return (
    <div>
      <button onClick={search} text="search" color="red">
        See recipes
      </button>
      
      <SearchBy />
      
    </div>
  );
}

export default App;
