import {useEffect, useRef} from "react";

const WithRefHook = () => {
  const titleRef = useRef();

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  return(
    <input
      ref={titleRef}
      type="text"
      value={titleRef.current?.value}
      placeholder="title"/>
  );
}

export default WithRefHook;