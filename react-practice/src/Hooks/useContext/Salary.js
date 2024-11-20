import React, { useContext } from "react";
// Import the context
import { EmployeeContext } from "./EmployeeDetails";

const Salary = () => {
  let context = useContext(EmployeeContext);
  return (
    <div>
      <h3>Salary Details </h3>
      {context.map((item) => {
        return (
          <>
            <p>{item.id}</p>

            <p>{item.salary}</p>
          </>
        );
      })}
    </div>
  );
};

export default Salary;
