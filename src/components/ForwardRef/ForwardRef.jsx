import React, { useRef } from "react";
import Child from "./Child";

const ForwardRef = () => {
  let inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.value = "1000";
  }

  return (
    <div>
      <h2>when you want to update DOM you use this hook</h2>
      <h2>
        lets say you have input tag in one element and submit button in other
        element then how can you access input tags value? for that we use
        ForwardRef
      </h2>

      <Child ref = {inputRef}/>
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default ForwardRef;
