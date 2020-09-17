let landing = document.querySelector("section.landing-section");

let slides = document.querySelectorAll(".landing-carousel-slide");

let total = slides.length;
let active = -1;

changeSlide();

var timeout = setTimeout(() => {}, 10000);

function changeSlide() {
    let i = active;
    active = active + 1 == total ? 0 : ++active;
    doSlideChange(i, active);
    
    timeout = setTimeout(changeSlide, 10000);
}

function doSlideChange(i, j) {
    if (i >= 0) slides[i].style.opacity = "0";
    slides[j].style.opacity = "1";
}

/************************************************
let next = document.querySelector(".landing-section .next-slide");
let prev = document.querySelector(".landing-section .prev-slide");

next.addEventListener('click', () => {
    if (timeout) clearTimeout(timeout);

    let i = active;
    active = active + 1 == total ? 0 : ++active;
    doSlideChange(i, active);
    
    timeout = setTimeout(changeSlide, 10000);
})

prev.addEventListener('click', () => {
    if (timeout) clearTimeout(timeout);

    let i = active;
    active = active == 0 ? total - 1 : --active;
    doSlideChange(i, active);
    
    timeout = setTimeout(changeSlide, 10000);
}) ***************************************************/