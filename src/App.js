import React from 'react'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import Home from './pages/Home'

import './App.css'

export default function App() {
    return (
        <div className='App'>
            <Navigation />
            <Home />
            <Footer />
        </div>
    )
}
