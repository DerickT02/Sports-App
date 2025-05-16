import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { Box, Horizontal, Vertical } from '../layout/atoms';
/* ------------------------------------------------------------------ */
/*  ❶ Full-width wrapper – no hacks, just stretch                      */
/* ------------------------------------------------------------------ */
const FooterWrapper = styled(Box).attrs({ as: 'footer' }) `
  width: 100%;
  background: #000;
  border-top: 1px solid var(--color-border);
  padding: 3rem 2rem 1rem;
  align-self: stretch;     /* tells flex-parent to let it fill width */
  background-color: var(--color-surface);
`;
/* Content area (3 columns) */
const FooterContent = styled(Horizontal) `
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
/* One “column” */
const Section = styled(Vertical) `
  flex: 1;
  min-width: 250px;

  h4 {
    color: var(--color-text);
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-family: 'Lato', sans-serif;
  }

  p,
  a {
    color: var(--color-text);;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--color-primary);
  }
`;
/* Social links row */
const SocialLinks = styled(Horizontal) `
  gap: 1rem;
  justify-content: center;   /* centred under heading */

  a {
    color: var(--color-text);
    font-size: 0.9rem;
    text-decoration: none;
    transition: color 0.3s ease;
    padding: 0.5rem 0;
  }

  a:hover {
    color: var(--color-primary);
  }
`;
/* Bottom copyright strip */
const FooterBottom = styled(Box) `
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);

  p {
    color: var(--color-text);;
    font-size: 0.8rem;
  }
`;
const Footer = () => (_jsxs(FooterWrapper, { children: [_jsxs(FooterContent, { children: [_jsxs(Section, { children: [_jsx("h4", { children: "Contact\u00A0Us" }), _jsx("p", { children: "Email: info@sportsapp.com" }), _jsx("p", { children: "Phone: (555) 123-4567" })] }), _jsxs(Section, { children: [_jsx("h4", { children: "Follow\u00A0Us" }), _jsxs(SocialLinks, { children: [_jsx("a", { href: "#", children: "Twitter" }), _jsx("a", { href: "#", children: "Instagram" }), _jsx("a", { href: "#", children: "LinkedIn" })] })] }), _jsxs(Section, { children: [_jsx("h4", { children: "Quick\u00A0Links" }), _jsx("a", { href: "/about-us", children: "About\u00A0Us" }), _jsx("a", { href: "/terms-of-service", children: "Terms\u00A0of\u00A0Service" }), _jsx("a", { href: "/privacy-policy", children: "Privacy\u00A0Policy" })] })] }), _jsx(FooterBottom, { children: _jsx("p", { children: "\u00A9 2024 Sports App. All rights reserved." }) })] }));
export default Footer;
