import * as React from "react";
import { ThemeContext2 } from "./ThemeContext";


export class ThemedButton2 extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props)
    }
    render() {
        return (<ThemeContext2.Consumer>
            {({ theme, toggleTheme }) => (
                <button
                    onClick={toggleTheme}
                    style={{ backgroundColor: theme.background,  color: theme.color }}>
                    Toggle Theme 2
          </button>
            )}
        </ThemeContext2.Consumer>
        );
    }
}

export function ThemedButton3() {
    return (<ThemeContext2.Consumer>
        {({ theme, toggleTheme }) => (
            <button
                onClick={toggleTheme}
                style={{ backgroundColor: theme.background,  color: theme.color }}>
                Toggle Theme 3
      </button>
        )}
    </ThemeContext2.Consumer>
    );
}