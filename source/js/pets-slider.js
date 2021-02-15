const sliderItem = document.querySelectorAll('#pets__slider-item');
const prev = document.querySelector('#pets__button-prev');
const next = document.querySelector('#pets__button-next');
let slideIndex = 1;

 
showSlidesPets(slideIndex);

function showSlidesPets(n) {
  if (n > sliderItem.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = sliderItem.length;
  }

  sliderItem.forEach(item => item.style.display = 'none');
  //sliderItem.forEach(item => item.classList.add('pets__slider-item--hidden'));

  sliderItem[slideIndex - 1].style.display = 'block';
  //sliderItem[slideIndex - 1].classList.add('pets__slider-item--visible');
}

function plusSlidesPets(n) {
  showSlidesPets(slideIndex += n);
}

prev.addEventListener('click', (evt) => {
  evt.preventDefault();
  plusSlidesPets(-1);
});

next.addEventListener('click', (evt) => {
  evt.preventDefault();
  plusSlidesPets(1);
});