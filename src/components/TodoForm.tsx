import * as React from "react";

import * as Styles from "./App.scss"; 

export function TodoForm(){
    return (
        <form>
          <input className={Styles.todoInput}
            type="text"
          />
        </form>
      );
}