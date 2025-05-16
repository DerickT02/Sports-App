import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { Box, Table } from '../layout/atoms';
// Styled components specific to Football Card
const CardContainer = styled(Box) `
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;
const TableContainer = styled(Box) `
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
`;
const TableTitleContainer = styled(Box) `
  margin: 0 0 1rem;
`;
const FootballCard = ({ data }) => (_jsxs(CardContainer, { children: [_jsx(TableTitleContainer, { children: _jsxs("h3", { children: [data.teamName, " \u2013 ", data.season] }) }), _jsx(TableContainer, { children: _jsxs(Table, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "W" }), _jsx("th", { children: "L" }), _jsx("th", { children: "CMP" }), _jsx("th", { children: "ATT" }), _jsx("th", { children: "YDS" }), _jsx("th", { children: "TD" })] }) }), _jsx("tbody", { children: _jsxs("tr", { children: [_jsx("td", { children: data.wins }), _jsx("td", { children: data.losses }), _jsx("td", { children: data.cmp }), _jsx("td", { children: data.att }), _jsx("td", { children: data.yds }), _jsx("td", { children: data.td })] }) })] }) })] }));
export default FootballCard;
