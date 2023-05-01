import { Todo } from "@/core/gateways/todoListGateway";
import { AppThunk, Dependencies } from "@/store/reduxStore";
import { deleteTodoAction } from "./deleteTodoAction";

export const deleteTodo =
  (todo: Todo): AppThunk =>
  (dispatch, getState, { todoListGateway }: { todoListGateway: Dependencies["todoListGateway"] }) => {
    const query = todoListGateway.deleteTodo(getState().todoList.todos, todo);
    dispatch(deleteTodoAction(query));
  };
