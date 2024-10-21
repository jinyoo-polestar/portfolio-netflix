const slide = document.querySelector('.slide-content');
const slideItems = document.querySelectorAll('.card');

const prevBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');

nextBtn.addEventListener('click', () => {
    alert('Next button clicked'); // 버튼 클릭 로그
    document.querySelector('.slide-content').style.transform = 'translate(-10vw)'
});

prevBtn.addEventListener('click', () => {
  alert('Prev button clicked'); // 버튼 클릭 로그
  document.querySelector('.slide-content').style.transform = 'translate(10vw)'
  // slideItems.forEach((item) => {
  //     item.style.width = '800px'; // 각 카드의 너비를 800px로 설정
  // });
});