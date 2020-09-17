let bead = document.querySelector(".bead");

let logo = document.querySelector(".logo");

let navlinks = document.querySelectorAll(".nav-link");

let baseIndex = bead.getAttribute("data-index");

let hover = baseIndex;
let click = -1;

doBead();

function doBead() {
    if (bead.classList.contains("on-0")) { bead.classList.remove("on-0"); }
    navlinks.forEach((nl, i) => {
        if (bead.classList.contains("on-" + (i + 1))) { bead.classList.remove("on-" + (i + 1)); }
    })

    if (hover >= 0) {
        bead.classList.add("on-" + hover);
    }

    if (bead.classList.contains("click-0")) { bead.classList.remove("click-0"); }
    navlinks.forEach((nl, i) => {
        if (bead.classList.contains("click-" + (i + 1))) { bead.classList.remove("click-" + (i + 1)); }
    })

    if (click >= 0) {
        bead.classList.add("click-" + click);
    } 
}

logo.addEventListener('mouseover', () => {
    hover = 0;
    doBead();
});

logo.addEventListener('mouseout', () => {
    hover = baseIndex;
    click = -1;
    doBead();
})

navlinks.forEach((nl, i) => {
    nl.addEventListener('mouseover', () => {
        hover = i + 1;
        doBead();
    })
    
    nl.addEventListener('mouseout', () => {
        hover = baseIndex;
        click = -1;
        doBead();
    })

    nl.addEventListener('mousedown', () => {
        click = i + 1;
        doBead();
    })
})