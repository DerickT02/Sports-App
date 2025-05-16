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
function PrivacyPolicy() {
    const navigate = useNavigate();
    return (_jsx(_Fragment, { children: _jsxs(Page, { children: [_jsx(Title, { children: "Players Club Management Privacy Policy" }), _jsx(Intro, { children: "This Privacy Policy explains how Players Club Management (\u201Cwe\u201D, \u201Cus\u201D, or \u201Cour\u201D) collects, uses, and discloses your Personal Information when you visit or make a purchase from our website (the \u201CSite\u201D)" }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Collecting Personal Information" }), _jsx(ItemText, { children: "When you visit our Site, we collect certain information about your device, your interactions with the Site, and data needed to process purchases or provide our services. We may also collect additional information if you contact us directly. \u201CPersonal Information\u201D refers to any information that can uniquely identify you. Below are the types of Personal Information we collect and why:" })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Device Information" }), _jsxs(ItemText, { children: [_jsx("strong", { children: "Examples of data collected" }), ": browser type, IP address, time zone, cookie data, pages/products viewed, search terms, and site interaction behavior.", _jsx("br", {}), _jsx("strong", { children: "Purpose" }), ": to display our Site properly, and for analytics to improve user experience.", _jsx("br", {}), _jsx("strong", { children: "How We Collect It" }), ": automatically, using cookies, log files, pixels, tags, or other tracking technologies.", _jsx("br", {}), _jsx("strong", { children: "Disclosure" }), ": shared with our analytics and hosting service providers (e.g., Google Analytics, Shopify, or other platforms we use).", _jsx("br", {})] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Order & Service Information" }), _jsxs(ItemText, { children: [_jsx("strong", { children: "Examples of data collected" }), ": name, billing/shipping address, payment details (credit card, Apple Pay, etc.), email address, and phone number.", _jsx("br", {}), _jsx("strong", { children: "Purpose" }), ": to fulfill contracts, process payments, arrange services or product delivery, send confirmations, and communicate with you.", _jsx("br", {}), _jsx("strong", { children: "How We Collect It" }), ": directly from you when you fill out a form, make a purchase, or book a service.", _jsx("br", {}), _jsx("strong", { children: "Disclosure" }), ": shared with payment processors, CRM tools, email marketing platforms, or other vendors necessary to deliver our services.", _jsx("br", {})] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Customer Support" }), _jsxs(ItemText, { children: [_jsx("strong", { children: " Examples of Data Collected" }), ": any personal details you share while requesting support (e.g., contact details, case details).", _jsx("br", {}), _jsx("strong", { children: "Purpose" }), ": to help resolve your issues and provide better service.", _jsx("br", {}), _jsx("strong", { children: "How We Collect It" }), ": directly from you.", _jsx("br", {}), _jsx("strong", { children: "Disclosure" }), ": may be shared with third-party support platforms we use.", _jsx("br", {})] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Minors" }), _jsx(ItemText, { children: "Our services are not intended for individuals under the age of 13. We do not knowingly collect Personal Information from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us to have it removed." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Sharing Your Information" }), _jsx(ItemText, { children: "Our services are not intended for individuals under the age of 13. We do not knowingly collect Personal Information from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us to have it removed." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Behavioural Advertising" }), _jsxs(ItemText, { children: ["We may use your Personal Information to show you relevant ads or marketing. This may include sharing data with: ", _jsx("br", {}), _jsxs("li", { children: ["Google Analytics - ", _jsx("a", { href: "https://policies.google.com/privacy", children: "Learn more " }), " or ", _jsx("a", { href: "https://tools.google.com/dlpage/gaoptout", children: "opt-out" })] }), _jsx("li", { children: "Social media platforms like Facebook and Instagram for remarketing purposes" }), "To opt-out of targeted advertising, you can use the following links:", _jsx("li", { children: _jsx("a", { href: "https://www.facebook.com/settings/?tab=ads", children: "Facebook" }) }), _jsx("li", { children: _jsx("a", { href: "https://www.google.com/settings/ads/anonymous", children: "Google" }) }), _jsx("li", { children: _jsx("a", { href: "https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads", children: "Bing" }) }), _jsx("li", { children: _jsx("a", { href: "http://optout.aboutads.info/", children: "Or visit the Digital Advertising Alliance opt-out page" }) })] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Using Personal  Information" }), _jsxs(ItemText, { children: ["We use your Personal Information to: ", _jsx("br", {}), _jsx("li", { children: "Offer and deliver our services (e.g., athlete representation, merchandise, digital content)" }), _jsx("li", { children: "Communicate with you" }), _jsx("li", { children: "Provide updates and marketing communications" }), _jsx("li", { children: "Comply with legal obligations" })] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "GDPR Compliance (If Applicable)" }), _jsxs(ItemText, { children: ["If you are located in the European Economic Area (EEA), we process your Personal Information based on: ", _jsx("br", {}), _jsx("li", { children: "Your consent" }), _jsx("li", { children: "Performance of a contract" }), _jsx("li", { children: "Legal compliance" }), _jsx("li", { children: "Our legitimate interests (provided they do not override your rights)" })] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Retention" }), _jsx(ItemText, { children: "We retain your information as long as necessary to fulfill our services and legal obligations. You may request deletion of your data at any time." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Automated Decision Making" }), _jsx(ItemText, { children: "We do not engage in fully automated decision-making that has a legal or significant effect on users." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Information We Collect" }), _jsxs(ItemText, { children: [_jsx(Subheading, { children: _jsx("strong", { children: "Device Information" }) }), "-", _jsx("strong", { children: "Examples collected" }), ": browser type, IP address, time zone, cookie data, pages viewed, search queries, and interactions with the Site.", _jsx("br", {}), "-", _jsx("strong", { children: "Why we collect it " }), ": to improve site performance, understand user behavior, and deliver a better experience.", _jsx("br", {}), "-", _jsx("strong", { children: "How we collect it" }), ": automatically via cookies, log files, and similar technologies. ", _jsx("br", {}), "-", _jsx("strong", { children: "Who we share it with" }), ": analytics tools and website hosting providers.", _jsx("br", {}), _jsx("br", {}), _jsx(Subheading, { children: _jsx("strong", { children: "Order Information" }) }), "-", _jsx("strong", { children: "Examples collected" }), ": your name, billing/shipping address, email, phone number, payment details (e.g., credit card or other accepted methods).", _jsx("br", {}), "-", _jsx("strong", { children: "Why we collect it" }), ": to process orders, fulfill contracts, send confirmations, provide customer service, and screen for potential fraud.", _jsx("br", {}), "-", _jsx("strong", { children: "How we collect it" }), ": directly from you during checkout or other interactions.", _jsx("br", {}), "-", _jsx("strong", { children: "Who we share it with" }), ": payment processors, shipping partners, and our ecommerce platform.", _jsx("br", {}), _jsx("br", {}), _jsx(Subheading, { children: _jsx("strong", { children: "Customer Support Information" }) }), "-", _jsx("strong", { children: "Examples collected" }), ": any information you provide when reaching out for support.", _jsx("br", {}), "-", _jsx("strong", { children: "Why we collect it" }), ": to resolve your issues or respond to inquiries.", _jsx("br", {}), "-", _jsx("strong", { children: "How we collect it" }), ": directly from you.", _jsx("br", {}), "-", _jsx("strong", { children: "Who we share it with" }), ": support ticketing platforms or contractors assisting with customer service. ", _jsx("br", {})] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Sharing Personal Information" }), _jsx(ItemText, { children: "We may share your personal information with third parties that help us operate the Site, fulfill orders, or analyze performance. These include payment providers, shipping carriers, email platforms, and advertising networks. We may also disclose information to comply with legal obligations, protect rights, or respond to law enforcement." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Behavioral Advertising" }), _jsxs(ItemText, { children: ["We may use your information to serve personalized ads or marketing messages based on your interactions with the Site.", _jsx("br", {}), "Examples:", _jsx("li", { children: "We may use Google Analytics or similar tools to monitor usage." }), _jsx("li", { children: "We may share details with advertising partners (e.g., Meta, Google) to show relevant ads." }), "To opt out of targeted advertising:", _jsx("br", {}), _jsxs("li", { children: ["Facebook: ", _jsx("a", { href: "https://www.facebook.com/settings/?tab=ads", children: "https://www.facebook.com/settings/?tab=ads" })] }), _jsxs("li", { children: ["Google:", _jsx("a", { href: "https://www.google.com/settings/ads/anonymous", children: " https://www.google.com/settings/ads/anonymous" })] }), _jsxs("li", { children: ["General: ", _jsx("a", { href: "http://optout.aboutads.info/", children: "http://optout.aboutads.info/" })] })] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Using Your Information" }), _jsxs(ItemText, { children: ["We use your information to:", _jsx("li", { children: "Offer and deliver products or services" }), _jsx("li", { children: "Process payments and send receipts" }), _jsx("li", { children: "Fulfill orders and arrange shipping" }), _jsx("li", { children: "Communicate updates or promotions" }), _jsx("li", { children: "Improve and secure our services" })] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Your Rights" }), _jsxs(ItemText, { children: [_jsx(Subheading, { children: _jsx("strong", { children: "CCPA (if applicable)" }) }), "California residents may:", _jsx("li", { children: "Request access to the personal data we hold" }), _jsx("li", { children: "Ask for corrections or deletion" }), _jsx("li", { children: "Opt out of the sale of personal data" }), _jsx("li", { children: "Designate an authorized agent to act on their behalf" }), "We do not sell personal data in the conventional sense, but we may share it with third parties as described."] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Cookies" }), _jsxs(ItemText, { children: ["We use cookies to support site functionality, track visitor behavior, and enhance your experience. These may include: ", _jsx("br", {}), _jsx("strong", { children: "Cookie Name & Purpose" }), " ", _jsx("br", {}), "_session_id     :    Maintains session data ", _jsx("br", {}), "cart Tracks      :   shopping cart contents", _jsx("br", {}), "_analytics Website    :     usage analysis", _jsx("br", {}), "_marketing_pref       :     Stores your ad tracking choice ", _jsx("br", {}), "You can manage cookies through your browser settings. Learn more at", _jsx("a", { href: "www.allaboutcookies.org", children: " www.allaboutcookies.org " }), "."] })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Do Not Track" }), _jsx(ItemText, { children: "We do not currently respond to \"Do Not Track\" signals due to a lack of industry standards." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Changes to This Policy" }), _jsx(ItemText, { children: "We may revise this Privacy Policy periodically to reflect operational, legal, or regulatory updates. The latest version will always be available on our Site." })] }), _jsxs(Item, { children: [_jsx(ItemTitle, { children: "Contact Us" }), _jsxs(ItemText, { children: ["For any privacy-related questions, requests, or complaints, please contact: ", _jsx("br", {}), _jsx("strong", { children: "Players Club Management" }), _jsx("br", {}), "Playersclubmgmtsjz@gmail.com", _jsx("br", {}), "17325 Wabash Ave", _jsx("br", {})] })] })] }) }));
}
export default PrivacyPolicy;
