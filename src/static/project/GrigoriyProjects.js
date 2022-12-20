import { GRISHA } from "../bio/grisha";
import { STACK } from "./stack";
import messengerImage from "../image/messenger.webp";
import pymogusImage from "../image/pymogus.webp";
import practicehubImage from "../image/practicehub.webp";
import megamapImage from "../image/mega_map.webp"


export const GrigoriyProjects = [
    {
        id: 301,
        image: messengerImage,
        title: "Мессенджер",
        date: "13.11.2021",
        time: "15:11",
        author: GRISHA,
        projectType: "Проект для Академии Яндекса",
        description: "Данный проект - это мессенджер, написанный на языке python, фреймворк PyQt5. Для обеспечения взаимодействия между устройствами мной был использован клиент-серверный вариант с применением библиотеки socket. Для цветового оформления интерфейса использовался css.",
        link: "https://github.com/JeeEssEm/messenger-pyqt5",
        technologyStack: [STACK.PYTHON, STACK.PyQt, STACK.CSS]
    },
    {
        id: 302,
        image: pymogusImage,
        title: "PyMogus",
        date: "17.01.2022",
        time: "20:06",
        author: GRISHA,
        projectType: "Проект для Академии Яндекса",
        description: "Данный проект - это реплика популярной игры among us. Мы написали его на языке python, фреймворк pygame. Для поддержки сетевой игры мы использовали клиент-серверный вариант с использованием библиотеки socket.",
        link: "https://github.com/tizerr/PygameAmongUs",
        technologyStack: [STACK.PYTHON, STACK.PYGAME]
    },
    {
        id: 303,
        image: practicehubImage,
        title: "PracticeHub",
        date: "25.04.2022",
        time: "12:04",
        author: GRISHA,
        projectType: "Проект для Академии Яндекса",
        description: "Данный проект - попытка создания сайта с курсами для школы, на котором можно создать курс, записаться и пройти. На стороне frontend мы использовали html, css, и javascript, в частности JQuery. На стороне backend мы использовали язык python, фреймворк Flask и SQLAlchemy для установки ORM связи с базой данных sqlite",
        link: "https://github.com/tizerr/PracticeHub",
        technologyStack: [STACK.PYTHON, STACK.FLASK, STACK.HTML, STACK.CSS, STACK.JS, STACK.BOOTSTRAP]
    },
    {
        id: 304,
        image: megamapImage,
        title: "Mega map",
        date: "03.02.2022",
        time: "21:16",
        author: GRISHA,
        projectType: "Пет проект",
        description: "Этот проект был создан для тренировки в разработке приложений с использованием фреймворка PyQt и api яндекс карт",
        link: "https://github.com/JeeEssEm/mega_map",
        technologyStack: [STACK.PYTHON, STACK.PyQt]
    }
]


