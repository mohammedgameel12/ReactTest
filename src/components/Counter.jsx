import "../assets/css/counter.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const changeCount = (type) => {
    if (type === "+") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter">
      <button onClick={() => changeCount("-")}>-</button>
      <div className="count">{count}</div>
      <button onClick={() => changeCount("+")}>+</button>
    </div>
  );
}

export default Counter;
