import { useState, useCallback } from "react";
import Salary from "./Salary";
import Count from "./Count";

const Maincomp = () => {
  // console.log("counter   render");
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(50000);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const incrementsalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <h1>.....use callback .....</h1>
      <Count increment={increment} count={count} />
      <Salary salary={salary} incrementsalary={incrementsalary} />
    </>
  );
};

export default Maincomp;
