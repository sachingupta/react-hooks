import * as React from "react";
import { useState } from "react";
import { ITodo } from "../components/IApp";
import { TodoListRenderer } from "../components/TodoList";
import * as Styles from "../components/App.scss";
import { TodoFormContainer } from "./TodoFormContainer";
import { ThemeContext, themes } from "../components/ThemeContext";
import { Toolbar } from "./ToolBar";

interface IHooksAppProps {
  todos: ITodo[];
}

export const HooksTodoApp = (props: IHooksAppProps) => {
  const [todos, setTodos] = useState(props.todos);
  const [theme, setTheme] = useState(themes.light);

  const addTodo = (todoText: string) => {
    const todo: ITodo = { text: todoText };
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const toggleTheme = () => {
    const newTheme = (theme === themes.dark ? themes.light : themes.dark);
    setTheme(newTheme);
  }

  return (
    <div className={Styles.app}>
      <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
        <Toolbar />
      </ThemeContext.Provider>
      <TodoListRenderer todos={todos} onComplete={completeTodo} onRemove={removeTodo} />
      <TodoFormContainer addTodo={addTodo} />
    </div>
  );
}