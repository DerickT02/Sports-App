// src/data/dummyAthletes.ts

import { Athlete } from '../../../../shared/types/athlete';
import AmosAguilera from '../../assets/athletes/Amos_Aguilera.png'
import Lebron from '../../assets/athletes/Lebron.png'
import Edmond from '../../assets/athletes/Edmond.png'

export const dummyAthletes: Athlete[] = [
  {
    _id: '1',
    firstName: 'Amos',
    lastName: 'Aguilera',
    year: 'Junior',
    sports: 'Baseball/Basketball',
    portraitPhoto: AmosAguilera,
    biography: '',
    portfolioData: [
      {
        instanceId: '1-1630000000000-abc123xyz',
        type: 'footballStats',
        title: 'Football Stats Card (Style A)',
        data: { teamName: 'Tigers', season: 2020, wins: 83, losses: 4 },
      },
      {
        instanceId: '1-1630000000000-abc123xyz',
        type: 'footballStats',
        title: 'Football Stats Card (Style B)',
        data: { teamName: 'Tigers', season: 2021, wins: 8, losses: 43 },
      },
      {
        instanceId: '1-1630000000000-abc123xyz',
        type: 'footballStats',
        title: 'Football Stats Card (Style A)',
        data: { teamName: 'Tigers', season: 2022, wins: 87, losses: 4 },
      },
      {
        instanceId: '1-1630000000000-abc123xyz',
        type: 'footballStats',
        title: 'Football Stats Card (Style B)',
        data: { teamName: 'Tigers', season: 2023, wins: 8, losses: 49 },
      },
    ],
  },
  {
    _id: '2',
    firstName: 'Lebron',
    lastName: 'James',
    year: 'Senior',
    sports: 'Basketball',
    portraitPhoto: Lebron,
    biography: '',
    portfolioData: [],
  },
  {
    _id: '3',
    firstName: 'Leah',
    lastName: 'Edmond',
    year: 'Sophomore',
    sports: 'Volley Ball',
    portraitPhoto: Edmond,
    biography: '',
    portfolioData: [],
  },
];
