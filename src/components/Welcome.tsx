import * as React from "react";

import * as Styles from "./App.css"; 
import * as scssStyles from "./App.scss"; 

export interface WelcomeProps { name: string; }

export const Welcome = (props: WelcomeProps) => (<div>
    <h1 className={Styles.app}>Welcome css {props.name}!</h1>
    <h1 className={scssStyles.app}>Welcome scss {props.name}!</h1>
    </div>);