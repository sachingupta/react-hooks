import * as React from "react";

import { ITodo } from "../components/IApp";
import { TodoFormContainer } from "./TodoFormContainer";
import { TodoListRenderer } from "../components/TodoList";
import * as Styles from "../components/App.scss"; 

interface IHooksAppProps {
  todos: ITodo[];
}

export class ClassTodoApp extends React.Component<IHooksAppProps, {}> {
  constructor(props: IHooksAppProps) {
     super(props);
  }

  render() {
    const { todos } = this.props;
    return (
      <div className={Styles.app}>
        <TodoListRenderer todos={todos} />
        <TodoFormContainer />
      </div>
    );
  }
}