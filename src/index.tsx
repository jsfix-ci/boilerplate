import * as React from "react";
import * as ReactDOM from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime"

import App from './app';

window.onload = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('application')
    );
};
