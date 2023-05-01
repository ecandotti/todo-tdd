import { FakeTodoListGateway } from "@/adapters/secondary/todoList/gateways/fakeTodoListGateway";
import { Todo } from "@/core/gateways/todoListGateway";
import { AppState } from "@/store/appState";
import { ReduxStore, initReduxStore } from "@/store/reduxStore";
import { addTodo } from "../add-todo/addTodo";
import { filterTodos } from "./filterTodos";

describe("Filter todo", () => {
  let store: ReduxStore;
  let initialState: AppState;
  let todoListGateway: FakeTodoListGateway;

  const todo1: Todo = {
    id: "0",
    label: "poajz",
    completed: false,
  };

  const todo11: Todo = {
    id: "1",
    label: "poajz",
    completed: true,
  };

  const todo2: Todo = {
    id: "2",
    label: "poajz",
    completed: true,
  };

  const todo22: Todo = {
    id: "3",
    label: "poajz",
    completed: false,
  };

  beforeAll(() => {
    todoListGateway = new FakeTodoListGateway();
    store = initReduxStore({
      todoListGateway,
    });
    initialState = store.getState();
  });

  it("Should return filtered todoList", () => {
    store.dispatch(addTodo(todo1));
    store.dispatch(addTodo(todo11));
    store.dispatch(addTodo(todo2));
    store.dispatch(addTodo(todo22));

    store.dispatch(filterTodos());
    expect(store.getState()).toEqual({
      ...initialState,
      todoList: {
        todos: [todo11, todo2, todo1, todo22],
      },
    });
  });
});
