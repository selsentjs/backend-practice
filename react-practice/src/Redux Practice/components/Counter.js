import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { actions } from "../Redux/slice/counterSlice";

const Counter = () => {
    const {count} = useSelector((state) => state.count)
    const dispatch = useDispatch()

  // button action
  const increaseValue = () => {
    dispatch(actions.increment())
  };

  const decreaseValue = () => {
    dispatch(actions.decrement())
  };
  return (
    <div>
      <h4>Count:{count}</h4>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </div>
  );
};

export default Counter;
