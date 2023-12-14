import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/assets/scss/App.scss';
import {BrowserRouter} from "react-router-dom";
import ModalAContextProvider from './context/ModalAContextProvider';
import ModalBContextProvider from './context/ModalBContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalAContextProvider>
      <ModalBContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </ModalBContextProvider>
    </ModalAContextProvider>
  </React.StrictMode>
)
