// src/components/layout/NavBar.tsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate()

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/about-us')}>About Us</button>
      <button onClick={() => navigate('/athletes')}>Athletes</button>
      <button onClick={() => navigate('/athlete-portfolio')}>Athlete Portfolio</button>
      {/* <button onClick={() => navigate('/services')}>Services</button> */}
    </nav>
  )
}
