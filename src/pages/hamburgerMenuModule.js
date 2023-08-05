const hamburgerMenu = document.getElementById('hamburger-menu');
const hamburgerIcon = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon');
const headerMenu = document.querySelector('.header__menu');
const header = document.querySelector('.header');

const toggleActiveClass = (element) => {
    element.classList.toggle('active');
};

export const toggleHamburger = () => {
    hamburgerMenu.addEventListener('click', () => {
        toggleActiveClass(hamburgerIcon);
        toggleActiveClass(closeIcon);
        toggleActiveClass(headerMenu);
        toggleActiveClass(header);
    });
};
