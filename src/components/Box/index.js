import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Box = ({ index }) => {
  const count = useSelector((state) => state.count);
  const colorAll = useSelector((state) => state.color);
  const colorOne = useSelector((state) => state.boxes[index]);

  const dispatch = useDispatch();
  return (
    <div>
      {/* <h3>Count from box: {count}</h3> */}
      <div
        id={index}
        className="box"
        style={
          colorOne
            ? { backgroundColor: colorOne }
            : { backgroundColor: colorAll }
        }
      >
        Change my color!
        <input
          className="input-one"
          type="text"
          onChange={(event) => {
            dispatch({
              type: "change-one-box-color",
              payload: { index: index, value: event.target.value },
            });
          }}
        />
      </div>
    </div>
  );
};

export default Box;
