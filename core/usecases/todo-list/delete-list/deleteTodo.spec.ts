import { FakeTodoListGateway } from "@/adapters/secondary/todoList/gateways/fakeTodoListGateway";
import { Todo } from "@/core/gateways/todoListGateway";
import { AppState } from "@/store/appState";
import { ReduxStore, initReduxStore } from "@/store/reduxStore";
import { addTodo } from "../add-todo/addTodo";
import { deleteTodo } from "./deleteTodo";

describe("Delete todo", () => {
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

  const todo1: Todo = {
    id: "0",
    label: "poajz",
    completed: false,
  };

  const todo2: Todo = {
    id: "1",
    label: "poajz",
    completed: true,
  };

  const todo3: Todo = {
    id: "2",
    label: "poajz",
    completed: true,
  };

  it("Should return todoList without todo deleted", () => {
    store.dispatch(addTodo(todo1));
    store.dispatch(addTodo(todo2));
    store.dispatch(addTodo(todo3));

    store.dispatch(deleteTodo(todo3));
    expect(store.getState()).toEqual({
      ...initialState,
      todoList: {
        todos: [todo1, todo2],
      },
    });
  });
});
