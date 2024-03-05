import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/Header"
import Footer from "./components/Footer"
import State from "./components/State"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <State />
    <Footer />
  </React.StrictMode>,
)
