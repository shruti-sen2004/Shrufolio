//NAVIGATION BAR EFFECTS ON SCROLL
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// DARK THEME TOGGLE
const icon = document.getElementById("icon");
const logo = document.querySelector(".logo");
const image = document.getElementById("image");

icon.onclick = function() {
    if (!document.startViewTransition) {
        toggleTheme();
        return;
    }

    document.startViewTransition(() => {
        toggleTheme();
    });
}

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-theme");

    if (isDark) {
        icon.src = "images/sun.png";
        logo.src = "images/logo-dark.png";
        image.src = "images/profile-pic-dark.png";
    } else {
        icon.src = "images/moon.png";
        logo.src = "images/logo-light.png";
        image.src = "images/profile-pic-light.png";
    }
}


//PROJECTS SECTION MODAL
const projectModals = document.querySelectorAll(".project-model");
const imgCards = document.querySelectorAll(".img-card");
const projectcloseBtns = document.querySelectorAll(".project-close-btn");

var projectModal = function (modalclick) {
    projectModals[modalclick].classList.add("active");
}

imgCards.forEach((imgCard, index) => {
    imgCard.addEventListener("click", () => {
        projectModal(index);
    });
});

projectcloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        projectModals.forEach((projectModalView) => {
            projectModalView.classList.remove("active");
        });
    });
});

//SCROLL REVEAL ANIMATION 
//COMMON REVEAL OPTIONS TO CREATE REVEAL ANIMATIONS
ScrollReveal({
    reset: true,
    distance: '30px',
    duration: 1000,
    delay: 0,
    easing: 'ease-out'
});


ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 150, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.home-img, .about-img', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 150, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 100, origin: 'right' });
ScrollReveal().reveal('.skills-description, .contact-card, .contact-left h2', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.projects .img-card', { interval: 200, origin: 'bottom' });
ScrollReveal().reveal('.footer-container .group', { delay: 100, origin: 'top' });

//RESPONSIVE NAVIGATION BAR
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navMenu = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});