import React from "react";
import ReactDOM from "react-dom";

console.log("Application initialized.");

class App extends React.Component {
    render() {
        return (<div>
            <h1>Welcome to Harp.foobar</h1>
            <h3>This is yours to own. Enjoy.</h3>
        </div>);
    }
}

ReactDOM.render(<App />,
    document.getElementById("app"));
