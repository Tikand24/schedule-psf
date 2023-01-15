import { EventSchedule } from '../typings/Event';

export const events: EventSchedule[] = [
  {
    id: 1,
    date: new Date('2023-01-15 06:00:00'),
    title: 'Miercoles de ceniza',
    events: [
      {
        id: 1,
        date: new Date('2023-02-22 07:00:00'),
        locationName: 'Templo parroquial',
        locationCoords: 'coordenadas',
        info: 'Liturgia de la palabra y bendicion ',
      },
      {
        id: 2,
        date: new Date('2023-02-22 07:00:00'),
        locationName: 'Capilla Fusacatan',
        locationCoords: 'coordenadas',
        info: 'Liturgia de la palabra y bendicion ',
      },
      {
        id: 3,
        date: new Date('2023-02-22 09:00:00'),
        locationName: 'Templo parroquial',
        locationCoords: 'coordenadas',
        info: 'Liturgia de la palabra y bendicion ',
      },
      {
        id: 4,
        date: new Date('2023-02-22 10:00:00'),
        locationName: 'Capilla fusacatan',
        locationCoords: 'coordenadas',
        info: 'Liturgia de la palabra y bendicion ',
      },
      {
        id: 5,
        date: new Date('2023-02-22 12:00:00'),
        locationName: 'Templo parroquial',
        locationCoords: 'coordenadas',
        info: 'Liturgia de la palabra y bendicion ',
      },
      {
        id: 6,
        date: new Date('2023-02-22 04:00:00'),
        locationName: 'Capilla Fusacatan',
        locationCoords: 'coordenadas',
        info: 'Liturgia de la palabra y bendicion ',
      },
      {
        id: 7,
        date: new Date('2023-02-22 05:00:00'),
        locationName: 'Templo parroquial',
        locationCoords: 'coordenadas',
        info: 'Liturgia de la palabra y bendicion ',
      },
      {
        id: 8,
        date: new Date('2023-02-22 07:00:00'),
        locationName: 'Templo parroquial',
        locationCoords: 'coordenadas',
        info: 'Liturgia de la palabra y bendicion ',
      },
    ],
  },
];
