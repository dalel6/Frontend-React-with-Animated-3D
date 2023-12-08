import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './src/component/index.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <main className="app transition-all ease-in">
      < Navbar />
      
    </main>
  

export default App
  </React.StrictMode>,
)
