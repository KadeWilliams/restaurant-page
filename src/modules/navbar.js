export default function navbar() {
    const content = document.querySelector('#content')

    const navbar = document.createElement('div')
    navbar.classList.add('navbar')
    navbar.style.display = 'flex';
    navbar.style.flexDirection = 'row';
    navbar.style.justifyContent = 'space-between'

    const navStart = document.createElement('div')
    navStart.classList.add('navbar-start');
    navStart.style.display = 'flex';
    navStart.style.justifyContent = 'flex-start';

    const title = document.createElement('div');
    title.classList.add('title')
    title.innerHTML = 'BEST FRIEND';

    navStart.appendChild(title);


    const navEnd = document.createElement('div');
    navEnd.classList.add('navbar-end')
    navEnd.style.display = 'flex';
    navEnd.style.justifyContent = 'flex-end';

    const home = document.createElement('div');
    const homeBtn = document.createElement('button');
    homeBtn.innerText = 'Home';
    homeBtn.classList.add('homeBtn')
    home.appendChild(homeBtn);

    const menu = document.createElement('div');
    const menuBtn = document.createElement('button');
    menuBtn.innerText = 'Menu'
    menuBtn.classList.add('menuBtn')
    menu.appendChild(menuBtn);

    const contact = document.createElement('div');
    const contactBtn = document.createElement('button');
    contactBtn.innerText = 'Contact'
    contactBtn.classList.add('contactBtn')
    contact.appendChild(contactBtn);

    navEnd.appendChild(home);
    navEnd.appendChild(menu);
    navEnd.appendChild(contact);
    navbar.appendChild(navStart);
    navbar.appendChild(navEnd);
    content.appendChild(navbar);
}