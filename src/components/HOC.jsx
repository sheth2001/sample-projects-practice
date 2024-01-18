import React, { useState } from "react";

const HOC = () => {
  return (
    <div>
        <h2>HOC is simple when you pass component as a prop and receives a component as a prop</h2>
      <CounterRed Counter={Counter} />
      <CounterGreen Counter={Counter} />
    </div>
  );
};

const CounterGreen = ({ Counter }) => {
  return (
    <>
      <h2 style={{ backgroundColor: "green" }}>
        <Counter />
      </h2>
    </>
  );
};
const CounterRed = ({ Counter }) => {
  return (
    <>
      <h2 style={{ backgroundColor: "red" }}>
        <Counter />
      </h2>
    </>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>update</button>
    </>
  );
};

export default HOC;
