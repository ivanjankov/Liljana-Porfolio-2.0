let loadingScreen = document.getElementById('loading-screen');
window.addEventListener('load', () => {
    loadingScreen.style.display = 'none';
});

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

// Modal

let modal = document.querySelector('.modal');
let modalContent = document.querySelector('.modal_content');
let body = document.querySelector('.main');
let closeButtonModal = document.querySelector('.modal_button-close');

let toggleModal = () => {
    body.classList.toggle('main-modal-active');
    modal.classList.toggle('active');
};

closeButtonModal.addEventListener('click', (e) => {
    toggleModal();
});

modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
});
modal.addEventListener('click', toggleModal);
toggleModal();
