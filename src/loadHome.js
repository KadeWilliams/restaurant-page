export default function loadHome() {
    console.log('home');
    const page = document.createElement('div');
    page.innerHTML = 'home';
    return page;
}