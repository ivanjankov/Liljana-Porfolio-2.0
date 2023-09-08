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
    speed: 2500,
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
    autoplay: false,
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
let modalContent = document.querySelector('.modal_content-services');
let body = document.querySelector('.main');
let closeButtonModal = document.querySelector('.modal_button-close');
let modalList = document.querySelector('.modal-list');
let servicesWrapper = document.getElementById('services-wrapper');

let services = [
    {
        service: 'Brand Identity',
        description:
            'Social media posts, story templates, post templates, highlight covers',
        content: {
            serviceOne: {
                title: 'Regular Package',
                description:
                    'A regular package designed for small businesses requiring essential branding elements to either establish a new brand or update an existing one',
                includedService: [
                    'Number of Revisions: 5',
                    'Number of Initial concepts: 2',
                    'Colour palette',
                    'Typography pairing',
                    'Mockups',
                ],
                finalFiles: [
                    'Brand Guideline Sheet',
                    'Primary logo',
                    'Secondary logo',
                    'Logo mark',
                    'Logo Transparency',
                    'High Resolution',
                    'Vector File',
                ],
                footer: 'Delivery Time 7 Days',
            },
            serviceTwo: {
                title: 'Social Package',
                description:
                    'A social package tailored for small and medium-sized online businesses that sell products or services on social networks. This package is designed to help them create a cohesive and consistent online presence across all their social media platforms.',
                includedService: [
                    'Number of Revisions: 5',
                    'Number of Initial concepts: 3',
                    'Colour palette',
                    'Typography pairing',
                    'Mockups',
                ],
                finalFiles: [
                    'Standard Package + Story templates x3',
                    'Post templates x12',
                    'Highlight covers x5',
                ],
                footer: 'Delivery Time 7-14 days',
            },
        },
    },
    {
        service: 'Social Media',
        description:
            'Social media posts, story templates, post templates, highlight covers',
        content: {
            serviceOne: {
                title: 'Regular Package',
                description:
                    'Social media templates are ready-to-use formats and designs that simplify the process of crafting various types of content for the platform. These templates encompass stories, quotes, image posts, grids, and collage layouts, enabling effortless content creation.',
                includedService: [
                    'Story templates x3',
                    'Post templates x12',
                    'Highlight covers x5',
                ],
                finalFiles: [],
                footer: 'Delivery Time 7 Days',
            },
            serviceTwo: {
                title: 'Package Plus',
                description:
                    'A package plus tailored for small and medium-sized online businesses that sell products or services on social networks. This package is designed to help them create a cohesive and consistent online presence across all their social media platforms.',
                includedService: [
                    'Story templates x6',
                    'Post templates x24',
                    'Highlight covers x9',
                ],
                finalFiles: [],
                footer: 'Delivery Time 7-14 days',
            },
        },
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
    modalContent.innerHTML = '';
    const serviceOne = serviceContent.serviceOne;
    const serviceTwo = serviceContent.serviceTwo;

    if (serviceOne) {
        modalContent.innerHTML = `
        <div class="modal_first-service">
            <h3 class="modal-service-title">${serviceOne.title}</h3>
            <div class="modal-service-description">${
                serviceOne.description
            }</div>
            <ul class="modal-service-included">${serviceOne.includedService
                .map((el) => {
                    return `<li>${el}</li>`;
                })
                .join('')}</ul>
            <ul class="modal-service-included">${serviceOne.finalFiles
                .map((el) => {
                    return `<li>${el}</li>`;
                })
                .join('')}</ul>
            <footer class="modal-service-footer">${serviceOne.footer}</footer>
        </div>
    
        <div class="modal_second-service">
            <h3 class="modal-service-title">${serviceTwo.title}</h3>
            <div class="modal-service-description">${
                serviceTwo.description
            }</div>
            <ul class="modal-service-included">${serviceTwo.includedService
                .map((el) => {
                    return `<li>${el}</li>`;
                })
                .join('')}</ul>
            <ul class="modal-service-included">${serviceTwo.finalFiles
                .map((el) => {
                    return `<li>${el}</li>`;
                })
                .join('')}</ul>
            <footer class="modal-service-footer">${serviceTwo.footer}</footer>
        </div>`;
    } else {
        modalContent.innerHTML =
            '<p class="other-services">At this time, I do not provide fixed packages for this service. To get a customized price estimate, kindly fill out the enquiry form with a thorough description of your requirements. Upon receipt, I will promptly respond with a tailored quote that meets your needs.</p>';
    }
}
