window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll-nav', window.scrollY > 0)

    document.querySelector('header').classList.toggle
    ('window-scroll-header', window.scrollY > 0)

    document.querySelector('header__container').classList.toggle
    ('window-scroll-header-container', window.scrollY > 0)

    document.querySelector(".courses").classList.toggle
    ('window-scroll-courses', window.scrollY > 0)
})



//show faqs

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector(".faq__icon i");
        if(icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})

//Show hide menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    menu.style.animation = "animateNavBar 1s ease";
    //menu.style.right = "0%";
    closeBtn.style.display = "inline-block";
})

const closeNav = () => {
    menu.style.display = "none";
    //menu.style.right = "-40%";
    closeBtn.style.display = "none";
"animateNavBarClose 1s ease";
}

closeBtn.addEventListener("click", closeNav)

