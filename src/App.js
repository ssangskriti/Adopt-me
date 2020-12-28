import React from "react";
import { render } from "react-dom"; //import ReactDOM from 'react-dom';
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Panda",
  //     animal: "Cat",
  //     breed: "Bangladeshi",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Moyna",
  //     animal: "Bird",
  //     breed: "Cockatie",
  //   }),
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatie" />
      <Pet name="Doink" animal="cat" breed="Mix" /> */}
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));
