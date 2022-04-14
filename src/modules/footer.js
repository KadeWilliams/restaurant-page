export default function footer() {
    const content = document.querySelector('#content');

    const foot = document.createElement('div');
    foot.classList.add('footer');

    const pFoot = document.createElement('p');
    pFoot.innerHTML = '&copy; Kade Williams'

    foot.appendChild(pFoot)
    content.appendChild(foot);
}