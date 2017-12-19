import React from "react";
import { Films } from "./components/swapi/Films";

export default class App extends React.Component {
    render () {
        return (
            <section>
                <h2>Star Wars API</h2>
                <Films/>
            </section>
        );
    }
}
