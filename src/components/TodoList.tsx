import * as React from "react";
import { ITodo } from "./IApp";

import { Todo } from "./Todo";

interface ITodoListRendererProps {
    todos: ITodo[];
}
  
export const TodoListRenderer = (props: ITodoListRendererProps) => {
    const { todos } = props;
    const todosRender: any[] = [];
    for(let index = 0; index < todos.length; index++)
    {
      todosRender.push(<Todo
        key={index}
        todo={todos[index]}
      />);
    }
    return (
      <div className="todo-list">
        {todosRender}
      </div>
    );
}