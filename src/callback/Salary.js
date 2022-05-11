import React, { memo } from "react";

const Todos = ({ salary, incrementsalary }) => {
  console.log("salary render");
  // console.log(children);
  return (
    <>
      <h2>My salary</h2>
      <div>{salary}</div>
      <button onClick={incrementsalary}>increment salary</button>
    </>
  );
};

export default memo(Todos);
