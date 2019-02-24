import * as React from "react";
import { ThemeContext } from "../components/ThemeContext";

export function ThemedButton() {
    return (<ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
            <button
                onClick={toggleTheme}
                style={{ backgroundColor: theme.background, color: theme.color }}>
                Toggle Theme
                </button>
        )}
    </ThemeContext.Consumer>
    );
}