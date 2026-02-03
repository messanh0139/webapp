import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import HomePage from './pages/HomePage'
import DestinationsPage from './pages/DestinationsPage'
import QuizPage from './pages/QuizPage'
import BookingPage from './pages/BookingPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  )
}

export default App
