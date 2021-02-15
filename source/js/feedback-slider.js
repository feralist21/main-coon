const sliderItemFeedback = document.querySelectorAll('.feedback__slider-item');
const prevFeedback = document.querySelector('#feedback__button-prev');
const nextFeedback = document.querySelector('#feedback__button-next');
let slideIndexFeedback = 1; 

showSlidesFeedback(slideIndexFeedback);

function showSlidesFeedback(n) {
  if (n > sliderItemFeedback.length) {
    slideIndexFeedback = 1;
  }

  if (n < 1) {
    slideIndexFeedback = sliderItemFeedback.length;
  }

  sliderItemFeedback.forEach(item => item.style.display = 'none');

  sliderItemFeedback[slideIndexFeedback - 1].style.display = 'block';
}

function plusSlidesFeedback(n) {
  showSlidesFeedback(slideIndexFeedback += n);
}

prevFeedback.addEventListener('click', (evt) => {
  evt.preventDefault();
  plusSlidesFeedback(-1);
});

nextFeedback.addEventListener('click', (evt) => {
  evt.preventDefault();
  plusSlidesFeedback(1);
});