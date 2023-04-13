const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const menunav = document.querySelector('.menu-nav');
const menu_nav_links = document.getElementsByClassName("menu-nav__link");
console.log(menu_nav_links);
menuBtn.addEventListener('click', () => {
    // console.log("erte");
    hamburger.classList.toggle('open');
    menunav.classList.toggle('open');
    console.log(hamburger.classList);
})

Array.from(menu_nav_links).forEach(el => { 
    el.addEventListener('click', () => {
        el.parentElement.classList.toggle('active');
        console.log(el.parentElement.classList);
    })
});