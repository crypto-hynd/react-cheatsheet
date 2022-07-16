import './App.css';
import BlockA from "./components/BlockA";
import BlockB from "./components/BlockB";
import BlockC from "./components/BlockC";
import WithLayout from "./hoc/WithLayout";

function App() {
  return (
    <div className="App">
      <BlockA/>
      <BlockB/>
      <BlockC/>
    </div>
  );
}

export default WithLayout(App);
