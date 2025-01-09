// Main, Support - Email form css controller
const $signupEmailInputs = document.querySelectorAll(".signup__input");
const $signupEmailLabels = document.querySelectorAll(".signup__label");
const $sliderWrapper = document.querySelector(".trend__slider");
const $leftBtn = document.querySelector(".slider__left-btn");
const $rightBtn = document.querySelector(".slider__right-btn");
let dragstartPoint = 0;
let dragendPoint = 0;

$signupEmailInputs.forEach(($input, index) => {
  const $signupEmailLabel = $signupEmailLabels[index];

  $input.addEventListener("focus", () =>
    $signupEmailLabel.classList.add("active")
  );

  $input.addEventListener("blur", () => {
    if ($input.value === "") {
      $signupEmailLabel.classList.remove("active");
    }
  });
});

// Q&A - Toggle answer visibility controller
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("qna__question")) {
    const questionItem = event.target.closest(".qna__item");

    document.querySelectorAll(".qna__item").forEach((item) => {
      if (item !== questionItem) {
        item.removeAttribute("open");
      }
    });
  }
});

// Slider - drag event
$sliderWrapper.addEventListener("mousedown", (e) => {
  dragstartPoint = e.pageX;
});

$sliderWrapper.addEventListener("mouseup", (e) => {
  dragendPoint = e.pageX;

  if (dragstartPoint < dragendPoint) {
    $sliderWrapper.scrollBy({
      left: dragendPoint - dragstartPoint,
      behavior: "smooth",
    });
  } else {
    $sliderWrapper.scrollBy({
      left: -(dragstartPoint - dragendPoint),
      behavior: "smooth",
    });
  }
});

// Slider - Show/Hide left,right button by scroll width
function setSliderButtonsVisible() {
  const currentScrollPosition = $sliderWrapper.scrollLeft;
  const maxScrollPosition =
    $sliderWrapper.scrollWidth - $sliderWrapper.clientWidth;

  $leftBtn.style.display = currentScrollPosition === 0 ? "none" : "flex";
  $rightBtn.style.display =
    currentScrollPosition >= maxScrollPosition ? "none" : "flex";
}

$leftBtn.addEventListener("click", function () {
  $sliderWrapper.scrollBy({
    left: -$sliderWrapper.clientWidth,
    behavior: "smooth",
  });
});

$rightBtn.addEventListener("click", function () {
  const remainingScroll =
    $sliderWrapper.scrollWidth -
    $sliderWrapper.scrollLeft -
    $sliderWrapper.clientWidth;

  if (remainingScroll < $sliderWrapper.clientWidth) {
    $sliderWrapper.scrollBy({ left: remainingScroll, behavior: "smooth" });
  } else {
    $sliderWrapper.scrollBy({
      left: $sliderWrapper.clientWidth,
      behavior: "smooth",
    });
  }
});

$sliderWrapper.addEventListener("scroll", setSliderButtonsVisible);

window.addEventListener("load", function () {
  setSliderButtonsVisible();
});
