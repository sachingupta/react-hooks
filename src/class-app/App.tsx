import * as React from "react";

import { ITodo } from "../components/IApp";
import { TodoFormContainer } from "./TodoFormContainer";
import { TodoListRenderer } from "../components/TodoList";
import * as Styles from "../components/App.scss"; 

interface IHooksAppProps {
  todos: ITodo[];
}

interface IHooksAppState {
  todos: ITodo[];
}

export class ClassTodoApp extends React.Component<IHooksAppProps, IHooksAppState> {
  constructor(props: IHooksAppProps) {
     super(props);
     this.state = {
      todos: this.props.todos
    }
  }

  private addTodo(todoText: string) {
     const todo: ITodo = {text: todoText};
     const newTodos = [...this.state.todos, todo];
     this.setState({todos: newTodos});
  }

  render() {
    const { todos } = this.state;
    return (
      <div className={Styles.app}>
        <TodoListRenderer todos={todos} />
        <TodoFormContainer addTodo={this.addTodo.bind(this)} />
      </div>
    );
  }
}