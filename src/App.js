import './App.css';
import WithUseState from "./components/WithUseState";
import WithRefHook from "./components/WithRefHook";
import OtherExample from "./components/OtherExample";

function App() {
  return (
    <div className="App">
      <p>useState Hook and onChange</p>
      <WithUseState/>
      <p>useRef Hook</p>
      <WithRefHook/>
      <p>Other Example</p>
      <OtherExample/>
    </div>
  );
}

export default App;
