import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom'
import CrudProvider from './Context/CrudProvider.js'

ReactDOM.render(
    <BrowserRouter>
        <CrudProvider>
            <App />
        </CrudProvider>
    </BrowserRouter>,
    document.getElementById('root'));

