const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const menunav = document.querySelector('.menu-nav');

menuBtn.addEventListener('click', () => {
    // console.log("erte");
    hamburger.classList.toggle('open');
    menunav.classList.toggle('open');
    console.log(hamburger.classList);
})