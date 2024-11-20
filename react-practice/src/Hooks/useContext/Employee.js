import React, { useContext } from "react";
import Salary from "./Salary";
// Import the context
import { EmployeeContext } from "./EmployeeDetails";

const Employee = () => {
  let context = useContext(EmployeeContext);
  return(
    <div>
      {context.map((item) => {
        return (
          <>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.department}</p>
          </>
        );
      })}
      <Salary />
    </div>
     
  );
};

export default Employee;
