import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
/* ---------- Styled Components ---------- */
const Page = styled.div `
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--color-text);
  font-family: 'Lato', sans-serif;
`;
const Title = styled.h1 `
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  padding-top: 80px;
  color: var(--color-heading);
`;
const Intro = styled.p `
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;
const Item = styled.div `
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
`;
const ItemTitle = styled.h2 `
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
  text-align: center;
`;
const Subheading = styled.h3 `
  font-size: 1.25rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
`;
const ItemText = styled.p `
  font-size: 1rem;
  line-height: 1.6;
`;
const CTA = styled.div `
  text-align: center;
  margin-top: 3rem;
`;
const CTAHeading = styled.h2 `
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
`;
const CTAText = styled.p `
  font-size: 1rem;
  margin-bottom: 1rem;
`;
const Space = styled.span `
  margin-right: 24px; /* adds space after each word */
`;
const CTAButton = styled.button `
  background-color: var(--color-primary);
  color: var(--color-surface);
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b55d2a;
  }
`;
/* ---------- Main Component ---------- */
function TermsOfService() {
    const navigate = useNavigate();
    return (_jsx(_Fragment, { children: _jsxs(Page, { children: [_jsx(Title, { children: "Players Club Management Terms of Service (TOS)" }), _jsxs(Intro, { children: [_jsx(Subheading, { children: _jsx("strong", { children: "Terms of Service" }) }), _jsx("strong", { children: "Effective Date:" }), " 04/29/2025 Welcome to Players Club Management (\u201Cwe,\u201D \u201Cour,\u201D or \u201Cus\u201D). These Terms of Service (\u201CTerms\u201D) govern your access to and use of our website (the \u201CSite\u201D), services, and products. By visiting or using our Site, you agree to be bound by these Terms.", _jsx("br", {}), "Please read them carefully. If you do not agree to these Terms, please do not use our services or Site.", _jsx("br", {})] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "1. Eligibility" }), _jsx(ItemText, { children: "To use our Site or services, you must be at least 13 years old (or the minimum age of digital consent in your jurisdiction). By using the Site, you represent that you meet these requirements and that any information you provide is accurate and complete." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "2. Services We Provide" }), _jsxs(ItemText, { children: ["Players Club Management offers services and content related to Name, Image, and Likeness (NIL), including but not limited to:", _jsx("li", { children: "NIL representation for student-athletes" }), _jsx("li", { children: " Brand partnerships" }), _jsx("li", { children: "Social media and marketing services" }), _jsx("li", { children: "Sales of merchandise or digital goods" }), _jsx("li", { children: "Athlete bookings or appearances" }), _jsx("li", { children: "Educational resources" }), "All services are subject to change, limitation, or discontinuation at our discretion."] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "3. Payments & Fees" }), _jsxs(ItemText, { children: ["When you make a purchase or engage in a paid service through our Site, you agree to provide accurate payment information. All fees are due at the time of service unless otherwise stated in a written agreement. ", _jsx("br", {}), "We reserve the right to modify pricing at any time. Refund policies, if any, are disclosed at checkout or in separate written agreements."] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "4. Intellectual Property" }), _jsx(ItemText, { children: "All content on this Site \u2014 including but not limited to logos, text, graphics, videos, and images \u2014 is owned by or licensed to Players Club Management and protected by intellectual property laws. You may not reproduce, distribute, or exploit any content without our prior written permission." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "5. Athlete Representation & Agreements" }), _jsxs(ItemText, { children: ["If you are a student-athlete or representative seeking NIL services, any formal engagement must be governed by a separate NIL Representation Agreement. These Terms do not constitute a representation agreement. ", _jsx("br", {}), "You are responsible for complying with your school\u2019s or governing body\u2019s NIL compliance policies. Players Club Management is not liable for violations of third-party NIL rules or institutional regulations"] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "6. User Conduct" }), _jsxs(ItemText, { children: ["You agree not to use the Site or our services:", _jsx("li", { children: "For any unlawful purpose" }), _jsx("li", { children: "To solicit others to perform or participate in unlawful acts" }), _jsx("li", { children: "To violate any international, federal, state, or local regulations" }), _jsx("li", { children: "To infringe upon our intellectual property rights or those of others" }), _jsx("li", { children: "To harass, abuse, insult, harm, or defame others" }), _jsx("li", { children: "To submit false or misleading information" }), _jsx("li", { children: "To upload or transmit malicious code or spam" }), "Violation of these rules may result in termination of your access to the Site."] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "7. Third-Party Links and Tools" }), _jsx(ItemText, { children: "Our Site may contain links to third-party websites or tools not owned or controlled by Players Club Management. We are not responsible for their content, accuracy, or practices. Use them at your own risk." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "8. Disclaimers" }), _jsxs(ItemText, { children: ["We provide our Site and services \u201Cas is\u201D and \u201Cas available\u201D without warranties of any kind, either express or implied. We do not guarantee that the Site will be uninterrupted, secure, or error-free. ", _jsx("br", {}), "Players Club Management does not guarantee any specific NIL deal or financial outcome from representation or promotion services."] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "9. Limitation of Liability" }), _jsx(ItemText, { children: "To the maximum extent permitted by law, Players Club Management and its affiliates, partners, officers, and employees shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Site or our services." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "11. Termination" }), _jsx(ItemText, { children: "We reserve the right to suspend or terminate your access to the Site or services for any reason, including a breach of these Terms." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "12. Governing Law" }), _jsx(ItemText, { children: "These Terms are governed by and interpreted under the laws of the State of California, without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of courts located in California for any disputes." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "13. Changes to Terms" }), _jsx(ItemText, { children: "We may update these Terms from time to time to reflect operational or legal changes. It is your responsibility to review them periodically. Continued use of the Site constitutes acceptance of the revised Terms." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "14. Contact Us" }), _jsxs(ItemText, { children: ["If you have any questions about these Terms, please contact:", _jsx("br", {}), _jsx("strong", { children: " Players Club Management " }), _jsx("br", {}), "Email: playersclubmgmtsjz@gmail.com", _jsx("br", {}), "Address: 17325 Wabash Ave"] })] })] }) }));
}
export default TermsOfService;
