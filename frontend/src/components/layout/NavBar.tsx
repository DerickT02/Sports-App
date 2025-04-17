// src/components/layout/NavBar.tsx
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'
import {
  HeaderContainer,
  HeaderContent,
  LogoSection,
  LogoImage,
  Divider,
  LogoText,
  NavLinks,
  NavItem,
  HamburgerButton,
  MobileMenu,
  ThemeIcon,
  SignInButton,
  SignUpText,
  RightSideUtility,
} from './NavBar.styles'

import { useTheme } from '../../context/ThemeContext';
import Logo from '../../assets/ClientLogo.png';

const navItems = [
  { label: 'About Us', route: '/about-us' },
  { label: 'Athletes', route: '/athletes' },
  { label: 'Services', route: '/services' },
  { label: 'Resources', route: '/resources' },
  { label: 'Contact Us', route: '/contact-us' },
  { label: 'Admin', route: '/admin-home', style: { color: 'red' } },
]

const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isActive = (route: string) => location.pathname === route

  const {isDark, toggleTheme } = useTheme();

  return (
  <HeaderContainer>
       <HeaderContent>
       <LogoSection>
  <LogoImage src={Logo} alt="Logo" />
  <Divider />
  <LogoText>Players Club Management</LogoText>
</LogoSection>
          
          {/* Desktop Links */}
          <NavLinks>
            {navItems.map((item, idx) => (
              <NavItem
                key={idx}
                onClick={() => { navigate(item.route); setMenuOpen(false) }}
                className={isActive(item.route) ? 'active' : ''}
                style={item.style}
              >
                {item.label}
              </NavItem>
            ))}
          </NavLinks>

          {/* Hamburger for Mobile */}
          <HamburgerButton onClick={() => setMenuOpen(o => !o)}>☰</HamburgerButton>

        <RightSideUtility>
          {/* Theme Toggle Icon */}
          <ThemeIcon onClick={toggleTheme}>
            {isDark ? <FaSun /> : <FaMoon />}
          </ThemeIcon>

          {/* Sign In */}
          <SignInButton onClick={() => { navigate('/sign-in'); setMenuOpen(false) }}>
            <SignUpText>Sign In</SignUpText>
          </SignInButton>
        </RightSideUtility>
      </HeaderContent>

      {/* Mobile Menu */}
      <MobileMenu open={menuOpen}>
        {navItems.map((item, idx) => (
          <NavItem
            key={idx}
            onClick={() => { navigate(item.route); setMenuOpen(false) }}
            className={isActive(item.route) ? 'active' : ''}
            style={item.style}
          >
            {item.label}
          </NavItem>
        ))}
      </MobileMenu>
   </HeaderContainer>
  )
}

export default NavBar
