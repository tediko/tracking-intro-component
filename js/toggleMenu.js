export default class Toggle {
    constructor() {
        if (!this.vars()) return false;
        this.setupEvents();
    }
    vars() {
        this.selectors = {
            hamburger: 'data-hamburger',
            nav: 'data-nav',
            open: 'open'
        };

        this.hamburger = document.querySelector(`[${this.selectors.hamburger}]`);
        this.nav = document.querySelector(`[${this.selectors.nav}]`);

        if (!this.hamburger || !this.nav) return false;

        this.transition = `left 250ms ease-in`;
        this.open = false;
        this.timer = false;
        return true;
    }

    // Hamburger event listener
    setupEvents() {
        this.hamburger.addEventListener('click', () => this.toggle());
    }

    // Toggle hamburger menu
    toggle() {
        !this.open ? this.show() : this.hide();
    }

    // Animation while hamburger is open
    show() {
        if (this.timer) return false;

        this.hamburger.classList.add(this.selectors.open);
        this.nav.style.left = '0';
        this.nav.style.transition = this.transition;
        this.open = true;
    }

    // Animation while hamburger is closed
    hide() {
        this.hamburger.classList.remove(this.selectors.open);
        this.nav.style.left = '100vw';
        this.timer = window.setTimeout(() => {
            this.nav.style.left = '-100vw';
            this.nav.style.transition = '';
            this.timer = false;
        }, 250);
        this.open = false;
    }
}