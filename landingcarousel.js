let landing = document.querySelector("section.landing-section");

let slides = document.querySelectorAll(".landing-carousel-slide");

let total = slides.length;
let active = 0;

setTimeout(changeSlide, 10000);

function changeSlide() {
    slides[active].style.opacity = "0";
    console.log(active);
    active = active + 1 == total ? 0 : ++active;
    console.log(active);
    slides[active].style.opacity = "1";
    setTimeout(changeSlide, 10000);
}