import { Todo } from "@/core/gateways/todoListGateway";
import { createAction } from "@reduxjs/toolkit";

export const filterTodosAction = createAction<Todo[]>("FILTER_TODOS");
