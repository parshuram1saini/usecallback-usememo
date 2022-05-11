import React, { memo } from "react";

function Count({ increment, count }) {
  console.log("counter render ");
  return (
    <>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default memo(Count);
