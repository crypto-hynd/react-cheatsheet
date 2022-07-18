import {useEffect, useRef} from "react";

const OtherExample = () => {
  const titleRef = useRef("Initial text");

  useEffect(() => {
    setTimeout(() => {
      titleRef.current.textContent = "Text Changed!";
    }, 3000);
  }, []);

  return(
    <h3 ref={titleRef}>Original Text</h3>
  );
}

export default OtherExample;