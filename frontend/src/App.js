import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Authentication
//External imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
//Domestic imports
import './App.css';
import NavBar from './components/layout/NavBar';
import { FullPageBackground } from './components/layout/atoms';
import Footer from './components/layout/Footer';
// Pages
import HomePage from './pages/homepage/Index';
import AboutUs from './pages/about';
import ShowCase from './pages/athletes/ShowCase';
import ContactUs from './pages/contact';
import Services from './pages/services';
import SignIn from './pages/signin';
import Resources from './pages/resources';
import TermsOfService from './pages/termsofservice';
import PrivacyPolicy from './pages/privacypolicy';
import AdminHome from "./pages/admin/Index";
import ManageAthlete from "./pages/admin/ManageAthlete";
import AthletePortfolio from './pages/athletes/Portfolio';
const AppContainer = styled.div `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
const MainContent = styled.main `
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
`;
function App() {
    return (_jsxs(AppContainer, { children: [_jsx(FullPageBackground, { style: {
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                } }), _jsxs(Router, { children: [_jsx(NavBar, {}), _jsx(MainContent, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/about-us", element: _jsx(AboutUs, {}) }), _jsx(Route, { path: "/athletes", element: _jsx(ShowCase, {}) }), _jsx(Route, { path: "/athletes/:id", element: _jsx(AthletePortfolio, {}) }), _jsx(Route, { path: "/contact-us", element: _jsx(ContactUs, {}) }), _jsx(Route, { path: "/services", element: _jsx(Services, {}) }), _jsx(Route, { path: "/resources", element: _jsx(Resources, {}) }), _jsx(Route, { path: "/terms-of-service", element: _jsx(TermsOfService, {}) }), _jsx(Route, { path: "/privacy-policy", element: _jsx(PrivacyPolicy, {}) }), _jsx(Route, { path: "/sign-in", element: _jsx(SignIn, {}) }), _jsx(Route, { path: "/admin-home", element: _jsx(AdminHome, {}) }), _jsx(Route, { path: "/admin-Manage_Athlete", element: _jsx(ManageAthlete, {}) })] }) }), _jsx(Footer, {})] })] }));
}
export default App;
