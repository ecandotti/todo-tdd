import { AppState } from "@/store/appState";
import { ReduxStore, initReduxStore } from "@/store/reduxStore";

describe("Todo list", () => {
  let store: ReduxStore;
  let initialState: AppState;

  beforeAll(() => {
    store = initReduxStore({});
    initialState = store.getState();
  });

  it("Should have empty todo list", () => {
    expect(store.getState()).toEqual({
      ...initialState,
      todoList: {
        todos: [],
      },
    });
  });
});
