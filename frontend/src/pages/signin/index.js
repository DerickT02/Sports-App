import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
/* ============  styled-components  ============ */
const Container = styled.div `
  max-width: 400px;
  margin: calc(64px + 2rem) auto 2rem;   /* (NavBar ≈64px) + extra space */
  padding: 2rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  color: var(--color-text);
  font-family: 'Lato', sans-serif;

  @media (max-width: 480px) {
    margin: calc(64px + 1rem) 1rem 1rem;
    padding: 1.25rem;
  }
`;
const Title = styled.h1 `
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
`;
const Form = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;           /* bigger vertical space */
  width: 100%;
`;
const Group = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Label = styled.label `
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
  color: var(--color-text);
`;
const Input = styled.input `
  width: 100%;
  padding: 0.8rem 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 1rem;

  &::placeholder {
    color: var(--color-muted);
  }

  &:focus {
    outline: none;
    border-color: #c55a2b;           /* accent */
  }
`;
const Button = styled.button `
  width: 100%;
  padding: 0.9rem;
  background: #c55a2b;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.25s linear;

  &:hover {
    background: #b55d2a;
  }
`;
const ErrorMsg = styled.p `
  color: #ff6b6b;
  text-align: center;
`;
/* ============  React component  ============ */
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            navigate("/admin-home");
            console.log(user);
        }).catch((err) => {
            console.log(err);
        });
    };
    return (_jsxs(Container, { children: [_jsx(Title, { children: "Sign In" }), _jsxs(Form, { onSubmit: handleSubmit, children: [_jsxs(Group, { children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", placeholder: "you@example.com", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs(Group, { children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsx(Input, { id: "password", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), _jsx(Button, { type: "submit", children: "Sign In" }), error && _jsx(ErrorMsg, { children: error })] })] }));
};
export default SignIn;
