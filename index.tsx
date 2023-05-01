import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "app/App";
import { initReduxStore } from "./store/reduxStore";
import { InMemoryTodoListGateway } from "./adapters/secondary/todoList/gateways/InMemoryTodoListGateway";

const container = document.getElementById("app");
const root = createRoot(container!);
const store = initReduxStore({
  todoListGateway: new InMemoryTodoListGateway(),
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
