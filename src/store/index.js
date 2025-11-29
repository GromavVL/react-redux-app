const initialState = {
  count: 0,
  step: 1,
};

function counterReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case "INCREMENT": {
      const { step, count } = state;
      return { ...state, count: count + step };
    }
    case "DECREMENT": {
      const { step, count } = state;
      return { ...state, count: count - step };
    }
    case "SET_STEP": {
      return { ...state, step: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default counterReducer;