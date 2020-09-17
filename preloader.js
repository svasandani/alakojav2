let els = document.querySelectorAll(".preloader *");

function recursiveFadeIn(els, i, time) {
    if (i == els.length) return;

    setTimeout(() => {
        els[i].classList.add("anim");
        recursiveFadeIn(els, i+1, time);
    }, time)
}

recursiveFadeIn(els, 0, 200);


window.addEventListener('load', onloadfunc);

function onloadfunc() {
    let preloader = document.querySelector(".preloader");

    let lastEl = els[els.length - 1]
    
    preloader.classList.add("loaded");

    setTimeout(() => {preloader.classList.add("loaded");}, 5000);
}

// fade out on link click

document.addEventListener('DOMContentLoaded', () => {
    let fader = document.querySelector(".fader");

    let links = document.querySelectorAll("a");

    links.forEach((link) => {
        if (link.hostname !== window.location.hostname || link.pathname === window.location.pathname) return;
        link.addEventListener('click', (e) => { addFadeOut(fader,link,e); });
    });
});

function addFadeOut(fader, link, e) {
    const listener = () => {
        window.location = link.href;
        fader.removeEventListener('animationend', listener);
    };

    fader.addEventListener('animationend', listener);

    e.preventDefault();
    fader.classList.add("fade-in");
}

window.addEventListener('pageshow', (e) => {
    if (!e.persisted) {
      return;
    }
    let fader = document.querySelector(".fader");
    fader.classList.remove("fade-in");
});