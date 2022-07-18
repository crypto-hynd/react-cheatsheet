import './App.css';
import Input from "./components/Input";
import {useRef} from "react";

function App() {
  const inputRef = useRef();
  const handleDisplayInputValue = () => {
    alert(`The input stores: ${inputRef.current.value}`)
  }
  return (
    <div className="App">
      <div className={'column is-half is-offset-3'}>
        <Input
          ref={inputRef}
          label={'Text'}
          type="text"
          placeholder={'Enter Text'}
        />
        <br/>
        <button className={'button has-text-centered'} onClick={handleDisplayInputValue}>Click</button>
      </div>
    </div>
  );
}

export default App;
