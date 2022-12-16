import { DENIS } from '../bio/denis';
import { STACK } from './stack';

import catImg from '../image/running_cat.png';
import coffishImage from '../image/coffish.png';
import schoolImage from '../image/2083.png';

export const DenisProjects = [
  {
    id: 201,
    image: catImg,
    title: 'Running Cat',
    date: '24.05.2022',
    time: '18:06:30',
    author: DENIS,
    projectType: 'Фановый проект',
    description:
      'Просто бегающий кот. Вы его никогда не поймаете, поверьте, он ооочень старательно будет убегать от вашего курсора)',
    link: 'https://github.com/sherstnew/running_cat',
    technologyStack: [STACK.HTML, STACK.CSS, STACK.JS],
  },
  {
    id: 202,
    image: coffishImage,
    title: 'Coffish',
    date: '22.10.2022',
    time: '12:53:42',
    author: DENIS,
    projectType: 'Pet Project',
    description:
      'Сайт вымышленной кофейни, сделанный за 5 дней. Красивое.',
    link: 'https://github.com/sherstnew/coffish',
    technologyStack: [STACK.HTML, STACK.SCSS],
  },
  {
    id: 203,
    image: schoolImage,
    title: '2083.ga',
    date: '02.09.2022',
    time: '10:57:12',
    author: DENIS,
    projectType: 'Школьный проект',
    description:
      'В этом проекте можно ставить лайки учителям и смотреть их рейтинг! Моё первое фуллстак-приложение, между прочим.',
    link: 'https://github.com/sherstnew/rate2083',
    technologyStack: [STACK.HTML, STACK.CSS],
  },
];