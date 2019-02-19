import * as React from "react";
import { useState } from "react";
import { ITodo } from "../components/IApp";
import { TodoListRenderer } from "../components/TodoList";
import * as Styles from "../components/App.scss";
import { TodoFormContainer } from "./TodoFormContainer";

interface IHooksAppProps {
  todos: ITodo[];
}

export const HooksTodoApp = (props: IHooksAppProps) => {
  const [todos, setTodos] = useState(props.todos);

  const addTodo = (todoText: string) => {
    const todo: ITodo = {text: todoText};
    const newTodos = [...todos, todo];
    setTodos(newTodos);
 }

  return (
    <div className={Styles.app}>
      <TodoListRenderer todos={todos} />
      <TodoFormContainer addTodo={addTodo}/>
    </div>
  );
}