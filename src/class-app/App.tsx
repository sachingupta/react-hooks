import * as React from "react";

import { ITodo } from "../components/IApp";
import { TodoFormContainer } from "./TodoFormContainer";
import { TodoListRenderer } from "../components/TodoList";
import * as Styles from "../components/App.scss";
import { themes, ThemeContext, ThemeContext2 } from "./ThemeContext";
import { Toolbar, Toolbar2, Toolbar3 } from "./ToolBar";
import { UserContext } from "./UserContext";
import { UserProfile, UserProfile2 } from "./UserProfile";

interface IHooksAppProps {
  todos: ITodo[];
}

interface IHooksAppState {
  todos: ITodo[];
  theme: any;
  toggleTheme: () => void
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
    const signedInUser = { name: "Sachin" };
    return (
      <div className={Styles.app}>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme.bind(this)} />
        </ThemeContext.Provider>
        <ThemeContext2.Provider value={this.state}>
          <Toolbar2 />
        </ThemeContext2.Provider>
        <ThemeContext2.Provider value={this.state}>
          <Toolbar3 />
        </ThemeContext2.Provider>
        <ThemeContext2.Provider value={this.state}>
          <UserContext.Provider value={signedInUser}>
            <UserProfile />
            <UserProfile2 />
          </UserContext.Provider>
        </ThemeContext2.Provider>

        <TodoListRenderer todos={todos} onComplete={this.completeTodo.bind(this)} onRemove={this.removeTodo.bind(this)} />
        <TodoFormContainer addTodo={this.addTodo.bind(this)} />
      </div>
    );
  }
}