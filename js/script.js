const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const copyright = document.getElementById("copyright");
const d = new Date();
const year = d.getFullYear();
copyright.innerText = `Copyright ©2023 - ${year}`;

const links = document.querySelectorAll('nav li');

links.forEach((link)=>{
  link.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
})

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

const images = [...document.querySelectorAll('.gallery-item')];
const slider = document.querySelector('[data-js="slider"]');
const prevBtn = document.querySelector('[data-js="previous"]');
const nextBtn = document.querySelector('[data-js="next"]');
const active = images.find(image => image.classList.contains('active'));
let currentImage = images.indexOf(active); 

function getSlidePosition() {
  const activeSlide = images[currentImage];

  const sideMargin = Math.floor((slider.offsetWidth - activeSlide.offsetWidth) / 2);

  return - Math.floor(activeSlide.offsetLeft - sideMargin);
}

function updateSlider() {
  slider.style.transform = `translateX(${getSlidePosition()}px)`;
}

function showImage() {
  images[currentImage].classList.add('active');
  images[currentImage].removeAttribute('aria-hidden');
  images[currentImage].setAttribute('tabindex', 0);
}

function hidePrevOrNextImage() {
  images[currentImage].classList.remove('active');
  images[currentImage].setAttribute('aria-hidden', true);
  images[currentImage].setAttribute('tabindex', -1);
}

function scrollToNextImage() {
  hidePrevOrNextImage();

  if (currentImage < images.length - 1) {
    currentImage ++;
  } else {
    currentImage = 0;
  }
  showImage();
  updateSlider();
}

function scrollToPrevImage() {
  hidePrevOrNextImage();

  if (currentImage > 0) {
    currentImage --;
  } else {
    currentImage = images.length - 1;
  }
  showImage();
  updateSlider();
}


updateSlider();


prevBtn.addEventListener('click', scrollToPrevImage);
nextBtn.addEventListener('click', scrollToNextImage);


function setActiveLink() {
  const sections = document.querySelectorAll('section.hlavni'); 
  const navLinks = document.querySelectorAll('nav ul li a'); 

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    const scrollPos = window.scrollY;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks[index].classList.add('act');
    } else {
      navLinks[index].classList.remove('act');
    }
  });
}

window.addEventListener('scroll', setActiveLink);

const cookieBox = document.querySelector(".obal"),
  buttons = document.querySelectorAll(".button");
const executeCodes = () => {
  if (document.cookie !== ''){
    document.getElementById('frame').innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1103.8360694257633!2d17.13137035979684!3d48.85097495226074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47132e51b9b4181f%3A0x55a645a7df8e80bc!2sHorn%C3%AD%20Valy%203859%2F4%2C%20695%2001%20Hodon%C3%ADn!5e0!3m2!1scs!2scz!4v1689024271756!5m2!1scs!2scz" style="border: 0" loading="lazy"></iframe>';
    return;
  } 
  cookieBox.classList.add("show");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "orto-ho.cz= google-maps; max-age=" + 60 * 60 * 24 * 30;
        document.getElementById('frame').innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1103.8360694257633!2d17.13137035979684!3d48.85097495226074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47132e51b9b4181f%3A0x55a645a7df8e80bc!2sHorn%C3%AD%20Valy%203859%2F4%2C%20695%2001%20Hodon%C3%ADn!5e0!3m2!1scs!2scz!4v1689024271756!5m2!1scs!2scz" style="border: 0" loading="lazy"></iframe>';
      }
    });
  });
};
//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);



