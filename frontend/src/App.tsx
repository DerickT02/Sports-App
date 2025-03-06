//External imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Domestic imports
import './App.css'
import { FullPageBackground, FullPageCenter } from './components/atoms'
// Layout
import NavBar from './components/NavBar'

// Pages
import HomePage from './pages/homepage/Index'
import AboutUs from './pages/AboutUs'
import ShowCase from './pages/athletes/ShowCase'


function App() {
  

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/athletes" element={<ShowCase />} />
      </Routes>
    </Router>
  )
}

export default App