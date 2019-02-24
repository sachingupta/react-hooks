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
  toggleThemeCount: number;
  todos: ITodo[];
  theme: any;
  toggleTheme: () => void;
}

export class ClassTodoApp extends React.Component<IHooksAppProps, IHooksAppState> {
  constructor(props: IHooksAppProps) {
    super(props);
    this.state = {
      toggleThemeCount: 0,
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

    this.setState(state => ({
      toggleThemeCount: this.state.toggleThemeCount + 1
    }));
  }

  componentDidMount() {
    // manual DOM mutations
    document.title = `You clicked class-app themChange button ${this.state.toggleThemeCount} times`;
  }

  componentDidUpdate(prevProps: IHooksAppProps, prevState: IHooksAppState) {
    /*
       Note how we have to duplicate the code between these two lifecycle methods in class.
       This is because in many cases we want to perform the same side effect regardless of whether the 
       component just mounted, or if it has been updated. Conceptually, 
       we want it to happen after every render — but React class components don’t have a method like this.
       We could extract a separate method but we would still have to call it in two places. 
    */
    if (prevState.toggleThemeCount !== this.state.toggleThemeCount) {
      document.title = `You clicked class-app themChange button ${this.state.toggleThemeCount} times`;
    }
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