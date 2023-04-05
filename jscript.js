 'use strict';

 //smooth movement

 $(document).ready(function(){
    $("#head").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
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

$(window).scroll(function() {
    $('#HTML').each(function() {
        let elementPosition = $(this).offset().top;
        let elementHeight = $(this).outerHeight();
        let windowHeight = $(window).height();
        let scrollPosition = $(window).scrollTop();
        if (scrollPosition > (elementPosition - windowHeight + elementHeight)) {
            $("#HTML").animate({width: "89%"},1500);
            $("#CSS").animate({width: "70%"},1500);
            $("#JavaScript").animate({width: "69%"},1500);
            $("#jQuery").animate({width: "69%"},1500);
            $("#C").animate({width: "40%"},1500);
            $("#Blender").animate({width: "100%"},1500);
        }
    });
});

// header transperent

$('#head').fadeOut();
$(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
        $('#head').fadeIn('fast'); 
    } else {
        $('#head').fadeOut('fast');
    }
});