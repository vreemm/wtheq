import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; //to add link and more page

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
         <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);




