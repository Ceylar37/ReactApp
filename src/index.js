
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/redux-store";

let Render = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

Render(store);

store.subscribe(() => {
    let state = store.getState();
    Render(state);
});
