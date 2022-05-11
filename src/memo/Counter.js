import React, { useMemo, useState } from "react";

function Counter() {
  const [counterone, setCounterone] = useState(0);
  const [countertwo, setCountertwo] = useState(0);

  const addcounterone = () => {
    setCounterone(counterone + 1);
  };

  const addcountertwo = () => {
    setCountertwo(countertwo + 1);
  };
  const iseven = useMemo(() => {
    let i = 0;
    while (i < 2000000000000) i++;
    return counterone % 2 === 0;
  }, [counterone]);

  return (
    <div>
      <div>
        {counterone}--
        <span>{iseven ? "Even" : "Odd"}</span>
      </div>
      <button onClick={addcounterone}> counter One</button>
      <div>{countertwo}</div>
      <button onClick={addcountertwo}> counter Two</button>
    </div>
  );
}

export default Counter;
