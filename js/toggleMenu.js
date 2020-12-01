const hamburgerButton = document.querySelector('[data-hamburger]');
const nav = document.querySelector('[data-nav]');
let isOpen = false;

const toggleMenu = () => {
    if (!isOpen) {
        hamburgerButton.classList.add('open');
        nav.classList.add('header__nav--active');
        nav.classList.remove('header__nav--disable');
    } else {
        hamburgerButton.classList.remove('open');
        nav.classList.remove('header__nav--active');
        nav.classList.add('header__nav--disable');
    }
    isOpen = !isOpen;
}

export default hamburgerButton.addEventListener('click', toggleMenu);