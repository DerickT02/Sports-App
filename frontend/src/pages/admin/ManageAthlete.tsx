// ManageAthlete.tsx
import React, { useState, useEffect } from 'react';
import { Athlete } from '../../../../shared/types/athlete';
import {
  DataCard,
  DataCardType,
  FootballSeasonStatsData,
} from '../../../../shared/types/dataCard';

import {
  PageContainer,
  ToggleContainer,
  ToggleButton,
  Section,
  StyledInput,
  StyledSelect,
  StyledTextarea,
  ListContainer,
  AvailableItem,
  ActiveCardContainer,
  ControlRow,
  SaveButton,
  ClearButton,
  DeleteButton,          // <- add in your *.styles.ts next to Save / Clear
  ActionContainer,
  ActiveCardsWrapper,
} from './manageathlete.styles';

import { Box, Vertical } from '../../components/layout/atoms';
import {
  getAthletes,
  addAthlete,
  updateAthlete,
  deleteAthlete,
} from '../../api/athletes';

/* ---------- helpers / local types ---------- */
interface DataCardOption {
  id: number;
  title: string;
  type: DataCardType;
}

/* instead of an empty interface extend, just alias  */
type ActiveCard = DataCard;

const availableCardOptions: DataCardOption[] = [
  { id: 1, title: 'Football Stats Card (Style A)', type: 'footballStats' },
  { id: 2, title: 'Football Stats Card (Style B)', type: 'footballStats' },
];

