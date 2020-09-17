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
    if (i >= 0) {
        setTimeout(() => { slides[i].style.opacity = "0" }, 1000);
        setTimeout(() => { slides[i].querySelector(".pull-image").style.opacity = "0"; }, 500);
        slides[i].querySelector("h2").classList.add("push-left");
        setTimeout(() => {
            slides[i].querySelector("h2:not(.hollow)").classList.add("push-left");
            setTimeout(() => { slides[i].querySelector("p").classList.add("push-left"); }, 300)
        }, 300);
    }
    setTimeout(() => { 
        slides[j].style.opacity = "1";
        setTimeout(() => { 
            slides[j].querySelector("h2").classList.remove("push-left");
            setTimeout(() => {
                slides[j].querySelector("h2:not(.hollow)").classList.remove("push-left");
                setTimeout(() => { slides[j].querySelector("p").classList.remove("push-left"); }, 200)
            }, 200);
        }, 500);
    }, 1000);
    setTimeout(() => { slides[j].querySelector(".pull-image").style.opacity = "1"; }, 500);
    
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