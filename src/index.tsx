import * as React from "react";
import * as ReactDOM from "react-dom";

import { ITodo } from "./components/IApp";
import { HooksApp } from "./hooks-app/App";
import { todo } from "./components/App.scss";
import { ClassTodoApp } from "./class-app/App";

const todos: ITodo[] = [
    { text: "Learn about React" },
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
                <td>
                    <HooksApp todos={todos} />
                </td>
                <td>
                    <ClassTodoApp todos={todos} />
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