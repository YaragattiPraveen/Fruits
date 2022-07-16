const menuBar = document.querySelector('.menu-bar');
const navlinks = document.querySelector('.nav-links');

menuBar.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu');
})