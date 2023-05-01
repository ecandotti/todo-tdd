import { Todo, TodoListGateway } from "@/core/gateways/todoListGateway";

export class InMemoryTodoListGateway implements TodoListGateway {
  addTodo(todos: Todo[], todo: Todo): Todo[] {
    return [...todos, todo];
  }

  checkTodo(todos: Todo[], todo: Todo): Todo[] {
    const newTodoList = todos.filter(el => el.id !== todo.id);

    return [...newTodoList, { ...todo, completed: !todo.completed }];
  }

  filterTodos(todos: Todo[]): Todo[] {
    const newTodoList = [...todos].sort((a, b) => Number(b.completed) - Number(a.completed));
    return newTodoList;
  }

  deleteTodo(todos: Todo[], todo: Todo): Todo[] {
    const newTodoList = todos.filter(el => el.id !== todo.id);
    return newTodoList;
  }
}
