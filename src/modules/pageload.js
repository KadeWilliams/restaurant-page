import contact from './contact.js';
import home from './home.js';
import menu from './menu.js';
import navbar from './navbar.js';

const content = document.querySelector('#content')
export default function pageLoad() {
    navbar();
    home();
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('.homeBtn');
    homeBtn.addEventListener('click', () => {
        home();
    })

    const menuBtn = document.querySelector('.menuBtn');
    menuBtn.addEventListener('click', () => {
        menu();
    })

    const contactBtn = document.querySelector('.contactBtn');
    contactBtn.addEventListener('click', () => {
        contact();
    })
}