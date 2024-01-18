import React, { useRef } from "react";

const UseRef = () => {
  let inputRef = useRef();

  const handleInputRef = () => {
    console.info("function call");
    inputRef.current.value = "kushal";
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  };

  return (
    <div>
      <h2>
        use useRef only when you rigorously need it, it is basically used when
        you want to change or handle DOM directly
      </h2>
      <h2>
        react recommends avoid the use of useRef since it directly handles DOM
        which lead to react's slower performance
      </h2>

      <input ref={inputRef} />
      <button onClick={handleInputRef}>click me </button>
    </div>
  );
};

export default UseRef;
