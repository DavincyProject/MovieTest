import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

export default configureStore({
  reducer: rootReducers,
  // devTools: import.meta.env.MODE === `${import.meta.env.VITE_DEVTOOLS}`,
  devTools: import.meta.env.VITE_MODE !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
