import * as React from "react";
import { ITodo } from "./IApp";
import * as Styles from "./App.scss"; 

interface ITodoProps {
    todo: ITodo;
}

export const Todo = (props: ITodoProps) => {
    const { todo } = props;
    return  (
        <div
          className={Styles.todo}
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          >
          {todo.text}
    
          <div>
            <button>Complete</button>
            <button>x</button>
          </div>
        </div>
      );
}