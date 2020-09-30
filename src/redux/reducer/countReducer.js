// initialize initialState with dynamic variables
let initialState = {
  count: 0,
  color: "",
  index: null,
  boxes: [],
};

// make reducer with state and action params
const countReducer = (state = initialState, action) => {
  // action has type and payload
  let { type, payload } = action;

  // remember to return state
  switch (type) {
    case "INCREMENT":
      state.count++;
      state.boxes.push("");
      return { ...state };
    case "DECREMENT":
      state.count--;
      if (state.count <= 0) {
        state.count = 0;
      }
      state.boxes.pop();
      return { ...state };
    case "RESET":
        state.count = 0;
        return { ... state};
    case "change-all-boxes-color":
      state.color = payload;
      return { ...state };
    case "change-one-box-color":
      // whats sent via payload, access info via payload.
      state.boxes[payload.index] = payload.value;
      console.log(state.boxes);
      return { ...state };
    default:
      return { ...state };
  }
};

export default countReducer;
