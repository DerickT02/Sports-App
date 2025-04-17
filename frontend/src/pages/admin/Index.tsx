import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Horizontal, Vertical } from '../../components/layout/atoms';
import { AiOutlineEdit } from 'react-icons/ai';
import styled from 'styled-components';

/* ---------- Styled Components ---------- */
const PageContainer = styled(Vertical)`
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 2rem;
  gap: 2rem;
  background-color: var(--color-bg);
`;

const Title = styled.h1`
  color: var(--color-heading);
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const ActionCard = styled(Horizontal)`
  width: 250px;
  height: 80px;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`;

const ActionLabel = styled(Box)`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
`;

const ActionIcon = styled(Box)`
  font-size: 1.5rem;
  color: var(--color-primary);
`;

/* ---------- Component ---------- */
export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Title>Admin Home Page</Title>
      <ActionCard onClick={() => navigate('/admin-Manage_Athlete')}>
        <ActionLabel>Manage Athletes</ActionLabel>
        <ActionIcon>
          <AiOutlineEdit />
        </ActionIcon>
      </ActionCard>
    </PageContainer>
  );
}