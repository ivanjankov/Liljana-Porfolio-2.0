import { footerIcons } from './src/modules/icons.js';

const iconsWrapper = document.getElementById('footer-icons');

const displayFooterIcons = (iconsContainer, iconsArr) => {
    iconsArr.forEach((icon) => {
        const link = document.createElement('a');
        link.setAttribute('href', icon.href);
        link.setAttribute('target', '_blank');
        link.classList.add('icon_link');
        link.innerHTML = icon.svg;
        iconsContainer.appendChild(link);
    });
};

displayFooterIcons(iconsWrapper, footerIcons);

console.log(window.location.pathname);
// header inlude menu
const navMenu = document.getElementById('menu');
const menuLinks = ['home', 'projects', 'services'];

let createMenu = (array) => {
    navMenu.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let listItem = document.createElement('li');
        listItem.classList.add('header__menu-item');
        let anchorItem = document.createElement('a');
        anchorItem = setElementAttribute(
            anchorItem,
            'href',
            'https://google.com'
        );
        anchorItem.classList.add('header__menu-item-link');
        anchorItem.innerText = array[i];
        listItem.appendChild(anchorItem);

        navMenu.appendChild(listItem);
    }
};

let setElementAttribute = (el, attr, attrValue) => {
    let element = el;
    element.setAttribute(attr, attrValue);

    return element;
};

createMenu(menuLinks);
