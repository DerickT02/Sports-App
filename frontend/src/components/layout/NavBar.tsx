import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Box } from '../layout/atoms'
import logo from '../../assets/ClientLogo.png'

// Styled components based on Box from

export const HeaderContainer = styled(Box)`
  width: 100%;
  height: 110.6px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const HeaderContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  padding: 0 20px;
`;

export const LogoSection = styled(Box)`
  width: 231.16px;
  height: 110.6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 109.14px;
  height: 110.6px;
  border-radius: 54.57px;
`;

export const Divider = styled.svg`
  margin: 0 10px;
`;

export const LogoText = styled(Box)`
  color: white;
  font-size: 13.43px;
  font-family: 'Bodoni Moda', serif;
  font-weight: 900;
  letter-spacing: 0.67px;
`;

export const NavLinks = styled(Box)`
  flex: 1;
  width: 355px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 27px;
`;

export const NavItem = styled(Box)`
  color: white;
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  letter-spacing: 1.25px;
  cursor: pointer;
  white-space: nowrap;

  &.active {
    font-weight: bold;
  }
`;

export const SignInButton = styled(Box)`
  width: 170px;
  height: 52px;
  background: #c55a2b;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const SignUpText = styled(Box)`
  color: white;
  font-size: 21px;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  letter-spacing: 1.05px;
`;

const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Array of navigation items (Sign In is handled separately)
  const navItems = [
    { label: 'About Us', route: '/about-us' },
    { label: 'Athletes', route: '/athletes' },
    { label: 'Services', route: '/services' },
    { label: 'Resources', route: '/resources' },
    { label: 'Contact Us', route: '/contact-us' },
    { label: 'Admin Home Page', route: '/admin-home', style: { color: 'red' } },
  ]

  const isActive = (route: string) => location.pathname === route

  return (
    <HeaderContainer>
      <HeaderContent>
        {/* Logo Section */}
        <LogoSection onClick={() => navigate('/')} >
          <LogoImage src={logo} alt="Logo" />
          <Divider
            className="divider"
            width="2"
            height="62"
            viewBox="0 0 2 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.946899 0.787964V61.5172" stroke="white" strokeWidth="1.67915" />
          </Divider>
          <LogoText>
            PLAYERS<br />CLUB<br />MANAGMENT
          </LogoText>
        </LogoSection>

        {/* Navigation Links */}
        <NavLinks>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              onClick={() => navigate(item.route)}
              className={isActive(item.route) ? 'active' : ''}
              style={{ cursor: 'pointer', ...item.style }}
            >
              {item.label}
            </NavItem>
          ))}
        </NavLinks>

        {/* Sign In Button */}
        <SignInButton onClick={() => navigate('/sign-in')}>
          <SignUpText>Sign In</SignUpText>
        </SignInButton>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default NavBar;
