import React, { useId, useState } from "react";

import "@/app/ressources/css/styles.css";
import { useAppDispatch, useAppSelector } from "@/store/reduxStore";
import { Todo } from "@/core/gateways/todoListGateway";
import { addTodo } from "@/core/usecases/todo-list/add-todo/addTodo";
import { checkTodo } from "@/core/usecases/todo-list/check-todo/checkTodo";

const App: React.FC = () => {
  const { todos } = useAppSelector(state => state.todoList);
  const dispatch = useAppDispatch();

  const [newTodo, setNewTodo] = useState<Todo>({
    id: "useId()",
    label: "",
    completed: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addTodo(newTodo));

    setNewTodo({
      id: "zead",
      label: "",
      completed: false,
    });
  };

  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-bold text-xl mb-10">Todo list</h1>
      {todos.length > 0 ? (
        todos.map(todo => (
          <div key={todo.id} className="flex gap-4 mb-10">
            <span>{todo.label}</span>
            <input type="checkbox" defaultChecked={todo.completed} onChange={e => dispatch(checkTodo(todo))} />
          </div>
        ))
      ) : (
        <div className="mb-10">Pas de tâches disponible</div>
      )}
      <form className="flex gap-4 items-center" onSubmit={handleSubmit}>
        <input
          className="border rounded-md p-2"
          value={newTodo.label}
          onChange={e => setNewTodo({ ...newTodo, label: e.target.value })}
        />
        <button type="submit" className="border rounded-md p-2 bg-slate-300">
          Ajouter
        </button>
      </form>
    </main>
  );
};

export default App;
