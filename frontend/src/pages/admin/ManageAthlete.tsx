import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Horizontal, Vertical } from '../../components/layout/atoms';
import { Athlete } from '../../../../shared/types/athlete';
import { DataCard, DataCardType, FootballSeasonStatsData } from '../../../../shared/types/dataCard';
import { dummyAthletes } from './dummyAthletes';

/* -------- Styled Components -------- */

// Overall page container with top padding so content is not hidden by the navbar.
const PageContainer = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 140px 2rem 2rem 2rem; /* top padding larger than navbar height */
  font-family: 'Lato', sans-serif;
  color: #f5f5dc;
`;

// Toggle container
const ToggleContainer = styled(Horizontal)`
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ToggleButton = styled(Box)`
  padding: 0.5rem 1rem;
  background: #555;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &.active {
    background: #c55a2b;
  }
`;

// Section container for each form area
const Section = styled(Vertical)`
  margin-bottom: 2rem;
  gap: 1rem;
`;

// Styled input fields
const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  resize: vertical;
`;

const StyledSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

// List container for available cards
const ListContainer = styled(Vertical)`
  gap: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 1rem;
`;

// Available card item
const AvailableItem = styled(Box)`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

// Active card component which includes reorder and delete buttons and editable inputs.
const ActiveCardContainer = styled(Vertical)`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
`;

const ControlRow = styled(Horizontal)`
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ControlButton = styled(Box)`
  background: #c55a2b;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
`;

const ActionContainer = styled(Horizontal)`
  gap: 1rem;
  justify-content: center;
`;

const SaveButton = styled(ControlButton)`
  background: #4caf50;
`;
const ClearButton = styled(ControlButton)`
  background: #f44336;
