import {
  useInjectReducer as useReducer,
  useInjectSaga as useSaga,
} from "redux-injectors";

import {
  IInjectReducerParams,
  IInjectSagaParams,
  RootStateKeyType,
} from "./types/injector-typings";

/* Wrap redux-injectors with stricter types */

export function useAppInjectReducer<Key extends RootStateKeyType>(
  params: IInjectReducerParams<Key>
) {
  return useReducer(params);
}

export function useAppInjectSaga(params: IInjectSagaParams) {
  return useSaga(params);
}
