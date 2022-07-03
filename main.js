//1. make navbar transparent when it is on the top , navbar투명하게 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
console.log("쿼리셀렉터 궁금: ", navbarHeight)
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`)
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//2. id를 클릭하면 원하는 섹션으로 이동 scrollIntoView()
const navbarMenu = document.querySelector('.navbar_menu')
//클릭한 event를 받음 
navbarMenu.addEventListener('click', (event) => {
    //dataset.link를 찍으면 정의한 id가 나온다. 
    console.log("이벤트 매개변수:", event.target.dataset.link); 
    const data = event.target.dataset;
    const link = data.link;
    if(link == null){
        return; 
    }
    scrollIntoView(link); 
})

//3. handle click on "contact me"
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact'); 
})

//스크롤링 되면 home투명하게 만들기 
// + home_container 클래스 추가 (index.html)
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
}); 

//스크롤링되면 나타나게 하기 
//홈에서 반정도 내려오면 올라가는 아이콘생성
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight /2) {
            arrowUp.classList.add('visible'); 
    }else{
        arrowUp.classList.remove('visible'); 
    }
}); 

// const arrowUpBtn = document.querySelector('#arrow_btn');
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

//공통함수 만들기 
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'}); 
} 