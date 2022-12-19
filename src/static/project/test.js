import projectImg from './../image/image.png';
import { MAKAR } from '../bio/makarBio';
import { STACK } from './stack';
export const TestProject = {
  image: projectImg,
  title: 'Название проекта',
  time: '12:06',
  date: '24.11.2022',
  author: MAKAR,
  projectType: 'Проект для Академии',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  technologyStack: [STACK.HTML, STACK.CSS, STACK.JS],
  // link: "https://github.com"
};
