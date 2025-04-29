import styled, { css } from 'styled-components';

import { Box, Horizontal } from '../layout/atoms';

// Changing this constant edits the mobile breakpoint
export const breakingPointPx = 1100;

// Header container: pinned full-width, allow overflow for dropdown
export const HeaderContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  background: var(--color-text);
  color: var(--color-surface);
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: visible;
`;

// Content wrapper inside header
export const HeaderContent = styled(Box)`
  max-width: 1920px;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const LogoSection = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 109.14px;
  height: 110.6px;
  border-radius: 54.57px;
  margin: 5px;
`;


// Divider SVG: thicker, taller, accent color
export const Divider = styled.svg`
  margin: 0 12px;
  width: 2px;
  height: 32px;

  & * {
    fill: var(--color-primary) !important;
    stroke: var(--color-primary) !important;
    stroke-width: 2px !important;
  }
`;

export const LogoText = styled(Box)`
  color: var(--color-surface);
  font-size: 13.43px;
  font-family: 'Bodoni Moda', serif;
  font-weight: 900;
  letter-spacing: 0.67px;

  @media (max-width: ${breakingPointPx}px) {
    display: none;
  }
`;

export const NavLinks = styled(Box)`
  display: flex;
  gap: 27px;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 1.5em;

  @media (max-width: ${breakingPointPx}px) {
    display: none;
  }
`;

export const NavItem = styled(Box)`
  color: var(--color-surface);
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  letter-spacing: 1.25px;
  cursor: pointer;
  white-space: nowrap;

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }

  &:hover {
    color: var(--color-primary);
  }
`;

export const HamburgerButton = styled(Box)`
  display: none;
  font-size: 2rem;
  color: var(--color-surface);
  cursor: pointer;

  @media (max-width: ${breakingPointPx}px) {
    display: block;
  }
`;

// Mobile menu: fixed so it sits outside of header height, full-width
export const MobileMenu = styled(Box)<{ open: boolean }>`
  position: fixed;
  top: 110.6px;
  left: 0;
  right: 0;
  width: 100%;
  background: var(--color-text);
  flex-direction: column;
  padding: 1rem 0;
  z-index: 999;

  display: none;
  ${({ open }) =>
    open &&
    css`
      display: flex;
    `}
`;

export const ThemeIcon = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-surface);
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 1rem;
`;

export const SignInButton = styled(Box)`
  padding: 10px 20px;
  background: var(--color-primary);
  color: var(--color-surface);
  border-radius: 13px;
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SignUpText = styled(Box)`
  color: var(--color-surface);
  font-size: 21px;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  letter-spacing: 1.05px;
`;

export const RightSideUtility = styled(Horizontal)`
  display: flex;
  align-items: center;
`;
