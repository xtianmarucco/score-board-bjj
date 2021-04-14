import "./App.css";
import FighterA from "./components/FighterA/FighterA";
import FighterB from "./components/FighterB/FighterB";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h2>BJJ ScoreApp</h2>
      <FighterA></FighterA>
      <FighterB></FighterB>
    </div>
  );
}

export default App;
