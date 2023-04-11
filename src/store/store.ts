import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { heroApi } from "@services/hero/HeroApi";

export const store = configureStore({
  reducer: {
    [heroApi.reducerPath]: heroApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heroApi.middleware),
});

setupListeners(store.dispatch);
