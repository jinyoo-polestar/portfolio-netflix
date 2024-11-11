// Email Form Controller
const $signupEmailInput = document.querySelector('#signup__input');
const $signupEmailLabel = document.querySelector('.signup__label');

$signupEmailInput.addEventListener('focus', () => $signupEmailLabel.classList.add('active'));
$signupEmailInput.addEventListener('blur', () => {
  if ($signupEmailInput.value === "") {
    $signupEmailLabel.classList.remove('active');
  }
});


// Q&A Section - Toggle Answer Visibility
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