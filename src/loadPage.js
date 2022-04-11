export default function loadPage() {
    const content = document.querySelector('#content');

    content.appendChild(main());
    content.appendChild(navbar());

}

function main() {
    const mainContent = document.createElement('div');
    mainContent.innerHTML = 'main content';
    mainContent.style.display = 'flex';
    mainContent.style.justifyContent = 'center';
    return mainContent;
}

function navbar() {
    const navContent = document.createElement('div');

    const home = document.createElement('button');
    home.innerHTML = 'home';
    home.classList.add('home');

    const menu = document.createElement('button');
    menu.innerHTML = 'menu';
    menu.classList.add('menu');

    navContent.style.display = 'flex';
    navContent.style.justifyContent = 'center';
    navContent.appendChild(home);
    navContent.appendChild(menu);
    return navContent;
}
