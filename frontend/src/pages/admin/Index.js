import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Box, Horizontal, Vertical } from '../../components/layout/atoms';
import { AiOutlineEdit } from 'react-icons/ai';
import styled from 'styled-components';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
/* ---------- Styled Components ---------- */
const PageContainer = styled(Vertical) `
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 2rem;
  gap: 2rem;
  background-color: var(--color-bg);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
const Title = styled.h1 `
  color: var(--color-heading);
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  word-wrap: break-word; /* Ensures the title wraps properly on smaller screens */

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const ActionCard = styled(Horizontal) `
  width: 100%; /* Ensures the ActionCard is fully responsive */
  max-width: 300px; /* Allowing it to scale */
  min-width: 200px; /* Prevents shrinking too much */
  height: auto;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0 auto;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Ensures it takes full width in portrait mode */
    height: auto; /* Remove fixed height */
    padding: 1rem; /* Adjust padding for smaller screens */
  }
`;
const ActionLabel = styled(Box) `
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  word-wrap: break-word; /* Prevents the text from getting cropped in narrow containers */

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const ActionIcon = styled(Box) `
  font-size: 1.5rem;
  color: var(--color-primary);

  @media (max-width: 768px) {
    font-size: 1.3rem; /* Adjust icon size on mobile */
  }
`;
/* ---------- Component ---------- */
export default function AdminHome() {
    const navigate = useNavigate();
    const auth = getAuth();
    const logout = () => {
        signOut(auth).then(() => {
            navigate("/");
        });
    };
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("Logged in");
        }
        else {
            navigate("/");
        }
    });
    return (_jsxs(PageContainer, { children: [_jsx(Title, { children: "Admin Home Page" }), _jsxs(ActionCard, { onClick: () => navigate('/admin-Manage_Athlete'), children: [_jsx(ActionLabel, { children: "Manage Athletes" }), _jsx(ActionIcon, { children: _jsx(AiOutlineEdit, {}) })] }), _jsx("button", { onClick: logout, children: " Log out " })] }));
}
