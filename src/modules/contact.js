export default function contact() {
    const content = document.querySelector('#content')
    content.removeChild(content.lastChild)

    const contactContent = document.createElement('div');
    contactContent.classList.add('contactContent')

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');
    const phone = document.createElement('p');
    const address = document.createElement('p');

    phone.innerText = '123-456-7890'
    address.innerText = '3770 S Las Vegas Blvd, Las Vegas, NV 89109'

    contactInfo.appendChild(phone);
    contactInfo.appendChild(address);

    const map = document.createElement('div');
    map.classList.add('map')
    const mapImage = document.createElement('img');
    mapImage.style.maxHeight = '700px';
    mapImage.style.maxWidth = '700px';
    mapImage.src = 'map.png'

    map.appendChild(mapImage)
    contactContent.appendChild(contactInfo)
    contactContent.appendChild(map)
    content.appendChild(contactContent)

}