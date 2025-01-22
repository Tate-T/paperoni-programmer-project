const dropdownBtn = document.querySelector('.header-dropdown-btn');
const dropdownList = document.querySelector('.header-dropdown-content');
const cirkle = document.querySelector('.header-cirkle');
const elipse = document.querySelector('.header-ellipse');

const cirkleCalcul = document.querySelector('.time-calculator-cirkle');
const elipseCalcul = document.querySelector('.time-calculator-ellipse');
const img = document.querySelector('.header-cirkle-img');
const body = document.querySelector('body');

const allSection = document.querySelectorAll('section');
const allText = document.querySelectorAll('p');
const allHeader = document.querySelector('header');
const allFoot = document.querySelector('footer');
const allLink = document.querySelectorAll('a');
console.log(allLink)

const allTitleH1 = document.querySelectorAll('h1');
const allTitleH2 = document.querySelectorAll('h2');
const allTitleH3 = document.querySelectorAll('h3');

dropdownBtn.addEventListener('click', () => {
  dropdownList.classList.toggle('show');
});

cirkle.addEventListener('click', event => {
  cirkle.classList.toggle('header-cirkle-right');

  if (cirkle.classList.contains('header-cirkle-right')) {
    body.style.backgroundColor = '#8a8a8a';
    img.src = '../img/moon.svg';
    cirkle.style.backgroundColor = 'black';
    elipse.style.backgroundColor = '#FFF';

    elipseCalcul.style.backgroundColor = '#FFF';

    allText.forEach(text => {
      text.classList.toggle('all-text-white');
      text.classList.toggle('all-text-black');
    });

    allTitleH1.forEach(titleH1 => {
      titleH1.classList.toggle('all-title-white');
      titleH1.classList.toggle('all-title-black');
    });

    allTitleH2.forEach(titleH2 => {
      titleH2.classList.toggle('all-title-white');
      titleH2.classList.toggle('all-title-black');
    });

    allTitleH3.forEach(titleH3 => {
      titleH3.classList.toggle('all-title-white');
      titleH3.classList.toggle('all-title-black');
    });

    allSection.forEach(section => {
      section.classList.toggle('all-section-black');
      section.classList.toggle('all-section-white');
    });

    allHeader.classList.toggle('all-section-black');
    allFoot.classList.toggle('all-section-black');

    cirkleCalcul.classList.toggle('.all-circle-bg-white');
    cirkleCalcul.classList.toggle('.all-circle-bg-black');

    allLink.forEach(link => {
      link.classList.toggle('all-link-white');
      link.classList.toggle('all-link-black');
    });
  } else {
    img;
     body.style.backgroundColor = "white"
    img.src = '../img/sun.svg';
    cirkle.style.backgroundColor = 'white';
    elipse.style.backgroundColor = '#7a7a7a';

    elipseCalcul.style.backgroundColor = '#7a7a7a';

    allText.forEach(text => {
      text.classList.toggle('all-text-white');
      text.classList.toggle('all-text-black');
    });

    allTitleH1.forEach(titleH1 => {
      titleH1.classList.toggle('all-title-white');
      titleH1.classList.toggle('all-title-black');
    });

    allTitleH2.forEach(titleH2 => {
      titleH2.classList.toggle('all-title-white');
      titleH2.classList.toggle('all-title-black');
    });

    allTitleH3.forEach(titleH3 => {
      titleH3.classList.toggle('all-title-white');
      titleH3.classList.toggle('all-title-black');
    });

    allSection.forEach(section => {
      section.classList.toggle('all-section-black');
      section.classList.toggle('all-section-white');
    });

    allHeader.classList.toggle('all-section-black');
    allFoot.classList.toggle('all-section-black');

    cirkleCalcul.classList.toggle('.all-circle-bg-white');
    cirkleCalcul.classList.toggle('.all-circle-bg-black');

    allLink.forEach(link => {
      link.classList.toggle('all-link-white');
      link.classList.toggle('all-link-black');
    });
  }
});
