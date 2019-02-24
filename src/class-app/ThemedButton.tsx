import * as React from "react";
import { ThemeContext } from "../components/ThemeContext";

export class ThemedButton extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props)
    }
    render() {
        return (<ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button
                    onClick={toggleTheme}
                    style={{ backgroundColor: theme.background,  color: theme.color }}>
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
        );
    }
}