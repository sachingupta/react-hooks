import * as React from "react";
import ThemedButton from "./ThemedButton";
import { ThemedButton2, ThemedButton3 } from "./ThemedButton2";

// An intermediate component that uses the ThemedButton
export function Toolbar(props: any) {
    return (
      <ThemedButton onClick={props.changeTheme}>
        Change Theme
      </ThemedButton>
    );
  }

  // An intermediate component that uses the ThemedButton
export function Toolbar2(props: any) {
    return (
      <ThemedButton2 />
    );
  }

    // An intermediate component that uses the ThemedButton
export function Toolbar3(props: any) {
    return (
      <ThemedButton3 />
    );
  }