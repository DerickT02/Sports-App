import React, { useState, useEffect } from 'react';
import { Athlete } from '../../../../shared/types/athlete';
import { DataCard, DataCardType } from '../../../../shared/types/dataCard';
import { db, storage } from '../../../firebase'; 
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
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

import { Box } from '../../components/layout/atoms';

// Data card options
const OPTIONS: DataCardOption[] = [
  { id: 1, title: 'Football Stats Card', type: 'footballSeason' },
  { id: 2, title: 'Baseball Stats Card', type: 'baseballSeason' },
  { id: 3, title: 'Basketball Stats Card', type: 'basketballSeason' },
  { id: 4, title: 'Soccer Stats Card', type: 'soccerSeason' },
];

interface DataCardOption { 
  id: number; 
  title: string; 
  type: DataCardType; 
}

type DataCardType = 'footballSeason' | 'baseballSeason' | 'basketballSeason' | 'soccerSeason';

const ManageAthlete: React.FC = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [mode, setMode] = useState<'add' | 'edit'>('add');
  const [selectedId, setSelectedId] = useState('');
  const [base, setBase] = useState({
    firstName: '', lastName: '', year: 'Freshman' as Athlete['year'],
    sport: '', portraitPhoto: '', biography: '', portraitPhotoFile: null as File | null,
  });
  const [cards, setCards] = useState<DataCard[]>([]);

  // Fetch athletes from Firestore
  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'athletes'));
        const data: Athlete[] = snapshot.docs.map(doc => ({
          _id: doc.id,
          ...doc.data()
        })) as Athlete[];
        setAthletes(data);
      } catch (error) {
        console.error('Error fetching athletes:', error);
      }
    };
    fetchAthletes();
  }, []);

  const reset = () => {
    setBase({ firstName: '', lastName: '', year: 'Freshman', sport: '', portraitPhoto: '', biography: '', portraitPhotoFile: null });
    setCards([]); 
    setSelectedId('');
  };

  const loadAthlete = (a: Athlete) => {
    setBase({
      firstName: a.firstName, lastName: a.lastName, year: a.year,
      sport: a.sport, portraitPhoto: a.portraitPhoto, biography: a.biography ?? '',
      portraitPhotoFile: null, // Reset portrait file when loading an athlete
    });
    setCards(a.portfolioData ?? []);
  };

  const save = async () => {
    const payload: Partial<Athlete> = { ...base, portfolioData: cards };
    console.log('Uploaded successfully.:', {payload});
    
    try {
      if (mode === 'add') {
        // Save the new athlete to Firestore
        const docRef = await addDoc(collection(db, 'athletes'), payload);
        
        // Optionally, update the state to include the newly added athlete
        const newAthlete = { ...payload, _id: docRef.id }; // Include the Firestore document ID
        setAthletes((prev) => [...prev, newAthlete]); // Add the new athlete to the state
      } else {
        // Handle updating existing athlete logic here
        await addDoc(collection(db, 'athletes'), payload); // If it's an update, use the appropriate Firestore method
      }
      console.log('Athlete saved successfully:', payload);
    } catch (error) {
      console.error("Error saving athlete:", error);
    }
    reset();
  };

  const removeAthlete = async () => {
    if (!selectedId) return;

    try {
      if (window.confirm('Delete this athlete permanently?')) {
        const athleteRef = doc(db, 'athletes', selectedId);
        await deleteDoc(athleteRef); // Delete athlete from Firestore

        // Remove the athlete from the local state
        setAthletes(prev => prev.filter(a => a._id !== selectedId));

        reset(); // Reset the form and selected athlete
      }
    } catch (error) {
      console.error('Error deleting athlete:', error);
    }
  };

  const addCard = (o: DataCardOption) => {
    const newCard: DataCard = { 
      instanceId: Date.now().toString(), 
      type: o.type, 
      title: o.title, 
      data: {} 
    };
    setCards(c => [...c, newCard]);
  };

  const removeCard = (instanceId: string) => {
    setCards(c => c.filter(card => card.instanceId !== instanceId));
  };

  const updateCardData = (instanceId: string, field: string, value: any) => {
    setCards(prevCards => 
      prevCards.map(card => {
        if (card.instanceId === instanceId) {
          return { 
            ...card, 
            data: { 
              ...card.data, 
              [field]: value 
            } 
          };
        }
        return card;
      })
    );
  };

  const swap = (i: number, j: number) => {
    setCards(c => {
      const newCards = [...c];
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]]; // Swap cards
      return newCards;
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      // Create a storage reference with a unique file name (e.g. timestamp + file name)
      const fileRef = ref(storage, `athletePortraits/${Date.now()}_${file.name}`);

      // Upload the file
      await uploadBytes(fileRef, file);

      // Get the URL
      const url = await getDownloadURL(fileRef);

      // Update state with the image URL (for portraitPhoto)
      setBase((prev) => ({
        ...prev,
        portraitPhoto: url, // store the download URL, not the file itself
      }));

    } catch (error) {
      console.error('Upload failed:', error);
      // Optionally show a user-facing error message
    }
  };

  return (
    <PageContainer>
      <ToggleContainer>
        <ToggleButton onClick={() => { if (mode !== 'add') { reset(); setMode('add'); } }} className={mode === 'add' ? 'active' : ''}>Add New</ToggleButton>
        <ToggleButton onClick={() => { if (mode !== 'edit') { reset(); setMode('edit'); } }} className={mode === 'edit' ? 'active' : ''}>Edit Existing</ToggleButton>

        {mode === 'edit' && (
          <StyledSelect value={selectedId} onChange={e => { 
            const selectedAthleteId = e.target.value;
            setSelectedId(selectedAthleteId); 
            const selectedAthlete = athletes.find(a => a._id === selectedAthleteId);
            if (selectedAthlete) loadAthlete(selectedAthlete); 
          }}>
            <option value="">Select athlete</option>
            {athletes.map(a => (
              <option key={a._id} value={a._id}>{a.firstName} {a.lastName}</option>
            ))}
          </StyledSelect>
        )}
      </ToggleContainer>

      <Section>
        <h2>Base Athlete Information</h2>
        <StyledInput placeholder="First name" value={base.firstName} onChange={e => setBase({ ...base, firstName: e.target.value })} />
        <StyledInput placeholder="Last name" value={base.lastName} onChange={e => setBase({ ...base, lastName: e.target.value })} />
        <StyledSelect value={base.year} onChange={e => setBase({ ...base, year: e.target.value as Athlete['year'] })}>
          {['Freshman', 'Sophomore', 'Junior', 'Senior'].map(y => <option key={y} value={y}>{y}</option>)}
        </StyledSelect>
        <StyledSelect value={base.sport} onChange={e => setBase({ ...base, sport: e.target.value as Athlete['sport'] })}>
          {['Football', 'Basketball', 'Baseball', 'Soccer'].map(y => <option key={y} value={y}>{y}</option>)}
        </StyledSelect>
        {/* File input for portrait */}
        <input type="file" onChange={handleFileChange} />
        <StyledTextarea placeholder="Biography" value={base.biography} onChange={e => setBase({ ...base, biography: e.target.value })} />
      </Section>

      <Section>
        <h2>Available Data Cards</h2>
        <ListContainer>
          {OPTIONS.map(o => (
            <AvailableItem key={o.id} onClick={() => addCard(o)}>
              {o.title}
            </AvailableItem>
          ))}
        </ListContainer>
      </Section>

      <Section>
        <h2>Active Data Cards</h2>
        <ActiveCardsWrapper>
          {cards.map((card, i) => (
            <ActiveCardContainer key={card.instanceId}>
              <Box fontWeight={700}>{card.title}</Box>
              <ControlRow>
                <button disabled={i === 0} onClick={() => swap(i, i - 1)}>↑</button>
                <button disabled={i === cards.length - 1} onClick={() => swap(i, i + 1)}>↓</button>
                <button onClick={() => removeCard(card.instanceId)}>✕</button>
              </ControlRow>

              {/* Editable fields for each data card */}
              {card.type === 'footballSeason' && (
                <>
                  <StyledInput
                    placeholder="Team Name"
                    value={card.data.teamName ?? ''}
                    onChange={(e) => updateCardData(card.instanceId, 'teamName', e.target.value)}
                  />
                  <StyledInput
                    placeholder="Season"
                    value={card.data.season ?? ''}
                    onChange={(e) => updateCardData(card.instanceId, 'season', e.target.value)}
                  />
                  <StyledInput
                    placeholder="Wins"
                    value={card.data.wins ?? ''}
                    onChange={(e) => updateCardData(card.instanceId, 'wins', e.target.value)}
                  />
                  <StyledInput
                    placeholder="Losses"
                    value={card.data.losses ?? ''}
                    onChange={(e) => updateCardData(card.instanceId, 'losses', e.target.value)}
                  />
                </>
              )}
            </ActiveCardContainer>
          ))}
        </ActiveCardsWrapper>
      </Section>

      <Section>
        <ActionContainer>
          <ClearButton onClick={reset}>Clear</ClearButton>
          <SaveButton onClick={save}>Save Athlete</SaveButton>
          {mode === 'edit' && selectedId && <DeleteButton onClick={removeAthlete}>Delete Athlete</DeleteButton>}
        </ActionContainer>
      </Section>
    </PageContainer>
  );
};

export default ManageAthlete;
