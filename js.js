const menu = document.querySelector(".nav-toggle");
const menuLink = document.querySelector(".nav-menu");
const navLogo = document.querySelector('#nav-logo')

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLink.classList.remove('active');
    }
}

menuLink.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);