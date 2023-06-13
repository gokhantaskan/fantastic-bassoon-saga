import { useAppInjectReducer, useAppInjectSaga } from "../redux-injectors";
import { createAppSlice } from "../toolkit";
import { globalSaga } from "./globalSaga";

export enum BG_COLORS {
  RED,
  GREEN,
  BLUE,
}

export interface IGlobalState {
  bgColor: BG_COLORS;
}

export const initialState: IGlobalState = {
  bgColor: BG_COLORS.RED,
};

console.log(initialState);

export const globalSlice = createAppSlice({
  name: "global",
  initialState,
  reducers: {
    changeBgColor: (state) => {
      const i = state.bgColor + 1;
      const j = Object.keys(BG_COLORS).length / 2;

      // it should increase the i variable, and the color should change to the next one
      state.bgColor = i % j;
    },
  },
});

export const {
  actions: GlobalActions,
  reducer: globalReducer,
  name: sliceKey,
} = globalSlice;

export const useGlobalSlice = () => {
  useAppInjectReducer({ key: sliceKey, reducer: globalReducer });
  useAppInjectSaga({ key: sliceKey, saga: globalSaga });
  return { GlobalActions };
};
