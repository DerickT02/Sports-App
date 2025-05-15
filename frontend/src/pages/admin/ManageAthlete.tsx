import React, { useState, useEffect } from 'react';
import { Athlete } from '../../../../shared/types/athlete';
import { DataCard, DataCardType, FootballSeasonStatsData } from '../../../../shared/types/dataCard';

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
  DeleteButton,
  ActionContainer,
  ActiveCardsWrapper,
} from './manageathlete.styles';

import { Box, Vertical } from '../../components/layout/atoms';
import { getAthletes, addAthlete, updateAthlete, deleteAthlete } from '../../api/athletes';

/* ------------------------------------------------------------------ */
interface DataCardOption { id: number; title: string; type: DataCardType; }
type ActiveCard = DataCard;

const OPTIONS: DataCardOption[] = [
  { id: 1, title: 'Football Stats Card (A)', type: 'footballStats' },
  { id: 2, title: 'Football Stats Card (B)', type: 'footballStats' },
];

const ManageAthlete: React.FC = () => {
  /* ---------- server data ---------- */
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  useEffect(() => { getAthletes().then(r => setAthletes(r.data)); }, []);

  /* ---------- form state ---------- */
  const [mode, setMode] = useState<'add' | 'edit'>('add');
  const [selectedId, setSelectedId] = useState('');
  const [base, setBase] = useState({
    firstName: '', lastName: '', year: 'Freshman' as Athlete['year'],
    sports: '', portraitPhoto: '', biography: '',
  });
  const [cards, setCards] = useState<ActiveCard[]>([]);

  /* ---------- helpers ---------- */
  const reset = () => {
    setBase({ firstName: '', lastName: '', year: 'Freshman', sports: '', portraitPhoto: '', biography: '' });
    setCards([]); setSelectedId('');
  };
  const instanceId = (o: DataCardOption) => `${o.id}-${Date.now()}-${Math.random().toString(36).slice(2,9)}`;

  /* ---------- card ops ---------- */
  const addCard = (o: DataCardOption) =>
    setCards(c => [...c, { instanceId: instanceId(o), type: o.type, title: o.title,
      data: { teamName: '', season: 0, wins: 0, losses: 0 } }]);

  const swap = (i: number, j: number) =>
    setCards(c => { const arr = [...c]; [arr[i], arr[j]] = [arr[j], arr[i]]; return arr; });

  const removeCard = (id: string) => setCards(c => c.filter(k => k.instanceId !== id));

  /* ---------- athlete selection ---------- */
  const loadAthlete = (a: Athlete) => {
    setBase({ firstName: a.firstName, lastName: a.lastName, year: a.year,
      sports: a.sports, portraitPhoto: a.portraitPhoto, biography: a.biography ?? '' });
    setCards((a.portfolioData ?? []) as ActiveCard[]);
  };

  /* ---------- save / delete ---------- */
  const save = async () => {
    const payload: Partial<Athlete> = { ...base, portfolioData: cards };
    mode === 'add' ? await addAthlete(payload) :
    selectedId && await updateAthlete(selectedId, payload);
    getAthletes().then(r => setAthletes(r.data));
    if (mode === 'add') reset();
  };

  const removeAthlete = async () => {
    if (!selectedId) return;
    if (!window.confirm('Delete this athlete permanently?')) return;
    await deleteAthlete(selectedId);
    getAthletes().then(r => setAthletes(r.data));
    reset();
  };

  /* ---------- UI ---------- */
  return (
    <PageContainer>
      {/* toggle */}
      <ToggleContainer>
        <ToggleButton onClick={() => { if (mode!=='add') { reset(); setMode('add'); } }} className={mode === 'add' ? 'active' : ''}>Add New</ToggleButton>
        <ToggleButton onClick={() => { if (mode!=='edit') { reset(); setMode('edit'); } }} className={mode === 'edit' ? 'active' : ''}>Edit Existing</ToggleButton>

        {mode === 'edit' && (
          <StyledSelect value={selectedId} onChange={e => { setSelectedId(e.target.value); const a = athletes.find(x => x._id === e.target.value); if (a) loadAthlete(a); }}>
            <option value="">Select athlete</option>
            {athletes.map(a => <option key={a._id} value={a._id}>{a.firstName} {a.lastName}</option>)}
          </StyledSelect>
        )}
      </ToggleContainer>

      {/* base info */}
      <Section>
        <h2>Base Athlete Information</h2>
        <StyledInput placeholder="First name" value={base.firstName}  onChange={e => setBase({ ...base, firstName: e.target.value })} />
        <StyledInput placeholder="Last name"  value={base.lastName}   onChange={e => setBase({ ...base, lastName:  e.target.value })} />
        <StyledSelect value={base.year} onChange={e => setBase({ ...base, year: e.target.value as Athlete['year'] })}>
          {['Freshman','Sophomore','Junior','Senior'].map(y => <option key={y} value={y}>{y}</option>)}
        </StyledSelect>
        <StyledInput placeholder="Sports" value={base.sports} onChange={e => setBase({ ...base, sports: e.target.value })} />
        <StyledInput placeholder="Portrait URL" value={base.portraitPhoto} onChange={e => setBase({ ...base, portraitPhoto: e.target.value })} />
        <StyledTextarea placeholder="Biography" value={base.biography} onChange={e => setBase({ ...base, biography: e.target.value })} />
      </Section>

      {/* options */}
      <Section>
        <h2>Available Data Cards</h2>
        <ListContainer>{OPTIONS.map(o => <AvailableItem key={o.id} onClick={() => addCard(o)}>{o.title}</AvailableItem>)}</ListContainer>
      </Section>

      {/* active cards */}
      <Section>
        <h2>Active Data Cards</h2>
        <ActiveCardsWrapper>
          {cards.map((card, i) => (
            <ActiveCardContainer key={card.instanceId}>
              <Box fontWeight={700}>{card.title}</Box>
              <ControlRow>
                <button disabled={i===0} onClick={() => swap(i, i-1)}>↑</button>
                <button disabled={i===cards.length-1} onClick={() => swap(i, i+1)}>↓</button>
                <button onClick={() => removeCard(card.instanceId)}>✕</button>
              </ControlRow>
              {/* football card editor */}
              {card.type==='footballStats' && (
                <Vertical gap="0.5rem">
                  {(['teamName','season','wins','losses'] as const).map(field => (
                    <StyledInput key={field} type={field==='teamName' ? 'text':'number'}
                      placeholder={field.charAt(0).toUpperCase()+field.slice(1)}
                      value={(card.data as any)[field] ?? ''}
                      onChange={e => {
                        const v = field==='teamName' ? e.target.value : Number(e.target.value);
                        setCards(list => list.map(c => c.instanceId===card.instanceId ? { ...c, data:{ ...(c.data as any), [field]:v } }:c));
                      }} />
                  ))}
                </Vertical>
              )}
            </ActiveCardContainer>
          ))}
        </ActiveCardsWrapper>
      </Section>

      {/* actions */}
      <Section>
        <ActionContainer>
          <ClearButton onClick={reset}>Clear</ClearButton>
          {mode==='edit' && selectedId && <DeleteButton onClick={removeAthlete}>Delete Athlete</DeleteButton>}
          <SaveButton onClick={save}>Save Athlete</SaveButton>
        </ActionContainer>
      </Section>
    </PageContainer>
  );
};

export default ManageAthlete;
