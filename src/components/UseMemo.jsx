import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const memoFunction = useMemo(() => {
    console.warn("calling useMemo function");
    return item * 10;
  }, [item])
  return (
    <div>
      <h2>
        when some part of your component is re-rendering again and again without
        updating its related value you use useMemo,
      </h2>
      <h2>
        which tells react that if this variable changes then only call this
        function
      </h2>

        <h2>memoFunction value: {memoFunction}</h2>
      <button onClick={() => setCount(count + 1)}>{count}: add count</button>
      <button onClick={() => setItem(item + 1)}>{item}: add item</button>
    </div>
  );
};

export default UseMemo;
