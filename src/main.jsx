import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initFlowbite } from 'flowbite'
// initialize components based on data attribute selectors
initFlowbite();

ReactDOM.createRoot(
    document.getElementById('root'))
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    )
