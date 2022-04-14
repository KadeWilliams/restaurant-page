let count = 0;
export default function home() {
    const content = document.querySelector('#content');
    if (count != 0) {
        content.removeChild(content.lastChild);
    }
    const homeBtn = document.querySelector('.homeBtn');
    homeBtn.classList.add('active-page');
    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent')

    const welcome = document.createElement('div');
    welcome.innerHTML = 'Thank you for being our Best Friend!'
    welcome.classList.add('welcome');
    const roy = document.createElement('img');
    roy.classList.add('roy');
    // roy.style.borderRadius = '50%';
    roy.style.maxHeight = '600px';
    roy.style.maxWidth = '600px';
    roy.src = '/Users/kade/Desktop/odin_project/restaurant-page/src/roy_choi.jpeg';
    homeContent.appendChild(welcome)
    homeContent.appendChild(roy)
    content.appendChild(homeContent);
    count++;

}