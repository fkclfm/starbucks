const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//input에 있는 아무 곳에 클릭하면 focus 작동
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
//search 누르면 통합검색이라고 출력
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
//원상태로 돌아가기 위해 클래스 다시 제거
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
//로데시 사용으로 함수 사용을 0.3초마다 console.log 출력  
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
      // 배지 숨기기
      //gsap.to(요소, 지속시간, 옵션) 
      //자스 애니메이션 라이브러리임;
      gsap.to(badgeEl, .6, {
        //옵션
        opacity: 0, 
        display: 'none'
      });
      //버튼 보이기
      gsap.to(toTopEl, .2, {
        x: 0
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, .6, {
        //옵션
        opacity: 1,
        display: 'block'
      });
      //버튼 숨기기
      gsap.to(toTopEl, .2, {
        x: 100
      });
    }
}, 300));
// 0.3초
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
//forEach : 찾은 요소들 반복해서 함수 실행! 
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', 
  autoplay: true,
  loop: true 
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 2500 //2.5초
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //이전 슬라이드
    nextEl: '.promotion .swiper-next'  //다음 슬라이드
  } 
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev', //이전 슬라이드
    nextEl: '.awards .swiper-next'  //다음 슬라이드
  } 
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion //클릭하면 true로 반환
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    //보임 처리!
    promotionEl.classList.remove('hide');
  }
});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,
    random(1.5, 2.5), 
    { //옵션
      y: size,
      repeat: -1,
      yoyo: true, 
      ease: Power1.easeInOut,
      delay : random(0, delay)                
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  //스크롤 감시, 메소드 체이닝 적용
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2024