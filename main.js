// make navbar transparent when it is on the top , navbar투명하게 
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

//id를 클릭하면 원하는 섹션으로 이동 scrollIntoView()
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

// Navbar toggle button for small screen
//내가 동일한 이름으로 div로 감싸고있어서 toggle이 먹히지 않았음 
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    console.log("왜 추가안돼")
  navbarMenu.classList.toggle('open');
});


//handle click on "contact me"
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

// 필터값에 따라서 타입에 해당하는 얘들을 보여주도록 
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');
console.log("1 : ", workBtnContainer);
console.log("2: " , projectContainer);
console.log("3:", projects);

workBtnContainer.addEventListener('click', (e) => {
    //btn안의 숫자 span에는 data-filter가 없는경우 디버깅툴을 사용해서 검사해봐서 파해치기 
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    console.log("눌른 필터 값: ", filter);

    if(filter == null) {
        return;
    }

    const active = document.querySelector('.category_btn.selected')
    console.log("액티브: ", active);
    active.classList.remove('selected');
    // e.target으로 지정하기 너무 애매함 -> e.target.classList.add('selected'); 
    const target = e.target.nodeName === 'BUTTON' ? e.target : 
        e.target.classList.add('selected'); 
    target.classList.add('selected'); 

    projectContainer.classList.add('anim-out');
    // 브라우저가 제공하는 API를 사용해 
    setTimeout(() => {
        //projects(배열)의 요소들을 받아와는 것 (=querySelectorAll)
    // for(let i = 0; i < projects.length; i++)
    projects.forEach((project) => {
        console.log("forEach 프로젝트: ", project.dataset.type);
        if(filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        }else {
            project.classList.add('invisible');
        }
    });
        projectContainer.classList.remove('anim-out'); 
    }, 300);

});


//공통함수 만들기 
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'}); 
} 

