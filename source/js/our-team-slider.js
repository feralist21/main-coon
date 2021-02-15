const sliderItemTeam = document.querySelectorAll('.our-team__slider-item');
const prevBtnTeam = document.querySelector('#our-team__button-prev');
const nextBtnTeam = document.querySelector('#our-team__button-next');
let slideIndexTeam = 1; 

showSlidesTeam(slideIndexTeam);

function showSlidesTeam(n) {
  if (n > sliderItemTeam.length) {
    slideIndexTeam = 1;
  }

  if (n < 1) {
    slideIndexTeam = sliderItemTeam.length;
  }

  sliderItemTeam.forEach(item => item.style.display = 'none');

  sliderItemTeam[slideIndexTeam - 1].style.display = 'block';
}

function plusSlidesTeam(n) {
  showSlidesTeam(slideIndexTeam += n);
}

prevBtnTeam.addEventListener('click', (evt) => {
  evt.preventDefault();
  plusSlidesTeam(-1);
});

nextBtnTeam.addEventListener('click', (evt) => {
  evt.preventDefault();
  plusSlidesTeam(1);
});