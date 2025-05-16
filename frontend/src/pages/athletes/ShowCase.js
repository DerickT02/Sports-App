import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase'; // adjust this import based on your project structure
/* ---------- shared shimmer ---------- */
const shimmer = keyframes `
  100% { transform: translateX(100%); }
`;
/* ---------- Styled Components ---------- */
const ShowcaseContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2rem 2rem 4rem;
  padding-top: 100px;
  box-sizing: border-box;
`;
const ShowcaseCard = styled.div `
  position: relative;
  border-radius: 14px;
  padding: 6px;
  background: linear-gradient(135deg, #383838, #2f2f2f, #454545, #292929, #3a3a3a);
  background-size: 400% 400%;
  animation: shimmer 8s ease infinite;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  max-width: 350px;

  &:hover {
    transform: perspective(1000px) rotateX(6deg) rotateY(6deg) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35), 0 8px 20px rgba(0, 0, 0, 0.18);
  }

  > div {
    border-radius: 12px;
    padding: 1.5rem;
    padding-top: 30px;
    height: 100%;
    width: 100%;
    max-width: 260px;
    background: linear-gradient(145deg, #2e2e2e, #222);
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.04), inset 0 -2px 4px rgba(0, 0, 0, 0.35);
  }
`;
const PhotoSkeleton = styled.div `
  width: 100%;
  height: 330px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background: #2a2a2a;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255,255,255,0.10) 50%,
      transparent 100%
    );
    animation: ${shimmer} 1.2s infinite;
    transform: translateX(-100%);
  }
`;
const ShowcasePhoto = styled.img `
  width: 100%;
  height: 330px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1rem;
`;
const AthleteName = styled.h2 `
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin: 0.5rem 0 0.25rem;
`;
const AthleteText = styled.p `
  font-size: 0.95rem;
  color: #c7c7c7;
  margin: 0.25rem 0;
`;
const NoAthletesMessage = styled.div `
  text-align: center;
  color: #ccc;
  font-size: 1.5rem;
  padding-top: 100px;
`;
const AthleteCard = ({ athlete }) => {
    const [loaded, setLoaded] = useState(false);
    return (_jsx(Link, { to: `/athletes/${athlete._id}`, style: { textDecoration: 'none' }, children: _jsxs(ShowcaseCard, { children: [!loaded && _jsx(PhotoSkeleton, {}), _jsx(ShowcasePhoto, { src: athlete.portraitPhoto || '', alt: `${athlete.firstName} ${athlete.lastName}`, onLoad: () => setLoaded(true), style: { display: loaded ? 'block' : 'none' } }), _jsxs(AthleteName, { children: [athlete.firstName, " ", athlete.lastName] }), _jsxs(AthleteText, { children: ["Sport: ", athlete.sports] }), _jsxs(AthleteText, { children: ["Grade: ", athlete.year] })] }) }));
};
/* ---------- Main Showcase Component ---------- */
export default function ShowCase() {
    const [athletes, setAthletes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchAthletes = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'athletes'));
                const data = snapshot.docs.map(doc => ({
                    _id: doc.id,
                    ...doc.data()
                }));
                setAthletes(data);
            }
            catch (error) {
                console.error("Failed to fetch athletes:", error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchAthletes();
    }, []);
    if (loading) {
        return _jsx("div", { style: { paddingTop: "120px", textAlign: "center", color: "#ccc" }, children: "Loading athletes..." });
    }
    if (athletes.length === 0) {
        return _jsx(NoAthletesMessage, { children: "No Athletes Available" });
    }
    return (_jsx(ShowcaseContainer, { children: athletes.map((athlete) => (_jsx(AthleteCard, { athlete: athlete }, athlete._id))) }));
}