`;

const ActiveCardsWrapper = styled(Vertical)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

/* -------- End Styled Components -------- */

/* ---------- Types for Local State ---------- */

// For available card options.
interface DataCardOption {
  id: number;
  title: string;
  type: DataCardType; // for now, only 'footballStats'
}

// For active card instances; using DataCard from shared/types/dataCard.
interface ActiveCard extends DataCard {}

/* ---------- Dummy Data for Available Cards ---------- */
const availableCardOptions: DataCardOption[] = [
  { id: 1, title: 'Football Stats Card (Style A)', type: 'footballStats' },
  { id: 2, title: 'Football Stats Card (Style B)', type: 'footballStats' },
];

/* ---------- Main Component ---------- */
const ManageAthlete: React.FC = () => {
  // Toggle mode: 'add' or 'edit'
  const [mode, setMode] = useState<'add' | 'edit'>('add');

  // Base athlete data state.
  const [baseData, setBaseData] = useState({
    firstName: '',
    lastName: '',
    year: 'Freshman' as Athlete['year'],
    sports: '',
    portraitPhoto: '',
    biography: '',
  });

  // For Edit mode: selected athlete id.
  const [selectedAthleteId, setSelectedAthleteId] = useState<string>('');

  // Active cards state as a single array, each with unique instanceId.
  const [activeCards, setActiveCards] = useState<ActiveCard[]>([]);

  // Using the unified data model, store the card data in the activeCards array
  // inside each card's "data" field.
  // For a footballStats card, the "data" object is of type FootballSeasonStatsData.
  // We'll update an active card's data directly in the activeCards array.
  // (In a larger app, you might choose to store each card's data in a separate object keyed by instanceId.)

  // Helper: generate a unique instanceId using a timestamp.
  const generateInstanceId = (option: DataCardOption): string => {
    return `${option.id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  // Handle adding a card from available options to activeCards.
  const handleAddCard = (option: DataCardOption) => {
    const instanceId = generateInstanceId(option);
    const newCard: ActiveCard = {
      instanceId,
      type: option.type,
      title: option.title,
      data: option.type === 'footballStats'
        ? { teamName: '', season: 0, wins: 0, losses: 0 } as FootballSeasonStatsData
        : ({} as FootballSeasonStatsData),
    };
    setActiveCards(prev => [...prev, newCard]);
  };

  // Handle reordering using moveUp/moveDown (optional)
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

  const deleteCard = (instanceId: string) => {
    setActiveCards(prev => prev.filter(card => card.instanceId !== instanceId));
  };

  // Toggle mode and clear form if switching.
  const toggleMode = (newMode: 'add' | 'edit') => {
    if (newMode !== mode) {
      if (window.confirm('Switching modes will clear current data. Proceed?')) {
        setMode(newMode);
        setBaseData({
          firstName: '',
          lastName: '',
          year: 'Freshman',
          sports: '',
          portraitPhoto: '',
          biography: '',
        });
        setActiveCards([]);
        setSelectedAthleteId('');
      }
    }
  };

  // When in edit mode, load dummy athlete data from dummyAthletes.
  const loadAthleteData = (athlete: Athlete) => {
    setBaseData({
      firstName: athlete.firstName,
      lastName: athlete.lastName,
      year: athlete.year,
      sports: athlete.sports,
      portraitPhoto: athlete.portraitPhoto,
      biography: athlete.biography || '',
    });
    if (athlete.portfolioData) {
      // Assuming portfolioData is now an array of ActiveCard objects.
      setActiveCards(athlete.portfolioData as ActiveCard[]);
    }
  };

  const handleAthleteSelect = (id: string) => {
    setSelectedAthleteId(id);
    const athlete = dummyAthletes.find(a => a._id === id);
    if (athlete) {
      loadAthleteData(athlete);
    }
  };

  // On Save, combine baseData with the unified portfolioData (activeCards)
  const handleSave = () => {
    const athleteToSave: Athlete = {
      ...baseData,
      portfolioData: activeCards,
    };
    console.log('Saving Athlete:', athleteToSave);
  };

  const handleClear = () => {
    if (window.confirm('Clear all data?')) {
      setBaseData({
        firstName: '',
        lastName: '',
        year: 'Freshman',
        sports: '',
        portraitPhoto: '',
        biography: '',
      });
      setActiveCards([]);
      setSelectedAthleteId('');
    }
  };

  return (
    <PageContainer>
      {/* Toggle Mode */}
      <ToggleContainer>
        <ToggleButton onClick={() => toggleMode('add')} className={mode === 'add' ? 'active' : ''}>
          Add New
        </ToggleButton>
        <ToggleButton onClick={() => toggleMode('edit')} className={mode === 'edit' ? 'active' : ''}>
          Edit Existing
        </ToggleButton>
        {mode === 'edit' && (
          <select value={selectedAthleteId} onChange={(e) => handleAthleteSelect(e.target.value)}>
            <option value="">Select an athlete</option>
            {dummyAthletes.map(ath => (
              <option key={ath._id} value={ath._id}>
                {ath.firstName} {ath.lastName}
              </option>
            ))}
          </select>
        )}
      </ToggleContainer>

      {/* Base Athlete Information */}
      <Section>
        <h2>Base Athlete Information</h2>
        <StyledInput
          type="text"
          placeholder="First Name"
          value={baseData.firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBaseData({ ...baseData, firstName: e.target.value })
          }
        />
        <StyledInput
          type="text"
          placeholder="Last Name"
          value={baseData.lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBaseData({ ...baseData, lastName: e.target.value })
          }
        />
        <StyledSelect
          value={baseData.year}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setBaseData({ ...baseData, year: e.target.value as Athlete['year'] })
          }
        >
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </StyledSelect>
        <StyledInput
          type="text"
          placeholder="Sports"
          value={baseData.sports}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBaseData({ ...baseData, sports: e.target.value })
          }
        />
        <StyledInput
          type="text"
          placeholder="Portrait Photo URL"
          value={baseData.portraitPhoto}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBaseData({ ...baseData, portraitPhoto: e.target.value })
          }
        />
        <StyledTextarea
          placeholder="Biography"
          value={baseData.biography}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setBaseData({ ...baseData, biography: e.target.value })
          }
        />
      </Section>

      {/* Available Data Cards */}
      <Section>
        <h2>Available Data Cards</h2>
        <ListContainer>
          {availableCardOptions.map(option => (
            <AvailableItem key={option.id} onClick={() => handleAddCard(option)}>
              {option.title}
            </AvailableItem>
          ))}
        </ListContainer>
      </Section>

      {/* Active Data Cards (Editable) */}
      <Section>
        <h2>Active Data Cards</h2>
        <ActiveCardsWrapper>
          {activeCards.map((card, index) => (
            <ActiveCardContainer key={card.instanceId}>
              <Box>{card.title}</Box>
              <ControlRow>
                <button onClick={() => moveUp(index)} disabled={index === 0}>
                  ↑
                </button>
                <button onClick={() => moveDown(index)} disabled={index === activeCards.length - 1}>
                  ↓
                </button>
                <button onClick={() => deleteCard(card.instanceId)}>X</button>
              </ControlRow>
              {/* Editable form for a footballStats card */}
              {card.type === 'footballStats' && (
                <Vertical gap="0.5rem">
                  <StyledInput
                    type="text"
                    placeholder="Team Name"
                    value={(card.data as FootballSeasonStatsData).teamName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newValue: FootballSeasonStatsData = {
                        ...(card.data as FootballSeasonStatsData),
                        teamName: e.target.value,
                      };
                      setActiveCards(prev =>
                        prev.map((item) =>
                          item.instanceId === card.instanceId ? { ...item, data: newValue } : item
                        )
                      );
                    }}
                  />
                  <StyledInput
                    type="number"
                    placeholder="Season (e.g., 2023)"
                    value={(card.data as FootballSeasonStatsData).season || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newValue: FootballSeasonStatsData = {
                        ...(card.data as FootballSeasonStatsData),
                        season: Number(e.target.value),
                      };
                      setActiveCards(prev =>
                        prev.map((item) =>
                          item.instanceId === card.instanceId ? { ...item, data: newValue } : item
                        )
                      );
                    }}
                  />
                  <StyledInput
                    type="number"
                    placeholder="Wins"
                    value={(card.data as FootballSeasonStatsData).wins || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newValue: FootballSeasonStatsData = {
                        ...(card.data as FootballSeasonStatsData),
                        wins: Number(e.target.value),
                      };
                      setActiveCards(prev =>
                        prev.map((item) =>
                          item.instanceId === card.instanceId ? { ...item, data: newValue } : item
                        )
                      );
                    }}
                  />
                  <StyledInput
                    type="number"
                    placeholder="Losses"
                    value={(card.data as FootballSeasonStatsData).losses || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newValue: FootballSeasonStatsData = {
                        ...(card.data as FootballSeasonStatsData),
                        losses: Number(e.target.value),
                      };
                      setActiveCards(prev =>
                        prev.map((item) =>
                          item.instanceId === card.instanceId ? { ...item, data: newValue } : item
                        )
                      );
                    }}
                  />
                </Vertical>
              )}
            </ActiveCardContainer>
          ))}
        </ActiveCardsWrapper>
      </Section>

      {/* Final Actions */}
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
