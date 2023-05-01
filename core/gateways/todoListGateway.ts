export interface TodoListGateway {
  addTodo(todos: Todo[], todo: Todo): Todo[];
  checkTodo(todos: Todo[], todo: Todo): Todo[];
  filterTodos(todos: Todo[]): Todo[];
  deleteTodo(todos: Todo[], todo: Todo): Todo[];
}

export type Todo = {
  id: string;
  label: string;
  completed: boolean;
};
