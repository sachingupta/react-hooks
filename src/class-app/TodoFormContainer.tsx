import * as React from "react";

import { TodoForm } from "../components/TodoForm";

export class TodoFormContainer extends React.Component<{}, {}> {
  render() {
    return (
      <TodoForm />
      );
    }
}