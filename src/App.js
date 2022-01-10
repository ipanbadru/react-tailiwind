import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Router from './route'

export default function App() {
  return (
    <BrowserRouter>
      <Router />
      <Footer />
    </BrowserRouter>
  )
}
