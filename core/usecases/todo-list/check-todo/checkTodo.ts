import { Todo } from "@/core/gateways/todoListGateway";
import { AppThunk, Dependencies } from "@/store/reduxStore";
import { checkTodoAction } from "./checkTodoAction";

export const checkTodo =
  (todo: Todo): AppThunk =>
  (dispatch, getState, { todoListGateway }: { todoListGateway: Dependencies["todoListGateway"] }) => {
    const query = todoListGateway.checkTodo(getState().todoList.todos, todo);
    dispatch(checkTodoAction(query));
  };
