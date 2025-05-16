import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { db, storage } from '../../../firebase';
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { PageContainer, ToggleContainer, ToggleButton, Section, StyledInput, StyledSelect, StyledTextarea, ListContainer, AvailableItem, ActiveCardContainer, ControlRow, SaveButton, ClearButton, DeleteButton, ActionContainer, ActiveCardsWrapper, } from './manageathlete.styles';
import { Box } from '../../components/layout/atoms';
// Data card options
const OPTIONS = [
    { id: 1, title: 'Football Stats Card', type: 'footballSeason' },
    { id: 2, title: 'Baseball Stats Card', type: 'baseballSeason' },
    { id: 3, title: 'Basketball Stats Card', type: 'basketballSeason' },
    { id: 4, title: 'Soccer Stats Card', type: 'soccerSeason' },
];
const ManageAthlete = () => {
    const [athletes, setAthletes] = useState([]);
    const [mode, setMode] = useState('add');
    const [selectedId, setSelectedId] = useState('');
    const [base, setBase] = useState({
        firstName: '', lastName: '', year: 'Freshman',
        sport: '', portraitPhoto: '', biography: '', portraitPhotoFile: null,
    });
    const [cards, setCards] = useState([]);
    // Fetch athletes from Firestore
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
    const loadAthlete = (a) => {
        setBase({
            firstName: a.firstName, lastName: a.lastName, year: a.year,
            sport: a.sport, portraitPhoto: a.portraitPhoto, biography: a.biography ?? '',
            portraitPhotoFile: null, // Reset portrait file when loading an athlete
        });
        setCards(a.portfolioData ?? []);
    };
    const save = async () => {
        const payload = { ...base, portfolioData: cards };
        console.log('Uploaded successfully.:', { payload });
        try {
            if (mode === 'add') {
                // Save the new athlete to Firestore
                const docRef = await addDoc(collection(db, 'athletes'), payload);
                // Optionally, update the state to include the newly added athlete
                const newAthlete = { ...payload, _id: docRef.id }; // Include the Firestore document ID
                setAthletes((prev) => [...prev, newAthlete]); // Add the new athlete to the state
            }
            else {
                // Handle updating existing athlete logic here
                await addDoc(collection(db, 'athletes'), payload); // If it's an update, use the appropriate Firestore method
            }
            console.log('Athlete saved successfully:', payload);
        }
        catch (error) {
            console.error("Error saving athlete:", error);
        }
        reset();
    };
    const removeAthlete = async () => {
        if (!selectedId)
            return;
        try {
            if (window.confirm('Delete this athlete permanently?')) {
                const athleteRef = doc(db, 'athletes', selectedId);
                await deleteDoc(athleteRef); // Delete athlete from Firestore
                // Remove the athlete from the local state
                setAthletes(prev => prev.filter(a => a._id !== selectedId));
                reset(); // Reset the form and selected athlete
            }
        }
        catch (error) {
            console.error('Error deleting athlete:', error);
        }
    };
    const addCard = (o) => {
        const newCard = {
            instanceId: Date.now().toString(),
            type: o.type,
            title: o.title,
            data: {}
        };
        setCards(c => [...c, newCard]);
    };
    const removeCard = (instanceId) => {
        setCards(c => c.filter(card => card.instanceId !== instanceId));
    };
    const updateCardData = (instanceId, field, value) => {
        setCards(prevCards => prevCards.map(card => {
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
        }));
    };
    const swap = (i, j) => {
        setCards(c => {
            const newCards = [...c];
            [newCards[i], newCards[j]] = [newCards[j], newCards[i]]; // Swap cards
            return newCards;
        });
    };
    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file)
            return;
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
        }
        catch (error) {
            console.error('Upload failed:', error);
            // Optionally show a user-facing error message
        }
    };
    return (_jsxs(PageContainer, { children: [_jsxs(ToggleContainer, { children: [_jsx(ToggleButton, { onClick: () => { if (mode !== 'add') {
                            reset();
                            setMode('add');
                        } }, className: mode === 'add' ? 'active' : '', children: "Add New" }), _jsx(ToggleButton, { onClick: () => { if (mode !== 'edit') {
                            reset();
                            setMode('edit');
                        } }, className: mode === 'edit' ? 'active' : '', children: "Edit Existing" }), mode === 'edit' && (_jsxs(StyledSelect, { value: selectedId, onChange: e => {
                            const selectedAthleteId = e.target.value;
                            setSelectedId(selectedAthleteId);
                            const selectedAthlete = athletes.find(a => a._id === selectedAthleteId);
                            if (selectedAthlete)
                                loadAthlete(selectedAthlete);
                        }, children: [_jsx("option", { value: "", children: "Select athlete" }), athletes.map(a => (_jsxs("option", { value: a._id, children: [a.firstName, " ", a.lastName] }, a._id)))] }))] }), _jsxs(Section, { children: [_jsx("h2", { children: "Base Athlete Information" }), _jsx(StyledInput, { placeholder: "First name", value: base.firstName, onChange: e => setBase({ ...base, firstName: e.target.value }) }), _jsx(StyledInput, { placeholder: "Last name", value: base.lastName, onChange: e => setBase({ ...base, lastName: e.target.value }) }), _jsx(StyledSelect, { value: base.year, onChange: e => setBase({ ...base, year: e.target.value }), children: ['Freshman', 'Sophomore', 'Junior', 'Senior'].map(y => _jsx("option", { value: y, children: y }, y)) }), _jsx(StyledSelect, { value: base.sport, onChange: e => setBase({ ...base, sport: e.target.value }), children: ['Football', 'Basketball', 'Baseball', 'Soccer'].map(y => _jsx("option", { value: y, children: y }, y)) }), _jsx("input", { type: "file", onChange: handleFileChange }), _jsx(StyledTextarea, { placeholder: "Biography", value: base.biography, onChange: e => setBase({ ...base, biography: e.target.value }) })] }), _jsxs(Section, { children: [_jsx("h2", { children: "Available Data Cards" }), _jsx(ListContainer, { children: OPTIONS.map(o => (_jsx(AvailableItem, { onClick: () => addCard(o), children: o.title }, o.id))) })] }), _jsxs(Section, { children: [_jsx("h2", { children: "Active Data Cards" }), _jsx(ActiveCardsWrapper, { children: cards.map((card, i) => (_jsxs(ActiveCardContainer, { children: [_jsx(Box, { fontWeight: 700, children: card.title }), _jsxs(ControlRow, { children: [_jsx("button", { disabled: i === 0, onClick: () => swap(i, i - 1), children: "\u2191" }), _jsx("button", { disabled: i === cards.length - 1, onClick: () => swap(i, i + 1), children: "\u2193" }), _jsx("button", { onClick: () => removeCard(card.instanceId), children: "\u2715" })] }), card.type === 'footballSeason' && (_jsxs(_Fragment, { children: [_jsx(StyledInput, { placeholder: "Team Name", value: card.data.teamName ?? '', onChange: (e) => updateCardData(card.instanceId, 'teamName', e.target.value) }), _jsx(StyledInput, { placeholder: "Season", value: card.data.season ?? '', onChange: (e) => updateCardData(card.instanceId, 'season', e.target.value) }), _jsx(StyledInput, { placeholder: "Wins", value: card.data.wins ?? '', onChange: (e) => updateCardData(card.instanceId, 'wins', e.target.value) }), _jsx(StyledInput, { placeholder: "Losses", value: card.data.losses ?? '', onChange: (e) => updateCardData(card.instanceId, 'losses', e.target.value) })] }))] }, card.instanceId))) })] }), _jsx(Section, { children: _jsxs(ActionContainer, { children: [_jsx(ClearButton, { onClick: reset, children: "Clear" }), _jsx(SaveButton, { onClick: save, children: "Save Athlete" }), mode === 'edit' && selectedId && _jsx(DeleteButton, { onClick: removeAthlete, children: "Delete Athlete" })] }) })] }));
};
export default ManageAthlete;
