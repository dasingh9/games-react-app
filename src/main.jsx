import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Circle} from "./Circle"
import { ErrorBoundary } from 'react-error-boundary'
import ErrorMessage from "./ErrorMessage"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <App></App>
    </ErrorBoundary>
  </React.StrictMode>,
)
