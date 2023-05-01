import { Todo } from "@/core/gateways/todoListGateway";

export interface AppState {
  todoList: {
    todos: Todo[];
  };
}
