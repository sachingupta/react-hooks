import * as React from "react";
import { ThemeContext } from "./ThemeContext";

interface IThemedButtonProps {
  onClick: any;
}

class ThemedButton extends React.Component<IThemedButtonProps, {}> {
    constructor(props: IThemedButtonProps) {
        super(props)
    }
    render() {
        const props = this.props;
        const theme = this.context;
        return (<button {...props} style={{ backgroundColor: theme.background, color: theme.color }}
        />);
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;