 'use strict';

 //smooth movement

document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll(".head a");
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

let head = document.querySelector('.head');
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

// header mobile

if (window.matchMedia("(max-width: 767px)").matches) {
    const header = document.querySelector('.head');
    const htmlToAdd = '<button class="toggle-button"><img src="./pics/menu.png" class="img_head"></button>';

    header.insertAdjacentHTML('afterbegin', htmlToAdd);

    const button = document.querySelector('.toggle-button');
    const infoBlock = document.querySelector('.list');

    button.addEventListener('click', function() {
        if (infoBlock.classList.contains('visible')) {
            infoBlock.classList.remove('visible');
        } else {
            infoBlock.classList.add('visible');
        }
    });
}

// pics in portfolio

function zoomIn(img) {
    let zoomed = document.createElement("div");
    zoomed.className = "zoomed";
    let zoomedImg = document.createElement("img");
    zoomedImg.src = img.src;
    zoomedImg.onclick = function() {
        document.body.removeChild(zoomed);
    }
    zoomed.appendChild(zoomedImg);
    document.body.appendChild(zoomed);
}