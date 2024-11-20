import React, { useState } from "react";
import Data from "./Data";
import Employee from "./Employee";

// Exporting the context
export const EmployeeContext = React.createContext(); 

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState(Data);
  return (
    <div>
      <EmployeeContext.Provider value={employee}>
        <Employee />
      </EmployeeContext.Provider>
    </div>
  );
};

export default EmployeeDetails;
