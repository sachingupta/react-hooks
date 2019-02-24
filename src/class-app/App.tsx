import * as React from "react";

import { ITodo } from "../components/IApp";
import { TodoFormContainer } from "./TodoFormContainer";
import { TodoListRenderer } from "../components/TodoList";
import * as Styles from "../components/App.scss";
import { ThemeContext, themes } from "../components/ThemeContext";
import { Toolbar } from "./ToolBar";

interface IHooksAppProps {
  todos: ITodo[];
}

interface IHooksAppState {
  todos: ITodo[];
  theme: any;
  toggleTheme: () => void;
}

export class ClassTodoApp extends React.Component<IHooksAppProps, IHooksAppState> {
  constructor(props: IHooksAppProps) {
    super(props);
    this.state = {
      todos: this.props.todos,
      theme: themes.light,
      toggleTheme: this.toggleTheme.bind(this)
    }
  }

  private addTodo(todoText: string) {
    const todo: ITodo = { text: todoText };
    const newTodos = [...this.state.todos, todo];
    this.setState({ todos: newTodos });
  }

  private completeTodo(index: number) {
    const newTodos = [...this.state.todos];
    newTodos[index].isCompleted = true;
    this.setState({ todos: newTodos });
  }

  private removeTodo(index: number) {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  }

  private toggleTheme() {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div className={Styles.app}>
        <ThemeContext.Provider value={this.state}>
          <Toolbar />
        </ThemeContext.Provider>
        <TodoListRenderer todos={todos} onComplete={this.completeTodo.bind(this)} onRemove={this.removeTodo.bind(this)} />
        <TodoFormContainer addTodo={this.addTodo.bind(this)} />
      </div>
    );
  }
}