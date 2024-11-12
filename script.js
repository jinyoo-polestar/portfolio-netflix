// Email Form Controller
const $signupEmailInputs = document.querySelectorAll('.signup__input');
const $signupEmailLabels = document.querySelectorAll('.signup__label');

$signupEmailInputs.forEach(($input, index) => {
  const $signupEmailLabel = $signupEmailLabels[index];

  $input.addEventListener('focus', () => $signupEmailLabel.classList.add('active'));

  $input.addEventListener('blur', () => {
    if ($input.value === "") {
      $signupEmailLabel.classList.remove('active');
    }
  });
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