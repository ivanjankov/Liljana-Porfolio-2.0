import { footerIcons } from './src/modules/icons.js';

const iconsWrapper = document.getElementById('footer-icons');

const displayFooterIcons = (iconsContainer, iconsArr) => {
    iconsArr.forEach((icon) => {
        const link = document.createElement('a');
        link.setAttribute('href', icon.href);
        link.setAttribute('target', '_blank');
        link.innerHTML = icon.svg;
        iconsContainer.appendChild(link);
    });
};

displayFooterIcons(iconsWrapper, footerIcons);
