import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
  color: var(--color-heading);
`;
const Content = styled.div `
  margin-top: 2rem;
`;
const Section = styled.section `
  margin-bottom: 3rem;
`;
const Subtitle = styled.h2 `
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-primary);
`;
const List = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li `
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
`;
const ResourceHeading = styled.h3 `
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;
const ResourceText = styled.p `
  font-size: 1rem;
  line-height: 1.6;
`;
/* ---------- Main Component ---------- */
const Resources = () => {
    return (_jsx(_Fragment, { children: _jsxs(Page, { children: [_jsx(Title, { children: "Resources" }), _jsxs(Content, { children: [_jsxs(Section, { children: [_jsx(Subtitle, { children: "For Athletes:" }), _jsxs(List, { children: [_jsxs(ListItem, { children: [_jsx(ResourceHeading, { children: "Financial Literacy" }), _jsx(ResourceText, { children: "Workshops on managing NIL earnings." })] }), _jsxs(ListItem, { children: [_jsx(ResourceHeading, { children: "Brand Building" }), _jsx(ResourceText, { children: "Tools and tips for crafting your personal brand." })] }), _jsxs(ListItem, { children: [_jsx(ResourceHeading, { children: "Contract Review" }), _jsx(ResourceText, { children: "Guidance on understanding and negotiating contracts." })] })] })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "For Sponsors:" }), _jsxs(List, { children: [_jsxs(ListItem, { children: [_jsx(ResourceHeading, { children: "Brand Athlete Partnerships" }), _jsx(ResourceText, { children: "Connect with athletes who align with your brand's values." })] }), _jsxs(ListItem, { children: [_jsx(ResourceHeading, { children: "Marketing Campaigns" }), _jsx(ResourceText, { children: "Support in creating engaging campaigns that resonate with audiences." })] }), _jsxs(ListItem, { children: [_jsx(ResourceHeading, { children: "Campaign Metrics" }), _jsx(ResourceText, { children: "Track the impact and success of your collaborations with athletes." })] })] })] })] })] }) }));
};
export default Resources;
