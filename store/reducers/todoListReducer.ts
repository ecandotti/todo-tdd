import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../appState";
import { addTodoAction } from "@/core/usecases/todo-list/add-todo/addTodoAction";
import { checkTodoAction } from "@/core/usecases/todo-list/check-todo/checkTodoAction";
import { filterTodosAction } from "@/core/usecases/todo-list/filter-todo/filterTodoAction";
import { deleteTodoAction } from "@/core/usecases/todo-list/delete-list/deleteTodoAction";

const initialState = {
  todos: [],
};

export const todoListReducer = createReducer<AppState["todoList"]>(initialState, builder => {
  builder.addCase(addTodoAction, (state, action) => {
    state.todos = action.payload;
  });
  builder.addCase(checkTodoAction, (state, action) => {
    state.todos = action.payload;
  });
  builder.addCase(filterTodosAction, (state, action) => {
    state.todos = action.payload;
  });
  builder.addCase(deleteTodoAction, (state, action) => {
    state.todos = action.payload;
  });
});
