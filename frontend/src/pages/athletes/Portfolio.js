import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// src/pages/athletes/AthletePortfolio.tsx
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
/* ---------- Styled Components ---------- */
const PageContainer = styled.div `
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.5rem;
  padding-top: 100px;
  color: var(--color-text);
  font-family: 'Lato', sans-serif;
`;
const Header = styled.div `
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
`;
const Portrait = styled.img `
  width: 200px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  background: #ccc;
`;
const Info = styled.div `
  flex: 1;
`;
const Name = styled.h1 `
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
`;
const Label = styled.p `
  font-size: 1rem;
  margin: 0.25rem 0;
  color: var(--color-muted);
`;
const Section = styled.div `
  margin-top: 2rem;
`;
const CardContainer = styled.div `
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: var(--color-surface);
`;
const CardTitle = styled.h3 `
  font-size: 1.2rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;
const Stat = styled.p `
  font-size: 0.95rem;
`;
/* ---------- Component ---------- */
export default function AthletePortfolio() {
    const { id } = useParams();
    const [athlete, setAthlete] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchAthlete = async () => {
            if (!id)
                return;
            try {
                const docRef = doc(db, 'athletes', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setAthlete(docSnap.data());
                }
                else {
                    setAthlete(null);
                }
            }
            catch (error) {
                console.error('Error fetching athlete:', error);
                setAthlete(null);
            }
            finally {
                setLoading(false);
            }
        };
        fetchAthlete();
    }, [id]);
    if (loading)
        return _jsx(PageContainer, { children: "Loading..." });
    if (!athlete)
        return _jsx(PageContainer, { children: "Athlete not found." });
    return (_jsxs(PageContainer, { children: [_jsxs(Header, { children: [_jsx(Portrait, { src: athlete.portraitPhoto || '', alt: athlete.firstName }), _jsxs(Info, { children: [_jsxs(Name, { children: [athlete.firstName, " ", athlete.lastName] }), _jsxs(Label, { children: ["Year: ", athlete.year] }), _jsxs(Label, { children: ["Sport: ", athlete.sport] }), athlete.biography && _jsx(Label, { children: athlete.biography })] })] }), _jsxs(Section, { children: [_jsx("h2", { children: "Performance Cards" }), athlete.portfolioData && athlete.portfolioData.length > 0 ? (athlete.portfolioData.map((card) => (_jsxs(CardContainer, { children: [_jsx(CardTitle, { children: card.title }), card.type === 'footballSeason' && (_jsxs(_Fragment, { children: [_jsxs(Stat, { children: ["Team: ", card.data.teamName] }), _jsxs(Stat, { children: ["Season: ", card.data.season] }), _jsxs(Stat, { children: ["Wins: ", card.data.wins] }), _jsxs(Stat, { children: ["Losses: ", card.data.losses] }), _jsxs(Stat, { children: ["Completions: ", card.data.cmp] }), _jsxs(Stat, { children: ["Attempts: ", card.data.att] }), _jsxs(Stat, { children: ["Yards: ", card.data.yds] }), _jsxs(Stat, { children: ["Touchdowns: ", card.data.td] })] })), card.type === 'baseballSeason' && (_jsxs(_Fragment, { children: [_jsxs(Stat, { children: ["Team: ", card.data.teamName] }), _jsxs(Stat, { children: ["Season: ", card.data.season] }), _jsxs(Stat, { children: ["Games Played: ", card.data.games] }), _jsxs(Stat, { children: ["Batting Avg: ", card.data.avg] }), _jsxs(Stat, { children: ["Home Runs: ", card.data.hr] }), _jsxs(Stat, { children: ["RBIs: ", card.data.rbi] })] })), card.type === 'soccerSeason' && (_jsxs(_Fragment, { children: [_jsxs(Stat, { children: ["Team: ", card.data.teamName] }), _jsxs(Stat, { children: ["Season: ", card.data.season] }), _jsxs(Stat, { children: ["Appearances: ", card.data.appearances] }), _jsxs(Stat, { children: ["Goals: ", card.data.goals] }), _jsxs(Stat, { children: ["Assists: ", card.data.assists] }), card.data.cleanSheets !== undefined && (_jsxs(Stat, { children: ["Clean Sheets: ", card.data.cleanSheets] }))] })), card.type === 'basketballSeason' && (_jsxs(_Fragment, { children: [_jsxs(Stat, { children: ["Team: ", card.data.teamName] }), _jsxs(Stat, { children: ["Season: ", card.data.season] }), _jsxs(Stat, { children: ["Games: ", card.data.games] }), _jsxs(Stat, { children: ["Points/Game: ", card.data.pointsPerGame] }), _jsxs(Stat, { children: ["Rebounds/Game: ", card.data.reboundsPerGame] }), _jsxs(Stat, { children: ["Assists/Game: ", card.data.assistsPerGame] })] }))] }, card.instanceId)))) : (_jsx(Label, { children: "No performance data available." }))] })] }));
}
