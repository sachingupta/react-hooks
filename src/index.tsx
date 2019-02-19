import * as React from "react";
import * as ReactDOM from "react-dom";

import { ITodo } from "./components/IApp";
import { HooksTodoApp } from "./hooks-app/App";
import * as Styles from "./components/App.scss";
import { ClassTodoApp } from "./class-app/App";

const todos: ITodo[] = [
    { text: "Learn1204 about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
]

interface ITodoAppProps {
    todos: ITodo[];
}

const TodoApp = (props: ITodoAppProps) => {
    const { todos } = props;
    return (
        <div> <table>
            <tr>
                <th>ToDo App Using Class </th>
                <th>ToDo App Using Hooks </th>
            </tr>
            <tr>
                <td className={Styles.tableCell}>
                    <ClassTodoApp todos={todos} />
                </td>
                <td className={Styles.tableCell}>
                    <HooksTodoApp todos={todos} />
                </td>

            </tr>
        </table>
        </div>
    );
}

ReactDOM.render(
    <TodoApp todos={todos} />,
    document.getElementById("root")
);