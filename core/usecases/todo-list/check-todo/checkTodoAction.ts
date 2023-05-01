import { Todo } from "@/core/gateways/todoListGateway";
import { createAction } from "@reduxjs/toolkit";

export const checkTodoAction = createAction<Todo[]>("CHECK_TODO");
