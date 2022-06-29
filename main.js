'use strict'
const sillyJs = '자바스크립트 바보';

//make navbar transparent when it is on the top 
const navbar = document.querySelector('#navbar');
console.log("쿼리셀렉터 궁금: ", navbar)
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`)

    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


 