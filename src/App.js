import './App.css';
import {useEffect, useState} from "react";
import useDebounce from "./hooks/use-debounce";

const DATA = ['bike', 'dog', 'coin', 'cat', 'shop', 'turtle'];

function App() {
  const [result, setResults] = useState([]);
  const [text, setText] = useState("");

  const deb = useDebounce(text, 500);

  useEffect(() => {
    const d = DATA.filter(el => el.toLowerCase().includes(deb));
    setResults(d);
  }, [deb]);

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      {
        result.length > 0 ?
          result.map((el, i) => <div key={i}>{el}</div>) : <div>No result</div>
      }
    </div>
  );
}

export default App;
