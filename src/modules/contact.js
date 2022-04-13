export default function contact() {
    const content = document.querySelector('#content')
    content.removeChild(content.lastChild)

    const contactContent = document.createElement('div');
    contactContent.classList.add('contactContent')
    contactContent.innerHTML = 'THIS IS CONTACT';
    console.log("I'm in the contact file");
    content.appendChild(contactContent)

}