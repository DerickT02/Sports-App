// ManageAthlete.tsx
import React, { useState } from 'react';
import { Athlete } from '../../../../shared/types/athlete';
import { DataCard, DataCardType, FootballSeasonStatsData } from '../../../../shared/types/dataCard';
import { dummyAthletes } from './dummyAthletes';
import {
  PageContainer, ToggleContainer, ToggleButton, Section, StyledInput, StyledSelect,
  StyledTextarea, ListContainer, AvailableItem, ActiveCardContainer, ControlRow,
  ControlButton, SaveButton, ClearButton, ActionContainer, ActiveCardsWrapper
} from './manageathlete.styles';
import { Box, Vertical } from '../../components/layout/atoms';

interface DataCardOption {
  id: number;
  title: string;
  type: DataCardType;
}

interface ActiveCard extends DataCard {}

const availableCardOptions: DataCardOption[] = [
  { id: 1, title: 'Football Stats Card (Style A)', type: 'footballStats' },
  { id: 2, title: 'Football Stats Card (Style B)', type: 'footballStats' },
];

const ManageAthlete: React.FC = () => {
  const [mode, setMode] = useState<'add' | 'edit'>('add');
  const [selectedAthleteId, setSelectedAthleteId] = useState<string>('');
  const [baseData, setBaseData] = useState({
    firstName: '', lastName: '', year: 'Freshman' as Athlete['year'],
    sports: '', portraitPhoto: '', biography: ''
  });
  const [activeCards, setActiveCards] = useState<ActiveCard[]>([]);

  const generateInstanceId = (option: DataCardOption): string => {
    return `${option.id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  const handleAddCard = (option: DataCardOption) => {
    const instanceId = generateInstanceId(option);
    const newCard: ActiveCard = {
      instanceId,
      type: option.type,
      title: option.title,
      data: { teamName: '', season: 0, wins: 0, losses: 0 },
    };
    setActiveCards(prev => [...prev, newCard]);
  };

  const moveUp = (index: number) => {
    if (index > 0) {
      const list = [...activeCards];
      [list[index - 1], list[index]] = [list[index], list[index - 1]];
      setActiveCards(list);
    }
  };

  const moveDown = (index: number) => {
    if (index < activeCards.length - 1) {
      const list = [...activeCards];
      [list[index], list[index + 1]] = [list[index + 1], list[index]];
      setActiveCards(list);
    }
  };

  const deleteCard = (id: string) => setActiveCards(prev => prev.filter(card => card.instanceId !== id));

  const toggleMode = (newMode: 'add' | 'edit') => {
    if (newMode !== mode && window.confirm('Switching modes will clear current data. Proceed?')) {
      setMode(newMode);
      setBaseData({ firstName: '', lastName: '', year: 'Freshman', sports: '', portraitPhoto: '', biography: '' });
      setActiveCards([]);
      setSelectedAthleteId('');
    }
  };

  const loadAthleteData = (athlete: Athlete) => {
    setBaseData({
      firstName: athlete.firstName, lastName: athlete.lastName, year: athlete.year,
      sports: athlete.sports, portraitPhoto: athlete.portraitPhoto, biography: athlete.biography || ''
    });
    setActiveCards(athlete.portfolioData as ActiveCard[]);
  };

  const handleAthleteSelect = (id: string) => {
    setSelectedAthleteId(id);
    const athlete = dummyAthletes.find(a => a._id === id);
    if (athlete) loadAthleteData(athlete);
  };

  const handleSave = () => {
    const athleteToSave: Athlete = { ...baseData, portfolioData: activeCards };
    console.log('Saving Athlete:', athleteToSave);
  };

  const handleClear = () => {
    if (window.confirm('Clear all data?')) {
      setBaseData({ firstName: '', lastName: '', year: 'Freshman', sports: '', portraitPhoto: '', biography: '' });
      setActiveCards([]);
      setSelectedAthleteId('');
    }
  };

  return (
    <PageContainer>
      <ToggleContainer>
        <ToggleButton onClick={() => toggleMode('add')} className={mode === 'add' ? 'active' : ''}>Add New</ToggleButton>
        <ToggleButton onClick={() => toggleMode('edit')} className={mode === 'edit' ? 'active' : ''}>Edit Existing</ToggleButton>
        {mode === 'edit' && (
          <StyledSelect value={selectedAthleteId} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAthleteSelect(e.target.value)}>
            <option value="">Select an athlete</option>
            {dummyAthletes.map(ath => <option key={ath._id} value={ath._id}>{ath.firstName} {ath.lastName}</option>)}
          </StyledSelect>
        )}
      </ToggleContainer>

      <Section>
        <h2>Base Athlete Information</h2>
        <StyledInput placeholder="First Name" value={baseData.firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBaseData({ ...baseData, firstName: e.target.value })} />
        <StyledInput placeholder="Last Name" value={baseData.lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBaseData({ ...baseData, lastName: e.target.value })} />
        <StyledSelect value={baseData.year} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBaseData({ ...baseData, year: e.target.value as Athlete['year'] })}>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </StyledSelect>
        <StyledInput placeholder="Sports" value={baseData.sports} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBaseData({ ...baseData, sports: e.target.value })} />
        <StyledInput placeholder="Portrait Photo URL" value={baseData.portraitPhoto} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBaseData({ ...baseData, portraitPhoto: e.target.value })} />
        <StyledTextarea placeholder="Biography" value={baseData.biography} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBaseData({ ...baseData, biography: e.target.value })} />
      </Section>

      <Section>
        <h2>Available Data Cards</h2>
        <ListContainer>
          {availableCardOptions.map(option => (
            <AvailableItem key={option.id} onClick={() => handleAddCard(option)}>{option.title}</AvailableItem>
          ))}
        </ListContainer>
      </Section>

      <Section>
        <h2>Active Data Cards</h2>
        <ActiveCardsWrapper>
          {activeCards.map((card, index) => (
            <ActiveCardContainer key={card.instanceId}>
              <Box>{card.title}</Box>
              <ControlRow>
                <button onClick={() => moveUp(index)} disabled={index === 0}>↑</button>
                <button onClick={() => moveDown(index)} disabled={index === activeCards.length - 1}>↓</button>
                <button onClick={() => deleteCard(card.instanceId)}>X</button>
              </ControlRow>
              {card.type === 'footballStats' && (
                <Vertical gap="0.5rem">
                  <StyledInput placeholder="Team Name" value={(card.data as FootballSeasonStatsData).teamName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const updated = { ...(card.data as FootballSeasonStatsData), teamName: e.target.value };
                    setActiveCards(prev => prev.map(c => c.instanceId === card.instanceId ? { ...c, data: updated } : c));
                  }} />
                  <StyledInput type="number" placeholder="Season (e.g., 2023)" value={(card.data as FootballSeasonStatsData).season || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const updated = { ...(card.data as FootballSeasonStatsData), season: Number(e.target.value) };
                    setActiveCards(prev => prev.map(c => c.instanceId === card.instanceId ? { ...c, data: updated } : c));
                  }} />
                  <StyledInput type="number" placeholder="Wins" value={(card.data as FootballSeasonStatsData).wins || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const updated = { ...(card.data as FootballSeasonStatsData), wins: Number(e.target.value) };
                    setActiveCards(prev => prev.map(c => c.instanceId === card.instanceId ? { ...c, data: updated } : c));
                  }} />
                  <StyledInput type="number" placeholder="Losses" value={(card.data as FootballSeasonStatsData).losses || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const updated = { ...(card.data as FootballSeasonStatsData), losses: Number(e.target.value) };
                    setActiveCards(prev => prev.map(c => c.instanceId === card.instanceId ? { ...c, data: updated } : c));
                  }} />
                </Vertical>
              )}
            </ActiveCardContainer>
          ))}
        </ActiveCardsWrapper>
      </Section>

      <Section>
        <ActionContainer>
          <ClearButton onClick={handleClear}>Clear</ClearButton>
          <SaveButton onClick={handleSave}>Save Athlete</SaveButton>
        </ActionContainer>
      </Section>
    </PageContainer>
  );
};

export default ManageAthlete;
