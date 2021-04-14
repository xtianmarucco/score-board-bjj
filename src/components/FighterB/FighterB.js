import React from "react";
import { useState } from "react";
import "./fighterB.css";

function FighterB() {
  let [count, setCount] = useState(0);
  return (
    <div className="fighter-b">
      <h4>luchador 2</h4>
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
export default FighterB;
