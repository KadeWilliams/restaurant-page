export default function menu() {
    // content.innerHTML = '';
    const content = document.querySelector('#content')
    content.removeChild(content.lastChild)
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent')
    // menuContent.innerHTML = 'THIS IS MENU';
    menuContent.appendChild(createMenuItem('pizza', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aut nihil esse explicabo ea saepe non obcaecati aperiam. Cupiditate natus veritatis vero libero earum quibusdam? Eaque maxime similique quos aperiam.'));
    console.log("I'm in the menu file");
    content.appendChild(menuContent)
}

function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const menuItemHeader = document.createElement('h3');
    menuItemHeader.innerText = name;

    const menuItemDescription = document.createElement('p');
    menuItemDescription.innerHTML = description;

    menuItem.appendChild(menuItemHeader);
    menuItem.appendChild(menuItemDescription);

    return menuItem;
}