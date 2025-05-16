import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { Box, Table } from '../layout/atoms';
// Styled components specific to Basketball Card
const CardContainer = styled(Box) `
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  margin-bottom: 1rem;
  background-color: var(--color-surface);
`;
const TitleBox = styled(Box) `
  margin-bottom: 1rem;

  h3 {
    font-size: 1.5rem;
    color: var(--color-heading);
  }
`;
const TableContainer = styled(Box) `
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
`;
const BasketballCard = ({ data }) => (_jsxs(CardContainer, { children: [_jsx(TitleBox, { children: _jsxs("h3", { children: [data.teamName, " \u2013 ", data.season] }) }), _jsx(TableContainer, { children: _jsxs(Table, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Games" }), _jsx("th", { children: "PPG" }), _jsx("th", { children: "RPG" }), _jsx("th", { children: "APG" })] }) }), _jsx("tbody", { children: _jsxs("tr", { children: [_jsx("td", { children: data.games }), _jsx("td", { children: data.pointsPerGame }), _jsx("td", { children: data.reboundsPerGame }), _jsx("td", { children: data.assistsPerGame })] }) })] }) })] }));
export default BasketballCard;
