import * as React from "react";

import { TodoForm } from "../components/TodoForm";

interface ITodoFormContainerProps {
  addTodo: (text: string) => {};
}

interface ITodoFormContainerState {
  value: string;
}
export class TodoFormContainer extends React.Component<ITodoFormContainerProps, ITodoFormContainerState> {
  constructor(props: ITodoFormContainerProps) {
    super(props);
    this.state = {
      value: ''
    }
  }

  private onChange(e: any): void {
    this.setState({
      value: e.target.value
    });
  }

  private handleSubmit(e: Event) {
    e.preventDefault();
    if (this.state.value) {
      this.props.addTodo(this.state.value);
      this.setState({
        value: ''
      });
    }
  }

  render() {
    return (
      <TodoForm value={this.state.value} onSubmit={this.handleSubmit.bind(this)} onChange={this.onChange.bind(this)} />
    );
  }
}