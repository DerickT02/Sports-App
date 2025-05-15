// styles.ts
import styled from 'styled-components';
import { Box, Horizontal, Vertical } from '../../components/layout/atoms';

export const PageContainer = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 140px 2rem 2rem 2rem;
  font-family: 'Lato', sans-serif;
  color: var(--color-text);
`;

export const ToggleContainer = styled(Horizontal)`
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const ToggleButton = styled(Box)`
  padding: 0.75rem 1.25rem;
  background: var(--color-surface);
  color: var(--color-text);
  border-radius: 10px;
  border: 2px solid var(--color-border);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &.active {
    background: var(--color-primary);
    
  }
`;

export const Section = styled(Vertical)`
  margin-bottom: 2rem;
  gap: 1rem;

  h2 {
    font-family: 'Bodoni Moda', serif;
    font-size: 1.6rem;
    color: var(--color-heading);
    text-align: center;
  }
`;

export const StyledInput = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
`;

export const StyledTextarea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
  resize: vertical;
`;

export const StyledSelect = styled.select`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
`;

export const ListContainer = styled(Vertical)`
  gap: 0.75rem;
  border: 2px solid var(--color-border);
  background: var(--color-surface);
  border-radius: 10px;
  padding: 1.25rem;
`;

export const AvailableItem = styled(Box)`
  padding: 0.75rem 1rem;
  background: transparent;
  border: 2px solid var(--color-muted);
  border-radius: 8px;
  color: var(--color-text);
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: var(--color-border);
  }
`;

export const ActiveCardContainer = styled(Vertical)`
  padding: 1rem;
  border: 2px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-surface);
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

export const ControlRow = styled(Horizontal)`
  gap: 0.75rem;
  margin: 0.75rem 0 1rem 0;
  button {
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
    border-radius: 4px;
    border: none;
    background: var(--color-primary);
    color: white;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-1px);
    }
  }
`;

export const ControlButton = styled(Box)`
  background: var(--color-primary);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
`;

export const SaveButton = styled(ControlButton)`
  background: #4caf50;
`;

export const DeleteButton = styled(ControlButton)`
  background: #4caf50;
`;

export const ClearButton = styled(ControlButton)`
  background: #f44336;
`;

export const ActionContainer = styled(Horizontal)`
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`;

export const ActiveCardsWrapper = styled(Vertical)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;