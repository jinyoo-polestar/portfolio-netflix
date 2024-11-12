// Main, Support - Email form css controller
const $signupEmailInputs = document.querySelectorAll('.signup__input');
const $signupEmailLabels = document.querySelectorAll('.signup__label');
const $sliderWrapper = document.querySelector('.trend__slider');
const $leftBtn = document.querySelector('.slider__left-btn');
const $rightBtn = document.querySelector('.slider__right-btn');

$signupEmailInputs.forEach(($input, index) => {
  const $signupEmailLabel = $signupEmailLabels[index];

  $input.addEventListener('focus', () => $signupEmailLabel.classList.add('active'));

  $input.addEventListener('blur', () => {
    if ($input.value === "") {
      $signupEmailLabel.classList.remove('active');
    }
  });
});


// Q&A - Toggle answer visibility controller
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('qna__question')) {
    const questionItem = event.target.closest('.qna__item'); 
    const questionAnswer = questionItem.querySelector('.qna__answer');

    document.querySelectorAll('.qna__answer').forEach(answer => answer.classList.remove('active'));
    document.querySelectorAll('.qna__question').forEach(question => question.classList.remove('active'));

    questionAnswer.classList.add('active');
    event.target.classList.add('active');
  }
})

// Slider - Show/Hide left,right button by scroll width
function setSliderButtonsVisible() {
    const currentScrollPosition = $sliderWrapper.scrollLeft;
    const maxScrollPosition = $sliderWrapper.scrollWidth - $sliderWrapper.clientWidth; 

    $leftBtn.style.display = currentScrollPosition === 0 ? 'none' : 'flex';
    $rightBtn.style.display = currentScrollPosition >= maxScrollPosition ? 'none' : 'flex';
}

$leftBtn.addEventListener('click', function() {
    $sliderWrapper.scrollBy({ left: -$sliderWrapper.clientWidth, behavior: 'smooth' });
});

$rightBtn.addEventListener('click', function() {
    const remainingScroll = $sliderWrapper.scrollWidth - $sliderWrapper.scrollLeft - $sliderWrapper.clientWidth;
    
    if (remainingScroll < $sliderWrapper.clientWidth) {
        $sliderWrapper.scrollBy({ left: remainingScroll, behavior: 'smooth' });
    } else {
        $sliderWrapper.scrollBy({ left: $sliderWrapper.clientWidth, behavior: 'smooth' });
    }
});

$sliderWrapper.addEventListener('scroll', setSliderButtonsVisible);

setSliderButtonsVisible();