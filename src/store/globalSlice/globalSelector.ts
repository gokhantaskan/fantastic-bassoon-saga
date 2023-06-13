import { RootState } from "../types";
import { globalSlice } from "./globalSlice";

export const selectGlobalStateDomain = (state: RootState) =>
  state.global ?? globalSlice.getInitialState();
export const selectSelectedBgColor = (state: RootState) =>
  selectGlobalStateDomain(state).bgColor;
