import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from "./reducers";
import searchReducers from "./reducers/searchReducers";

export default configureStore({
  reducer: rootReducers,
  search: searchReducers,
  devTools: import.meta.env.MODE === `${import.meta.env.VITE_DEVTOOLS}`,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
