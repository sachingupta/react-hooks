import * as React from "react";

import * as Styles from "./App.scss"; 

interface ITodoFormProps {
  value: string;
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
}

export function TodoForm(props: ITodoFormProps){
    return (
        <form onSubmit={props.onSubmit}>
          <input className={Styles.todoInput}
            type="text"
            value={props.value}
            onChange={props.onChange}
          />
        </form>
      );
}