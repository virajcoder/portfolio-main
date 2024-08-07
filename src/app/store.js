
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import projectsReducer from "./projectsSlice";
import { apiSlice } from "./apiSlice";


export const store = configureStore({
  reducer: {
    app: appReducer,
    projects: projectsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
