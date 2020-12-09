import Name from "./components/Name.js";
import Portrait from "./components/Portrait.js";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Portrait />
        <Name />
      </div>
    </div>
  );
}

export default App;
