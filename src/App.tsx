import "./App.css";
import { WordSearch } from "./component/WordSearch";
import { DefinitionDisplay } from "./component/DefinitionDisplay";

function App() {
  return (
    <>
    <div className="app">
      <h1>Dictionary</h1>
      <WordSearch />
      <hr />
      <DefinitionDisplay />
    </div>
    </>
  );
}

export default App;
