// src/data/dummyAthletes.ts

import { Athlete } from '../../../../shared/types/athlete';

export const dummyAthletes: Athlete[] = [
  {
    _id: '1',
    firstName: 'Alice',
    lastName: 'Smith',
    year: 'Junior',
    sports: 'Football',
    portraitPhoto: '',
    biography: '',
    portfolioData: [
      {
        instanceId: '1-1630000000000-abc123xyz',
        type: 'footballStats',
        title: 'Football Stats Card (Style A)',
        data: { teamName: 'Tigers', season: 2022, wins: 8, losses: 4 },
      },
    ],
  },
  {
    _id: '2',
    firstName: 'Bob',
    lastName: 'Jones',
    year: 'Senior',
    sports: 'Baseball',
    portraitPhoto: '',
    biography: '',
    portfolioData: [],
  },
  {
    _id: '3',
    firstName: 'Charlie',
    lastName: 'Brown',
    year: 'Sophomore',
    sports: 'Soccer',
    portraitPhoto: '',
    biography: '',
    portfolioData: [],
  },
];
