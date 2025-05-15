import styled from 'styled-components';
import { Box } from '../layout/atoms';

export const SeasonCardShell = styled(Box)`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  margin: 1rem 0;
  padding: 1rem;
  color: var(--color-text);

  h3 {
    margin: 0 0 0.75rem;
    font-size: 1.1rem;
    color: var(--color-heading);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
  }
  th,
  td {
    padding: 0.35rem 0.6rem;
    text-align: center;
  }
  th {
    color: var(--color-muted);
    font-weight: 600;
  }
  tbody tr:nth-of-type(even) {
    background: rgba(255, 255, 255, 0.03);
  }
`;
