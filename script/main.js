// main_btm 가로스크롤 변형
const scroll_wrap = document.querySelector('main .main_btm')
const scroll_container = document.querySelector('.btm_bg .content')
const footer = document.querySelector('footer')
const footerHeight = footer.offsetHeight
const windowHeight = window.innerHeight
const SCROLL_SPEED = 0.1 //스크롤 속도
/* console.log(f_fixed) */


window.addEventListener('scroll',()=>{
    
    // 스크롤 위치 추적
    let scrollPos = 0;
    $(window).on('scroll', function() {
        scrollPos = $(this).scrollTop()
        //console.log(scrollPos)
    })

    
    let yOffset = window.scrollY
    let acount = yOffset - scroll_wrap.offsetTop

    if(yOffset >= scroll_wrap.offsetTop){
        scroll_container.style.transform = `translateX(-${acount}px)`
        footer.style.position = 'fixed'
        footer.style.bottom = '0'
        
        footer.style.transform = 'translateY(0px)'
    }
    else {
        footer.style.position = 'inherit'
        footer.style.bottom = ''
    }//scroll end , footer up 효과
})

const currIndex = 0;
setInterval(function() {
    const imgs = document.querySelectorAll('.mainimg');
    let currImg = imgs[currIndex];
    let nextIndex = (currIndex + 1) % imgs.length;
    let nextImg = imgs[nextIndex];
    currImg.classList.remove('active');
    nextImg.classList.add('active');
    currIndex = nextIndex;
}, 1000);




