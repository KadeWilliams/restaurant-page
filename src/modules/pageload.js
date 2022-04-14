import contact from './contact.js';
import home from './home.js';
import menu from './menu.js';
import navbar from './navbar.js';
import footer from './footer.js';

const content = document.querySelector('#content')
export default function pageLoad() {
    navbar();
    footer();
    home();
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('.homeBtn');
    homeBtn.addEventListener('click', () => {
        menuBtn.classList.remove('active-page');
        contactBtn.classList.remove('active-page');
        homeBtn.classList.add('active-page');
        home();
    })

    const menuBtn = document.querySelector('.menuBtn');
    menuBtn.addEventListener('click', () => {
        homeBtn.classList.remove('active-page');
        contactBtn.classList.remove('active-page');
        menuBtn.classList.add('active-page');
        menu();
    })

    const contactBtn = document.querySelector('.contactBtn');
    contactBtn.addEventListener('click', () => {
        homeBtn.classList.remove('active-page');
        menuBtn.classList.remove('active-page');
        contactBtn.classList.add('active-page');
        contact();
    })
}