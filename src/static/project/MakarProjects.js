import { MAKAR } from '../bio/makarBio';
import metttime from '../image/meettime.webp';
import myResume from '../image/notOptimized/my-resume.png';
import pizza from '../image/notOptimized/PIZZA.png';
import { STACK } from './stack';
export const MakarProjects = [
  {
    id: 101,
    image: metttime,
    title: 'MeetTime',
    date: '28.08.2022',
    time: '12:12:12',
    author: MAKAR,
    projectType: 'Pet Project',
    description:
      'Проект, который я разрабатывал с друзьями-разработчиками. Это сервис, который помогает определиться с временем встречи для большой компании.',
    link: 'https://github.com/atmosferum/frontend',
    technologyStack: [STACK.REACT, STACK.TS, STACK.SCSS],
  },
  {
    id: 102,
    image: myResume,
    title: 'My resume',
    date: '28.05.2022',
    time: '10:10:10',
    author: MAKAR,
    projectType: 'Pet Project',
    description:
      'Проект, который я разрабатывал на первом интенсиве от Яндекс Академии. Этот сервис поззволяет создать свое резюме в конструкторе, сохранить его и делиться им с помощью личного qr-кода. Проект написан на django.',
    link: 'https://github.com/YandexLyceumPP/Resume',
    technologyStack: [STACK.HTML, STACK.BOOTSTRAP, STACK.PYTHON],
  },
  {
    id: 103,
    image: pizza,
    title: 'PI2ZA',
    date: '22.04.2022',
    time: '16:11:61',
    author: MAKAR,
    projectType: 'Pet Project',
    description:
      'Проект, который я разрабатывал на своем первом хакатоне. Нам надо было разработать страничку для пиццерии, с использованием yandex api. Также у нас там есть корзина, каталог и все базовые элементы магазина',
    link: 'https://github.com/koval96/sbor',
    technologyStack: [STACK.REACT, STACK.TS, STACK.SCSS],
  },
];
