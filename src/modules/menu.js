const menuData = [
    {
        item: 'Kogi Tacos',
        image: '../src/tacos.png',
        price: 14.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam! Quisquam porro eligendi, qui eum labore dolor beatae cumque, dolore maxime nisi voluptates enim commodi explicabo ea necessitatibus. Doloremque, recusandae.'
    },
    {
        item: 'Kimchi Fried Rice',
        image: '../src/kimchi_fried_rice.jpeg',
        price: 12.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam! Quisquam porro eligendi, qui eum labore dolor beatae cumque, dolore maxime nisi voluptates enim commodi explicabo ea necessitatibus. Doloremque, recusandae.'
    },
    {
        item: 'Fried Chicken',
        image: '../src/fried_chicken.jpeg',
        price: 16.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam! Quisquam porro eligendi, qui eum labore dolor beatae cumque, dolore maxime nisi voluptates enim commodi explicabo ea necessitatibus. Doloremque, recusandae.'
    },
    {
        item: 'Short Ribs',
        image: '../src/short_ribs.jpeg',
        price: 29.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam! Quisquam porro eligendi, qui eum labore dolor beatae cumque, dolore maxime nisi voluptates enim commodi explicabo ea necessitatibus. Doloremque, recusandae.'
    }
]


console.log(menuData[0].item)
export default function menu() {
    // content.innerHTML = '';
    const content = document.querySelector('#content')
    content.removeChild(content.lastChild)
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent')
    const blankRow = document.createElement('div');
    blankRow.classList.add('blank')
    blankRow.innerHTML = '';
    menuContent.appendChild(blankRow)
    // menuContent.innerHTML = 'THIS IS MENU';
    menuData.forEach(datum => menuContent.appendChild(createMenuItem(datum.item, datum.image, datum.price, datum.description)));
    // menuContent.appendChild(createMenuItem('pizza', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aut nihil esse explicabo ea saepe non obcaecati aperiam. Cupiditate natus veritatis vero libero earum quibusdam? Eaque maxime similique quos aperiam.'));

    content.appendChild(menuContent)
}

function createMenuItem(name, image, price, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const menuItemHeader = document.createElement('h3');
    menuItemHeader.classList.add('header')
    menuItemHeader.innerText = name;

    const menuItemImage = document.createElement('img');
    menuItemImage.classList.add('image')
    menuItemImage.src = image;
    menuItemImage.style.maxHeight = "500px";
    menuItemImage.style.maxWidth = "500px";

    const menuItemPrice = document.createElement('p');
    menuItemPrice.classList.add('price')
    menuItemPrice.innerText = `$${price}`

    const menuItemDescription = document.createElement('p')
    menuItemDescription.classList.add('description')
    menuItemDescription.innerText = description
    menuItemDescription.style.maxWidth = '500px';

    menuItem.appendChild(menuItemHeader);
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemPrice);
    menuItem.appendChild(menuItemDescription);

    return menuItem;
}