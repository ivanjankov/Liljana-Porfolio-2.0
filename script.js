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

// header inlude menu
// const navMenu = document.getElementById('menu');
// const menuLinks = ['home', 'projects', 'services'];

// let createMenu = (array) => {
//     navMenu.innerHTML = '';
//     for (let i = 0; i < array.length; i++) {
//         let listItem = document.createElement('li');
//         listItem.classList.add('header__menu-item');
//         let anchorItem = document.createElement('a');
//         anchorItem = setElementAttribute(
//             anchorItem,
//             'href',
//             'https://google.com'
//         );
//         anchorItem.classList.add('header__menu-item-link');
//         anchorItem.innerText = array[i];
//         listItem.appendChild(anchorItem);

//         navMenu.appendChild(listItem);
//     }
// };

// let setElementAttribute = (el, attr, attrValue) => {
//     let element = el;
//     element.setAttribute(attr, attrValue);

//     return element;
// };

// createMenu(menuLinks);

// Toggle hamburger menu

const hamburgerMenu = document.getElementById('hamburger-menu');
const hamburgerIcon = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon');
const headerMenu = document.querySelector('.header__menu');
const header = document.querySelector('.header');

const toggleActiveClass = (element) => {
    element.classList.toggle('active');
};

const toggleHamburger = () => {
    hamburgerMenu.addEventListener('click', () => {
        toggleActiveClass(hamburgerIcon);
        toggleActiveClass(closeIcon);
        toggleActiveClass(headerMenu);
        toggleActiveClass(header);
    });
};

toggleHamburger();

// Triger Splide Slider

const splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '12px',
    width: '100%',
    breakpoints: {
        768: {
            perPage: 2,
        },
        576: {
            perPage: 1,
        },
    },
});
splide.mount();
