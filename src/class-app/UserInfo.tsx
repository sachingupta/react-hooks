import * as React from "react";
import { ThemeContext2 } from "./ThemeContext";
import { UserContext } from "./UserContext";

export function UserInfo(props: any) {
    return (<div style={{ backgroundColor: props.theme.background,  color: props.theme.color }}> {props.user.name} </div>
    );
}

export function UserInfo2() {
    return (
        <ThemeContext2.Consumer>
          {({theme}) => (
            <UserContext.Consumer>
              {user => (
                <div style={{ backgroundColor: theme.background,  color: theme.color }}> {user.name} </div>
              )}
            </UserContext.Consumer>
          )}
        </ThemeContext2.Consumer>
      );
}