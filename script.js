let loadingScreen = document.getElementById('loading-screen');
window.addEventListener('load', () => {
    loadingScreen.style.display = 'none';
});

// Toggle hamburger menu

const hamburgerMenu = document.getElementById('hamburger-menu');
const hamburgerIcon = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileNav = document.querySelector('.mobile-nav');

// toggleHamburger();

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('is-active');
    closeIcon.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
});

// Triger Splide Slider

const splide = new Splide('#projects-splide', {
    type: 'loop',
    perPage: 2,
    perMove: 2,
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
const footerSplide = new Splide('#footer-splide', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: '12px',
    width: '100%',
    arrows: false,
    autoplay: true,
    interval: 5000,
    pagination: false,
    breakpoints: {
        768: {
            perPage: 2,
        },
        576: {
            perPage: 1,
        },
    },
});
footerSplide.mount();

// Modal

let modal = document.querySelector('.modal');
let modalContent = document.querySelector('.modal_content');
let body = document.querySelector('.main');
let closeButtonModal = document.querySelector('.modal_button-close');
let modalList = document.querySelector('.modal-list');
let servicesWrapper = document.getElementById('services-wrapper');

let services = [
    {
        service: 'Brand Identity',
        description:
            'Logo, color palette, fonts, typography, shapes and patterns, consistent styles, brand guidlines',
        content: ['service 1', 'service 2', 'service 3'],
    },
    {
        service: 'Social Media Content',
        description:
            'Social media posts, story templates, post templates, highlight covers',
        content: ['service 5', 'service 6', 'service 7'],
    },
    {
        service: 'Online advertising ',
        description:
            'Banner ads, thumbnails, pop-ups, app store screenshots,icons, illustrations',
        content: ['service 9', 'service 8', 'service 10'],
    },
    {
        service: 'Print Advertisements',
        description:
            'Packaging, product labels, book covers, business cards, menu, big print items such as posters and billboards',
        content: ['service 11', 'service 12', 'service 13'],
    },
];

closeButtonModal.addEventListener('click', (e) => {
    hideModal();
});

modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
});
modal.addEventListener('click', hideModal);

function createServices(servicesArray) {
    servicesArray.forEach((el) => {
        let service = document.createElement('div');
        service.classList.add('section__service');
        let serviceTitle = document.createElement('h3');
        serviceTitle.classList.add('section__service-title');
        serviceTitle.innerText = el.service;
        let serviceDescription = document.createElement('p');
        serviceDescription.classList.add('section__service-description');
        serviceDescription.innerText = el.description;

        let serviceButton = document.createElement('button');
        serviceButton.classList.add('service-link');
        serviceButton.innerText = 'See what is included';

        if (window.innerWidth < 992) {
            serviceButton.style.maxHeight = '40px';
        }
        serviceButton.addEventListener('click', () => {
            showModal();
            populariseModal(el.content);
        });
        service.append(serviceTitle, serviceDescription, serviceButton);
        servicesWrapper.appendChild(service);
    });
}

createServices(services);

function showModal() {
    console.log('modal showed');
    body.classList.add('main-modal-active');
    modal.classList.add('active');
}

function hideModal() {
    console.log('modal hidden');

    body.classList.remove('main-modal-active');
    modal.classList.remove('active');
}

function populariseModal(serviceContent) {
    modalList.innerHTML = '';
    serviceContent.forEach((detail) => {
        let listItem = document.createElement('li');
        listItem.innerText = detail;
        modalList.appendChild(listItem);
    });
}
