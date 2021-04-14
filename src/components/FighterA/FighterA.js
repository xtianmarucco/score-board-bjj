import React from "react";
import { useState } from "react";
import "./fighterA.css";

function FighterA() {
  let [count, setCount] = useState(0);
  return (
    <div className="fighter-a">
      <h4>luchador 1</h4>
      <h1>{count}</h1>
      <div className="btn-container">
        <div className="btn-control" onClick={() => setCount(count - 1)}>
          -
        </div>
        <div className="btn-control" onClick={() => setCount((count = 0))}>
          reset
        </div>
        <div className="btn-control" onClick={() => setCount(count + 2)}>
          +2
        </div>
        <div className="btn-control" onClick={() => setCount(count + 3)}>
          +3
        </div>
        <div className="btn-control" onClick={() => setCount(count + 4)}>
          +4
        </div>
      </div>
    </div>
  );
}
export default FighterA;
