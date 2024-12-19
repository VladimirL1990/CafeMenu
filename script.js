// Эффект прокрутки страницы и изменения фона
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

// Плавное появление текста
const paragraphs = document.querySelectorAll('p');
window.addEventListener('scroll', function () {
  paragraphs.forEach(paragraph => {
    const rect = paragraph.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      paragraph.classList.add('visible');
    }
  });
});

// Бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const navbar = document.querySelector('.navbar');

burgerMenu.addEventListener('click', function () {
  burgerMenu.classList.toggle('open');
  navbar.classList.toggle('open');
});

// Плавная загрузка картинок
window.onload = function() {
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    image.classList.add('loaded');
  });
};

// Эффект падающих сердец
document.addEventListener('DOMContentLoaded', () => {
  const heartContainer = document.querySelector('.hearts');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heartContainer.appendChild(heart);
  }
});
