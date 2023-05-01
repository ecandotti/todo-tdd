import { createAction } from "@reduxjs/toolkit";
import { Todo } from "@/core/gateways/todoListGateway";

export const addTodoAction = createAction<Todo[]>("ADD_TODO");
