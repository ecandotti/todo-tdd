import { Todo } from "@/core/gateways/todoListGateway";
import { createAction } from "@reduxjs/toolkit";

export const deleteTodoAction = createAction<Todo[]>("DELETE_TODO");
