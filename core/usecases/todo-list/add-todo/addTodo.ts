import { AppThunk, Dependencies } from "@/store/reduxStore";
import { Todo } from "@/core/gateways/todoListGateway";
import { addTodoAction } from "./addTodoAction";

export const addTodo =
  (todo: Todo): AppThunk =>
  (dispatch, getState, { todoListGateway }: { todoListGateway: Dependencies["todoListGateway"] }) => {
    const query = todoListGateway.addTodo(getState().todoList.todos, todo);
    dispatch(addTodoAction(query));
  };
