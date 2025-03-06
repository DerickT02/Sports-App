//External imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Domestic imports
import './App.css'
import NavBar from './components/layout/NavBar'
import { FullPageBackground, FullPageCenter } from './components/layout/atoms'

//Assets
// import BackgroundImage from './assets/background.png'

// Pages
import HomePage from './pages/homepage'
import AboutUs from './pages/about'
import ShowCase from './pages/athletes/ShowCase'
import ContactUs from './pages/contact'
import Services from './pages/services'
import SignIn from './pages/signin'
import Resources from './pages/resources'


function App() {
  return (
    <>
      {/* 1) Full-page background behind everything */}
      <FullPageBackground
        style={{
          // backgroundImage: `url(${BackgroundImage})`, // Replace with your real path
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <Router>
        {/* 2) Your NavBar (fixed or top-aligned as desired) */}
        <NavBar />

        {/* 3) FullPageCenter to center page content vertically (optional) */}
        <FullPageCenter minHeight="100vh" flexDirection="column">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/athletes" element={<ShowCase />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </FullPageCenter>
      </Router>
    </>
  )
}

export default App
