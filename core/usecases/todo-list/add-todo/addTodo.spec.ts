import { AppState } from "@/store/appState";
import { ReduxStore, initReduxStore } from "@/store/reduxStore";
import { Todo } from "@/core/gateways/todoListGateway";
import { addTodo } from "./addTodo";
import { FakeTodoListGateway } from "@/adapters/secondary/todoList/gateways/fakeTodoListGateway";

describe("Todo list", () => {
  let store: ReduxStore;
  let initialState: AppState;
  let todoListGateway: FakeTodoListGateway;

  beforeAll(() => {
    todoListGateway = new FakeTodoListGateway();
    store = initReduxStore({
      todoListGateway,
    });
    initialState = store.getState();
  });

  it("Should have 1 todo add into todo list", () => {
    const todo: Todo = {
      id: "0",
      label: "Finir mes projets",
      completed: false,
    };

    store.dispatch(addTodo(todo));
    expect(store.getState()).toEqual({
      ...initialState,
      todoList: {
        todos: [todo],
      },
    });
  });
});
