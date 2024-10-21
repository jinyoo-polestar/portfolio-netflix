const sliderWrapper = document.querySelector('.slider__wrapper');
const leftBtn = document.querySelector('.slider__btn-left');
const rightBtn = document.querySelector('.slider__btn-right');

function updateButtons() {
    const currentScrollPosition = sliderWrapper.scrollLeft;
    const maxScrollPosition = sliderWrapper.scrollWidth - sliderWrapper.clientWidth; 

    leftBtn.style.display = currentScrollPosition === 0 ? 'none' : 'flex';
    rightBtn.style.display = currentScrollPosition >= maxScrollPosition ? 'none' : 'flex';
}

leftBtn.addEventListener('click', function() {
   // Move by one screen width
    sliderWrapper.scrollBy({ left: -sliderWrapper.clientWidth, behavior: 'smooth' });
});

rightBtn.addEventListener('click', function() {
    const remainingScroll = sliderWrapper.scrollWidth - sliderWrapper.scrollLeft - sliderWrapper.clientWidth;
    
    if (remainingScroll < sliderWrapper.clientWidth) {
        // If remaining scroll is less than one screen width, move only the remaining amount
        sliderWrapper.scrollBy({ left: remainingScroll, behavior: 'smooth' });
    } else {
        // Move by one screen width
        sliderWrapper.scrollBy({ left: sliderWrapper.clientWidth, behavior: 'smooth' });
    }
});

// Update button visibility when scrolling
sliderWrapper.addEventListener('scroll', updateButtons);

updateButtons();