/* ---------- component ---------- */
const ManageAthlete: React.FC = () => {
  /* server data --------------------------------------------------------- */
  const [athletes, setAthletes] = useState<Athlete[]>([]);

  useEffect(() => {
    getAthletes()
      .then((r) => setAthletes(r.data))
      .catch(console.error);
  }, []);

  /* form state ---------------------------------------------------------- */
  const [mode, setMode] = useState<'add' | 'edit'>('add');
  const [selectedAthleteId, setSelectedAthleteId] = useState('');
  const [baseData, setBaseData] = useState({
    firstName: '',
    lastName: '',
    year: 'Freshman' as Athlete['year'],
    sports: '',
    portraitPhoto: '',
    biography: '',
  });
  const [activeCards, setActiveCards] = useState<ActiveCard[]>([]);

  /* utility ------------------------------------------------------------- */
  const generateInstanceId = (o: DataCardOption) =>
    `${o.id}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

  /* card handlers ------------------------------------------------------- */
  const handleAddCard = (o: DataCardOption) => {
    const instanceId = generateInstanceId(o);
    setActiveCards((prev) => [
      ...prev,
      {
        instanceId,
        type: o.type,
        title: o.title,
        data: { teamName: '', season: 0, wins: 0, losses: 0 },
      },
    ]);
  };

  const moveUp = (idx: number) =>
    idx > 0 &&
    setActiveCards((l) => {
      const copy = [...l];
      [copy[idx - 1], copy[idx]] = [copy[idx], copy[idx - 1]];
      return copy;
    });

  const moveDown = (idx: number) =>
    idx < activeCards.length - 1 &&
    setActiveCards((l) => {
      const copy = [...l];
      [copy[idx], copy[idx + 1]] = [copy[idx + 1], copy[idx]];
      return copy;
    });

  const deleteCard = (id: string) =>
    setActiveCards((prev) => prev.filter((c) => c.instanceId !== id));

  /* mode / athlete switching ------------------------------------------- */
  const resetForm = () => {
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
  };

  const toggleMode = (m: 'add' | 'edit') => {
    if (m !== mode && window.confirm('Switching modes will clear current data. Proceed?')) {
      setMode(m);
      resetForm();
    }
  };

  const loadAthleteData = (a: Athlete) => {
    setBaseData({
      firstName: a.firstName,
      lastName: a.lastName,
      year: a.year,
      sports: a.sports,
      portraitPhoto: a.portraitPhoto,
      biography: a.biography ?? '',
    });
    setActiveCards((a.portfolioData ?? []) as ActiveCard[]);
  };

  const handleAthleteSelect = (id: string) => {
    setSelectedAthleteId(id);
    const found = athletes.find((a) => a._id === id);
    if (found) loadAthleteData(found);
  };

  /* save / delete ------------------------------------------------------- */
  const handleSave = async () => {
    const payload: Partial<Athlete> = {
      ...baseData,
      portfolioData: activeCards,
    };

    if (mode === 'add') {
      await addAthlete(payload);
    } else if (selectedAthleteId) {
      await updateAthlete(selectedAthleteId, payload);
    }

    /* refresh list */
    const { data } = await getAthletes();
    setAthletes(data);
    if (mode === 'add') resetForm();
  };

  const handleDelete = async () => {
    if (!selectedAthleteId) return;
    const ok = window.confirm('Delete this athlete permanently?');
    if (!ok) return;
    await deleteAthlete(selectedAthleteId);

    const { data } = await getAthletes();
    setAthletes(data);
    resetForm();
  };

  /* clear --------------------------------------------------------------- */
  const handleClear = () => {
    if (window.confirm('Clear all data?')) resetForm();
  };

  /* -------------------------------------------------------------------- */
  return (
    <PageContainer>
      {/* mode toggle ---------------------------------------------------- */}
      <ToggleContainer>
        <ToggleButton
          onClick={() => toggleMode('add')}
          className={mode === 'add' ? 'active' : ''}
        >
          Add New
        </ToggleButton>
        <ToggleButton
          onClick={() => toggleMode('edit')}
          className={mode === 'edit' ? 'active' : ''}
        >
          Edit Existing
        </ToggleButton>

        {mode === 'edit' && (
          <StyledSelect
            value={selectedAthleteId}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleAthleteSelect(e.target.value)
            }
          >
            <option value="">Select an athlete</option>
            {athletes.map((a) => (
              <option key={a._id} value={a._id}>
                {a.firstName} {a.lastName}
              </option>
            ))}
          </StyledSelect>
        )}
      </ToggleContainer>

      {/* base info ------------------------------------------------------ */}
      <Section>
        <h2>Base Athlete Information</h2>
        <StyledInput
          placeholder="First Name"
          value={baseData.firstName}
          onChange={(e) => setBaseData({ ...baseData, firstName: e.target.value })}
        />
        <StyledInput
          placeholder="Last Name"
          value={baseData.lastName}
          onChange={(e) => setBaseData({ ...baseData, lastName: e.target.value })}
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
          placeholder="Sports"
          value={baseData.sports}
          onChange={(e) => setBaseData({ ...baseData, sports: e.target.value })}
        />
        <StyledInput
          placeholder="Portrait Photo URL"
          value={baseData.portraitPhoto}
          onChange={(e) => setBaseData({ ...baseData, portraitPhoto: e.target.value })}
        />
        <StyledTextarea
          placeholder="Biography"
          value={baseData.biography}
          onChange={(e) => setBaseData({ ...baseData, biography: e.target.value })}
        />
      </Section>

      {/* available cards ------------------------------------------------ */}
      <Section>
        <h2>Available Data Cards</h2>
        <ListContainer>
          {availableCardOptions.map((o) => (
            <AvailableItem key={o.id} onClick={() => handleAddCard(o)}>
              {o.title}
            </AvailableItem>
          ))}
        </ListContainer>
      </Section>

      {/* active cards --------------------------------------------------- */}
      <Section>
        <h2>Active Data Cards</h2>
        <ActiveCardsWrapper>
          {activeCards.map((card, idx) => (
            <ActiveCardContainer key={card.instanceId}>
              <Box>{card.title}</Box>
              <ControlRow>
                <button onClick={() => moveUp(idx)} disabled={idx === 0}>
                  ↑
                </button>
                <button
                  onClick={() => moveDown(idx)}
                  disabled={idx === activeCards.length - 1}
                >
                  ↓
                </button>
                <button onClick={() => deleteCard(card.instanceId)}>X</button>
              </ControlRow>

              {/* only one card type for now -------------------------------- */}
              {card.type === 'footballStats' && (
                <Vertical gap="0.5rem">
                  <StyledInput
                    placeholder="Team Name"
                    value={(card.data as FootballSeasonStatsData).teamName}
                    onChange={(e) => {
                      const updated = {
                        ...(card.data as FootballSeasonStatsData),
                        teamName: e.target.value,
                      };
                      setActiveCards((p) =>
                        p.map((c) =>
                          c.instanceId === card.instanceId ? { ...c, data: updated } : c
                        )
                      );
                    }}
                  />
                  <StyledInput
                    type="number"
                    placeholder="Season (e.g. 2023)"
                    value={(card.data as FootballSeasonStatsData).season || ''}
                    onChange={(e) => {
                      const updated = {
                        ...(card.data as FootballSeasonStatsData),
                        season: Number(e.target.value),
                      };
                      setActiveCards((p) =>
                        p.map((c) =>
                          c.instanceId === card.instanceId ? { ...c, data: updated } : c
                        )
                      );
                    }}
                  />
                  <StyledInput
                    type="number"
                    placeholder="Wins"
                    value={(card.data as FootballSeasonStatsData).wins || ''}
                    onChange={(e) => {
                      const updated = {
                        ...(card.data as FootballSeasonStatsData),
                        wins: Number(e.target.value),
                      };
                      setActiveCards((p) =>
                        p.map((c) =>
                          c.instanceId === card.instanceId ? { ...c, data: updated } : c
                        )
                      );
                    }}
                  />
                  <StyledInput
                    type="number"
                    placeholder="Losses"
                    value={(card.data as FootballSeasonStatsData).losses || ''}
                    onChange={(e) => {
                      const updated = {
                        ...(card.data as FootballSeasonStatsData),
                        losses: Number(e.target.value),
                      };
                      setActiveCards((p) =>
                        p.map((c) =>
                          c.instanceId === card.instanceId ? { ...c, data: updated } : c
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

      {/* actions -------------------------------------------------------- */}
      <Section>
        <ActionContainer>
          <ClearButton onClick={handleClear}>Clear</ClearButton>
          {mode === 'edit' && selectedAthleteId && (
            <DeleteButton onClick={handleDelete}>Delete Athlete</DeleteButton>
          )}
          <SaveButton onClick={handleSave}>Save Athlete</SaveButton>
        </ActionContainer>
      </Section>
    </PageContainer>
  );
};

export default ManageAthlete;
