import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from "./routers";
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from "./App"

ReactDOM.render(
    <React.StrictMode>
        <MainRouter>
            <App />
        </MainRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

