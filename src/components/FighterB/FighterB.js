import React from "react";
import { useState } from "react";
import "./fighterB.css";

function FighterB() {
  let [count, setCount] = useState(0);
  let [adv, setAdv] = useState(0);

  return (
    <div className="container">
      <div className="fighter-b">
        <div className="count-container">
          <h1>{count}</h1>
        </div>
        <div className="adv-con">
          <h3>{adv}</h3>
          <div className="adv-control" onClick={() => setAdv(adv + 1)}>
            +
          </div>
          <div className="adv-control" onClick={() => setAdv(adv - 1)}>
            -
          </div>
          <div className="adv-control" onClick={() => setAdv((adv = 0))}>
            Reset
          </div>
        </div>
        <div className="btn-container">
          <div className="btn-control" onClick={() => setCount(count - 1)}>
            -
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
          <div className="btn-control" onClick={() => setCount((count = 0))}>
            Reset 
          </div>
        </div>
      </div>
    </div>
  );
}
export default FighterB;
