import React from "react";
import { Films } from "./components/swapi/Films";
import CheckboxWithLabel from "./components/checkbox";

export default class App extends React.Component {
    render () {
        return (
            <section>
                <h2>Star Wars API</h2>
                <Films/>
                <CheckboxWithLabel labelOn="Selected" labelOff="Not Selected"/>
            </section>
        );
    }
}
