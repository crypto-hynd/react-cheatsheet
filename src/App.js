import './App.css';
import {useState} from "react";
import useDebounce from "./hooks/use-debounce";
import useFetch from "./hooks/use-fetch";

function App() {
  const [text, setText] = useState("");

  const deb = useDebounce(text, 500);
  const url = `http://swapi.dev/api/people?search=${deb}`;
  const {data, isLoading, error} = useFetch(url);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error Occurred!</div>
  }

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}/>
      {
        data.length > 0 ?
          data.map((el, i) => <div key={i}>{el.name}</div>) : <div>No result</div>
      }
    </div>
  );
}

export default App;
