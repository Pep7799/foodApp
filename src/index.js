import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './context/StateProvider';
import reducer from './context/reducer';
import {initialState} from './context/initialState' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState = {initialState} reducer = {reducer}>
        <App />
    </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

