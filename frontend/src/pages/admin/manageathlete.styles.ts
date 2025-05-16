import styled from 'styled-components';

/* ---------- layout shells ------------------------------------------ */
export const PageContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
  color: var(--color-text);
`;

export const Section = styled.section`
  margin: 2rem 0;
`;

/* ---------- mode toggle ------------------------------------------- */
export const ToggleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ToggleButton = styled.button`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &.active,
  &:hover {
    background: var(--color-border);
  }
`;

/* ---------- base-form controls ------------------------------------ */
const control = `
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 1rem;
`;

export const StyledInput = styled.input`${control}`;
export const StyledSelect = styled.select`${control}`;
export const StyledTextarea = styled.textarea`
  ${control};
  min-height: 90px;
  resize: vertical;
`;

/* ---------- available list ---------------------------------------- */
export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const AvailableItem = styled.div`
  padding: 0.6rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: var(--color-border);
  }
`;

/* ---------- active cards ------------------------------------------ */
export const ActiveCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ActiveCardContainer = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
`;

/* small arrow / delete buttons inside each card */
export const ControlRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;

  button {
    background: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text);
    border-radius: 4px;
    font-size: 0.8rem;
    padding: 0.25rem 0.6rem;
    cursor: pointer;
    transition: background 0.12s;

    &:hover:not(:disabled) {
      background: var(--color-border);
    }
    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`;

/* ---------- footer action row ------------------------------------- */
export const ActionContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const largeBtn = `
  padding: 0.7rem 1.6rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
`;

export const SaveButton = styled.button`
  ${largeBtn};
  background: #2b8c2b;
  color: #fff;

  &:hover {
    background: #247424;
  }
`;
export const ClearButton = styled.button`
  ${largeBtn};
  background: #666;
  color: #fff;

  &:hover {
    background: #444;
  }
`;
export const DeleteButton = styled.button`
  ${largeBtn};
  background: #c33;
  color: #fff;
g
  &:hover {
    background: #a22;
  }
`;
