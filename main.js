const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-navigation');
const body = document.body;

menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', isOpen);
    body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu when a link is clicked
navigation.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navigation.classList.remove('is-open');
        menuButton.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
    }
});