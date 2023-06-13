import { configureStore } from "@reduxjs/toolkit";
import { createInjectorsEnhancer, forceReducerReload } from "redux-injectors";
import createSagaMiddleware from "redux-saga";

import { createAppReducer } from "./reducers";

export function configureAppStore() {
  const sagaMiddleware = createSagaMiddleware();
  const { run: runSaga } = sagaMiddleware;
  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: createAppReducer(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(middlewares),
    devTools:
      process.env.NODE_ENV !== "production" ||
      process.env.PUBLIC_URL.length > 0,
    enhancers: [
      createInjectorsEnhancer({
        createReducer: createAppReducer,
        runSaga,
      }),
    ],
  });

  // Make reducers hot reloadable, see http://mxs.is/googmo
  //@ts-ignore
  if (module.hot) {
    //@ts-ignore
    module.hot.accept("./reducers", () => {
      forceReducerReload(store);
    });
  }
  return store;
}
