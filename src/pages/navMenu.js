let menuWrapper = document.getElementById('navMenu');
let navMenu = ` 
        <header class='header'>
             <a href="../../index.html" class="header__logo">
                <img
                    class="header__logo-img"
                    src="../../src/assets/logo/logo.png"
                    alt="Logo Image"
                />
            </a>
            <ul class="header__menu">
                <li class="header__menu-item">
                    <a href="../../index.html" class="header__menu-item-link">Home</a>
                </li>
                <li class="header__menu-item">
                    <a href="../../index.html#projects" class="header__menu-item-link active">Projects</a>
                </li>
                <li class="header__menu-item">
                    <a href="" class="header__menu-item-link">Services</a>
                </li>
                <li>
                    <button class="button header__button">
                        <a
                            class="header__button-link"
                            href="https://linktr.ee/liljanas?lt_utm_source=lt_share_link#305112085"
                            target="_blank"
                            >Enquiry</a
                        >
                    </button>
                </li>
            </ul>
            <div id="hamburger-menu" class="header__hamburger">
                <i class="las la-bars burger-icon active"></i>
                <i class="las la-times close-icon"></i>
            </div>
        </header>
        <nav class="mobile-nav">
            <a href="../../index.html">Home</a>
            <a href="../../index.html#projects">Projects</a>
            <a href="../../index.html#services">Services</a>
        </nav>
        `;

function createNavMenu(wrapper) {
    wrapper.innerHTML = navMenu;
}
createNavMenu(menuWrapper);
