import { configureStore } from "@reduxjs/toolkit";
import { statisticApi } from "./statistic";
import { achievementApi } from "./achievement";
import { bulletinApi } from "./bulletin";
import { areaApi } from "./area";
import { ukpdApi } from "./ukpd";
import { jakWifiApi } from "./jakwifi";

export const makeStore = () =>
  configureStore({
    reducer: {
      [statisticApi.reducerPath]: statisticApi.reducer,
      [achievementApi.reducerPath]: achievementApi.reducer,
      [bulletinApi.reducerPath]: bulletinApi.reducer,
      [areaApi.reducerPath]: areaApi.reducer,
      [ukpdApi.reducerPath]: ukpdApi.reducer,
      [jakWifiApi.reducerPath]: jakWifiApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        statisticApi.middleware,
        achievementApi.middleware,
        bulletinApi.middleware,
        areaApi.middleware,
        ukpdApi.middleware,
        jakWifiApi.middleware,
      ]),
  });

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
