import { Action, AnyAction, configureStore, Store, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppState } from "./appState";
import { todoListReducer as todoList } from "./reducers/todoListReducer";
import { TodoListGateway } from "@/core/gateways/todoListGateway";

export type Dependencies = {
  todoListGateway: TodoListGateway;
};

export const initReduxStore = (dependencies: Partial<Dependencies>, activeRTKListeners = false) => {
  return configureStore({
    reducer: {
      todoList,
    },
    devTools: true,
    middleware: getDefaultMiddleware => {
      const middleware = getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
        serializableCheck: false,
      });
      if (activeRTKListeners) return middleware;
      return middleware;
    },
  });
};

export const store = initReduxStore({});

export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, any, Action>;
};

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, any, AnyAction>;

export type AppDispatch = ThunkDispatch<AppState, any, Action>;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
