import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// src/components/layout/NavBar.tsx
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { HeaderContainer, HeaderContent, LogoSection, LogoImage, Divider, LogoText, NavLinks, NavItem, HamburgerButton, MobileMenu, ThemeIcon, SignInButton, SignUpText, RightSideUtility, } from './NavBar.styles';
import { useTheme } from '../../context/ThemeContext';
import Logo from '../../assets/ClientLogo.png';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
const navItems = [
    { label: 'About Us', route: '/about-us' },
    { label: 'Athletes', route: '/athletes' },
    { label: 'Services', route: '/services' },
    { label: 'Resources', route: '/resources' },
    { label: 'Contact Us', route: '/contact-us' },
    //{ label: 'Terms Of Service', route: './terms-of-service' },
    //{ label: 'Privacy Policy', route: './privacy-policy' },
    //{ label: 'Admin', route: '/admin-home', style: { color: 'red' } },
];
const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isActive = (route) => location.pathname === route;
    const auth = getAuth();
    const { isDark, toggleTheme } = useTheme();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLoggedIn(true);
        }
        else {
            setIsLoggedIn(false);
        }
    });
    return (_jsxs(HeaderContainer, { children: [_jsxs(HeaderContent, { children: [_jsxs(LogoSection, { onClick: () => { navigate('/'); setMenuOpen(false); }, children: [_jsx(LogoImage, { src: Logo, alt: "Logo" }), _jsx(Divider, {}), _jsx(LogoText, { children: "Players Club Management" })] }), _jsx(NavLinks, { children: navItems.map((item, idx) => (_jsx(NavItem, { onClick: () => { navigate(item.route); setMenuOpen(false); }, className: isActive(item.route) ? 'active' : '', style: item.style, children: item.label }, idx))) }), _jsx(HamburgerButton, { onClick: () => setMenuOpen(o => !o), children: "\u2630" }), _jsxs(RightSideUtility, { children: [_jsx(ThemeIcon, { onClick: toggleTheme, children: isDark ? _jsx(FaSun, {}) : _jsx(FaMoon, {}) }), isLoggedIn ?
                                _jsx(_Fragment, { children: _jsx(SignInButton, { onClick: () => { navigate('/admin-home'); setMenuOpen(false); }, children: _jsx(SignUpText, { children: "Admin" }) }) }) :
                                _jsx(_Fragment, { children: _jsx(SignInButton, { onClick: () => { navigate('/sign-in'); setMenuOpen(false); }, children: _jsx(SignUpText, { children: "Sign In" }) }) })] })] }), _jsx(MobileMenu, { open: menuOpen, children: navItems.map((item, idx) => (_jsx(NavItem, { onClick: () => { navigate(item.route); setMenuOpen(false); }, className: isActive(item.route) ? 'active' : '', style: item.style, children: item.label }, idx))) })] }));
};
export default NavBar;
