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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2024