import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
let renderTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
            <App state={state} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default renderTree;