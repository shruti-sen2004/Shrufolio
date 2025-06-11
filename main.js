//NAVIGATION BAR EFFECTS ON SCROLL
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//DARK THEME TOGGLE
var icon = document.getElementById("icon");
var logo = document.getElementsByClassName("logo")[0];
var image = document.getElementById("image");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");

    // Prepare image and logo for transition
    logo.classList.add("fade-out");
    image.classList.add("fade-out");

    setTimeout(() => {
        if(document.body.classList.contains("dark-theme")) {
            icon.src = "images/sun.png";
            logo.src = "images/logo-dark.png";
            image.src = "images/profile-pic-dark.png";
        } else {
            icon.src = "images/moon.png";
            logo.src = "images/logo-light.png";
            image.src = "images/profile-pic.png";
        }

        // Allow time for image source change before fade in
        setTimeout(() => {
            logo.classList.remove("fade-out");
            image.classList.remove("fade-out");
        }, 50); // Short delay to re-trigger transition
    }, 200); // Matches transition duration in CSS
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
    delay: 50
});


ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skills-description, .contact-card, .contact-left h2', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.education, .projects .img-card', { delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.footer-container .group', { delay: 500, origin: 'top' });

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




