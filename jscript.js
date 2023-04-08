 'use strict';

 //smooth movement

document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("#head a");
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            event.preventDefault();
            let id = this.getAttribute("href");
            let target = document.querySelector(id);
            let scrollTop = target.offsetTop;
            window.scrollTo({
                top: scrollTop,
                behavior: "smooth"
            });
        });
    }
});

// corousel

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
const slideWidth = slides[0].getBoundingClientRect().width;
const maxSlides = 1;
let currentSlide = 0;

track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

function moveSlides(direction) {
    if (direction === 'prev') {
        currentSlide--;
    } else {
        currentSlide++;
    }
  
    track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    updateButtons();
}

function updateButtons() {
    if (currentSlide === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }
  
    if (currentSlide === slides.length - maxSlides) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

prevButton.addEventListener('click', () => {
    moveSlides('prev');
});

nextButton.addEventListener('click', () => {
    moveSlides('next');
});

updateButtons();

// lines

window.addEventListener('scroll', function() {
    let html = document.getElementById('HTML');
    let css = document.getElementById('CSS');
    let javascript = document.getElementById('JavaScript');
    let jquery = document.getElementById('jQuery');
    let c = document.getElementById('C');
    let blender = document.getElementById('Blender');
    let elements = [html, javascript, jquery, blender];

    elements.forEach(function(element) {
        let elementPosition = element.offsetTop;
        let elementHeight = element.offsetHeight;
        let windowHeight = window.innerHeight;
        let scrollPosition = window.scrollY;
        if (scrollPosition > (elementPosition - windowHeight + elementHeight)) {
            element.style.width = "100%";
            css.style.width = "69%";
            c.style.width = "40%";
            element.style.transition = "width 2s ease-in-out";
            css.style.transition = "width 2s ease-in-out";
            c.style.transition = "width 2s ease-in-out";
        }
    });
});

// header transperent

let head = document.querySelector('#head');
head.style.opacity = '0';

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 10) {
        head.style.opacity = '1';
        head.style.transition = 'opacity 0.3s ease-in-out';
    } else {  
        head.style.opacity = '0';
        head.style.transition = 'opacity 0.3s ease-in-out';
    }
});

// animation for pics in portfolio

let img = document.querySelector('#port_meme_img');
let opacity = 0;
let interval = setInterval(function() {
  opacity += 0.01;
  img.style.opacity = opacity;
  if (opacity >= 1) clearInterval(interval);
}, 10);
