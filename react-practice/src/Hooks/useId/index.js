import React, { useId } from "react";

const UseId = () => {
  let id = useId();
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor={`email-${id}`}>Email:</label>
        <input type="email" id={`email-${id}`} name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UseId;
