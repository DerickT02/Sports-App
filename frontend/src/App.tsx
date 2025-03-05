import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Layout
import NavBar from './components/NavBar'

// Pages
import HomePage from './pages/homepage/Index'
//import AboutUs from './pages/AboutUs'


function App() {
  

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
