//External imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

//Domestic imports
import './App.css'
import NavBar from './components/layout/NavBar'
import { FullPageBackground, FullPageCenter } from './components/layout/atoms'

// Pages
import HomePage from './pages/homepage'
import AboutUs from './pages/about'
import ShowCase from './pages/athletes/ShowCase'
import ContactUs from './pages/contact'
import Services from './pages/services'
import SignIn from './pages/signin'
import Resources from './pages/resources'
import AdminHome from "./pages/admin"
import ManageAthlete from "./pages/admin/ManageAthlete"
import AthletePortfolio from './pages/athletes/Portfolio'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <FullPageBackground
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Router>
        <NavBar />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/athletes" element={<ShowCase />} />
            <Route path="/athletes/:id" element={<AthletePortfolio />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/admin-home" element={<AdminHome />} />
            <Route path="/admin-Manage_Athlete" element={<ManageAthlete />} />
          </Routes>
        </MainContent>
      </Router>
    </AppContainer>
  )
}

export default App
