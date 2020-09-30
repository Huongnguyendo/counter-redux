import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./components/Box";

function App() {
  const dispatch = useDispatch();
  // get count from reducer
  const count = useSelector((state) => state.count);

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  // const handleChange = (e) => {
  //   dispatch({ type: "CHANGECOLOR", payload: e });
  // };

  return (
    <div className="App">
      <h1>{count}</h1>
      <div>
        <button className="btn" onClick={() => increase()}>
          <i class="fa fa-plus-circle"></i>
        </button>
        <button className="btn" onClick={() => decrease()}>
          <i class="fa fa-minus-circle"></i>
        </button>
        <button className="btn" onClick={() => reset()}>
          <i class="fa fa-redo"></i>
        </button>
      </div>
      <input
        className="input-all"
        type="text"
        placeholder="Enter a color"
        onChange={(event) => {
          dispatch({
            type: "change-all-boxes-color",
            payload: event.target.value,
          });
        }}
      />
      {/* <Box /> */}
      <div className="boxes">
        {count > 0 &&
          Array.from({ length: count }, (x, i) => <Box index={i} />)}
      </div>
    </div>
  );
}

export default App;
