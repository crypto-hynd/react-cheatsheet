import {useState} from "react";

/**
 * Below a "traditional" approach of changing the
 * input value using useState and onChange
 * handler
 * @returns {JSX.Element}
 * @constructor
 */

const WithUseState = () => {
  const [title, setTitle] = useState("")
  return (
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="title"/>
  );
}

export default WithUseState;