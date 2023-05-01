import { AppThunk, Dependencies } from "@/store/reduxStore";
import { filterTodosAction } from "./filterTodoAction";

export const filterTodos =
  (): AppThunk =>
  (dispatch, getState, { todoListGateway }: { todoListGateway: Dependencies["todoListGateway"] }) => {
    const query = todoListGateway.filterTodos(getState().todoList.todos);
    dispatch(filterTodosAction(query));
  };
