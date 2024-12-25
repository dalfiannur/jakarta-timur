import { configureStore } from "@reduxjs/toolkit";
import { statisticApi } from "./statistic";
import { achievementApi } from "./achievement";

export const makeStore = () =>
  configureStore({
    reducer: {
      [statisticApi.reducerPath]: statisticApi.reducer,
      [achievementApi.reducerPath]: achievementApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        statisticApi.middleware,
        achievementApi.middleware,
      ]),
  });

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
