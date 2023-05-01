import { Todo } from "@/core/gateways/todoListGateway";
import { addTodo } from "../add-todo/addTodo";
import { ReduxStore, initReduxStore } from "@/store/reduxStore";
import { AppState } from "@/store/appState";
import { checkTodo } from "./checkTodo";
import { FakeTodoListGateway } from "@/adapters/secondary/todoList/gateways/fakeTodoListGateway";

describe("Check todo", () => {
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

  it("Should have todo checked", () => {
    const todo: Todo = {
      completed: false,
      id: "0",
      label: "Faire mes projets",
    };

    store.dispatch(addTodo(todo));
    expect(store.getState()).toEqual({
      ...initialState,
      todoList: {
        todos: [todo],
      },
    });

    store.dispatch(checkTodo(todo));
    expect(store.getState()).toEqual({
      ...initialState,
      todoList: {
        todos: [
          {
            ...todo,
            completed: true,
          },
        ],
      },
    });
  });
});
