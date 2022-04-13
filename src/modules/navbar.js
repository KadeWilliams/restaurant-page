export default function navbar() {
    const content = document.querySelector('#content')
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'space-evenly';

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

    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(contact)
    content.appendChild(nav)
}