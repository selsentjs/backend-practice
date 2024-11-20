import React, { useReducer } from "react";

const UseReducer = () => {
  // initiate reducer
  const reducer = (state, action) => {
    if (action.type === "plus") {
      return {count: state.count + 1}
    } else {
      return {count: state.count - 1}
    }
  };

  // initiate initialState
  const initialState = { count: 0 };

  // initiate dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseValue = () => {
    dispatch({ type: "plus" });
  };
  const decreaseValue = () => {
    dispatch({ type: "minus" });
  };
  return (
    <div>
      {/* Display the current count from the state */}
      <h4>Count: {state.count}</h4>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </div>
  );
};

export default UseReducer;
