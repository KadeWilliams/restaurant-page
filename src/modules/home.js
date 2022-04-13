

let count = 0;
export default function home() {
    const content = document.querySelector('#content')
    if (count != 0) {
        content.removeChild(content.lastChild)
    }

    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent')
    homeContent.innerHTML = 'THIS IS HOME'
    console.log("I'm in the home file");
    content.appendChild(homeContent)
    count++;
}