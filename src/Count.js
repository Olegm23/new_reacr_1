import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Count = () => {
  const count = useSelector(state => state.count);
  const dispatcher = useDispatch();
  return (
    <div>
      <button onClick={() => dispatcher({ type: 'minus' })} >-</button>
      {count}
      <button onClick={() => dispatcher({ type: 'plus' })} >+</button>
      <button onClick={() => dispatcher({ type: 'reset' })} >Reset</button>
    </div>
  );
};

export default Count;