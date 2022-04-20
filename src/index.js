import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'jquery/dist/jquery.min.js';
import "./components/public/js/app";


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
