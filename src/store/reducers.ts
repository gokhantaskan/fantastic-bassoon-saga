/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "@reduxjs/toolkit";

import { globalReducer } from "./globalSlice/globalSlice";
import { InjectedReducersType } from "./types/injector-typings";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createAppReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error

  return combineReducers({
    ...(Object.keys(injectedReducers).length !== 0 && injectedReducers),
    global: globalReducer,
  });
}
