import loadPage from './loadPage.js'
import loadMenu from './loadMenu.js'
import loadHome from './loadHome.js'


const content = document.querySelector("#content")

export default function load() {

    loadPage();

    const homeBtn = document.querySelector('.home');
    const menuBtn = document.querySelector('.menu');

    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    // return elements.forEach(elem => elem)

}

load;
// content.appendChild(load());