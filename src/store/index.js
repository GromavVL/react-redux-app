import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import themeReducer from "./slice/themeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export default store;