const scroll_wrap = document.querySelector('.main_btm')
const scroll_container = document.querySelector('.btm_bg .content')
const footer = document.querySelector('footer')
const footerHeight = footer.offsetHeight;
const windowHeight = window.innerHeight;
let lastScrollTop = 0; // 이전 스크롤 위치 저장 변수
let ticking = false; // requestAnimationFrame 중복 실행 방지 변수

//스크롤 이벤트 적용할 함수
function smoothScroll(scrollDistance, duration) {
    let start = window.scrollY;
    let startTime = performance.now();
    
    function scroll(time) {
        let timePassed = time - startTime;
        let percent = timePassed / duration;
        percent = percent > 1 ? 1 : percent; // percent가 1보다 크면 1로 고정
        
        let ease = easeInOutCubic(percent); // 가속도 효과 함수 적용
        let distance = scrollDistance * ease; // 적용된 가속도 효과로 이동할 거리 계산
        window.scrollTo(0, start + distance);
        
        if (timePassed < duration) {
            requestAnimationFrame(scroll); // 지정된 duration 시간 내에 계속 호출
        }
        }
        
        function easeInOutCubic(t) { // 가속도 효과 함수
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
        
        requestAnimationFrame(scroll); // 애니메이션 시작
}


window.addEventListener('scroll',()=>{
    let yOffset = window.scrollY;
    if (yOffset >= startScroll) { // 시작할 스크롤 위치 이상에서 스크롤을 움직일 때
        let scrollDistance = yOffset - startScroll; // 현재 스크롤 위치와 시작 위치의 차이만큼 이동
        let duration = 1000; // 1초 동안 애니메이션 적용
        smoothScroll(scrollDistance, duration);
    }



    // requestAnimationFrame으로 함수를 호출하도록 변경
    if (!ticking) {
        window.requestAnimationFrame(function() {
        let yOffset = window.scrollY;
        let acount = yOffset - scroll_wrap.offsetTop;
        if (yOffset >= scroll_wrap.offsetTop) {
            scroll_container.style.transform = `translateX(-${acount}px)`;
            footer.style.position = 'fixed';
            footer.style.bottom = '0';
            footer.style.opacity = '1'; // 투명도 설정
            footer.style.transform = 'translateY(0px)';
            let duration = 1000
            smoothScroll
        } else {
            footer.style.position = 'inherit';
            footer.style.bottom = '';
            footer.style.opacity = '0'; // 투명도 설정
        }
        // 이전 스크롤 위치를 현재 위치로 업데이트
        lastScrollTop = yOffset;
        // requestAnimationFrame 중복 실행 방지 변수 업데이트
        ticking = false;
        });
        ticking = true;
    }
});
