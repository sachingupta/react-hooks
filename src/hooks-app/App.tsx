import * as React from "react";
import { ITodo } from "../components/IApp";
import { TodoListRenderer } from "../components/TodoList";
import * as Styles from "../components/App.scss";
import { TodoFormContainer } from "./TodoFormContainer";

interface IHooksAppProps {
  todos: ITodo[];
}

export const HooksApp = (props: IHooksAppProps) => {
  const { todos } = props;
  return (
    <div className={Styles.app}>
      <TodoListRenderer todos={todos} />
      <TodoFormContainer />
    </div>
  );
}