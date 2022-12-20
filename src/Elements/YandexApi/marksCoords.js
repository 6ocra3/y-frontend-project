import { MAKAR } from '../../static/bio/makarBio';
import { GRISHA } from '../../static/bio/grisha';
import { DENIS } from '../../static/bio/denis';

export const COORDS = [
  {
    owner: MAKAR,
    points: [
      {
        id: 1000,
        title: 'Первая точка',
        coordinates: [54.751574, 37.573856],
        zoom: 5,
      },
      {
        id: 1002,
        title: 'Вторая точка',
        coordinates: [53.51574, 37.573856],
        zoom: 8,
      },
      {
        id: 1003,
        title: 'Третья точка',
        coordinates: [54.751574, 31.573856],
      },
    ],
  },
  {
    owner: GRISHA,
    points: [
      {
        id: 1004,
        title: 'Четвертая точка',
        coordinates: [54.751574, 36.73856],
        zoom: 5,
      },
      {
        id: 1005,
        title: 'Пятая точка',
        coordinates: [50.751574, 37.573856],
        zoom: 5,
      },
    ],
  },
  {
    owner: DENIS,
    points: [
      {
        id: 1006,
        title: 'Шестая точка',
        coordinates: [26.751574, 37.73856],
        zoom: 5,
      },
      {
        id: 1007,
        title: 'Седьмая точка',
        coordinates: [78.751574, 21.573856],
        zoom: 5,
      },
    ],
  },
];
