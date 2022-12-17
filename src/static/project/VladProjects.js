import { VLAD } from '../bio/vlad';
import { STACK } from './stack';
import timeTrackerImage from '../image/time-tracker.png';
import libraryImage from '../image/library.png';
import rogueImage from '../image/rogue.png';

export const VladProjects = [
  {
    id: 401,
    image: timeTrackerImage,
    title: 'Time Tracker',
    date: '27.11.2020',
    author: VLAD,
    projectType: 'Проект для Академии Яндекса',
    description:
      'Небольшое приложение, позволяющее отследить время, затраченное на работу.',
    link: 'https://github.com/leonorino/time-tracker',
    technologyStack: [STACK.PYTHON, STACK.PyQt, STACK.SQLITE],
  },
  {
    id: 402,
    image: libraryImage,
    title: 'Library',
    date: '27.04.2021',
    author: VLAD,
    projectType: 'Проект для Академии Яндекса',
    description:
      'Веб-приложение, имитирующее работу библиотеки.',
    link: 'https://github.com/leonorino/library',
    technologyStack: [STACK.PYTHON, STACK.SQLITE, STACK.FLASK, STACK.BOOTSTRAP, STACK.HTML, STACK.CSS],
  },
  {
    id: 403,
    image: rogueImage,
    title: 'Rogue',
    date: '21.01.2021',
    author: VLAD,
    projectType: 'Проект для Академии Яндекса',
    description:
      'Небольшая Rogue-like игра.',
    link: 'https://github.com/Sneper-Breeze/Rogue',
    technologyStack: [STACK.PYTHON, STACK.PYGAME],
  }
];
