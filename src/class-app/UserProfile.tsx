import * as React from "react";
import { ThemeContext2 } from "./ThemeContext";
import { UserContext } from "./UserContext";
import { UserInfo, UserInfo2 } from "./UserInfo";

export function UserProfile() {
    return (
      <ThemeContext2.Consumer>
        {({theme}) => (
          <UserContext.Consumer>
            {user => (
              <UserInfo user={user} theme={theme} />
            )}
          </UserContext.Consumer>
        )}
      </ThemeContext2.Consumer>
    );
  }
  
  export function UserProfile2() {
      return (
       <UserInfo2 />
      );
    }