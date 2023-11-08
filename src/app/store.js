// import cartSlice from "@/Redux-Thunk/reducers/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { CategoryApi } from "../features/category/category";

const store = configureStore({
  reducer: {
    [CategoryApi.reducerPath]: CategoryApi.reducer,
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CategoryApi.middleware),
});

export default store;
