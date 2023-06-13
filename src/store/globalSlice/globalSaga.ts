import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeLatest } from "redux-saga/effects";

import { BG_COLORS, GlobalActions } from "./globalSlice";

// ? WHY DON'T WE CHANGE THE BACKGROUND COLOR HERE?
export function* setBgColor(action: PayloadAction<BG_COLORS>) {
  // do something
  // we use such functions to do any async work (side effects like API calls etc.) while an action is dispatched. )
}

export function* globalSaga() {
  // here we are saying that for every action of type GlobalActions.changeBgColor, we will call setBgColor function
  // meaning that whenever we dispatch GlobalActions.changeBgColor, setBgColor function will be called
  // we have other options like takeEvery, takeLeading, takeLatest, takeEvery is the default one
  // here is the documentation for all of them: https://redux-saga.js.org/docs/api/#effect-creators
  yield takeLatest(GlobalActions.changeBgColor, setBgColor);
}
