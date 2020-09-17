let bead = document.querySelector(".bead");

let logo = document.querySelector(".logo");

logo.addEventListener('mouseover', () => {
    bead.classList.add("on-logo");
})

logo.addEventListener('mouseout', () => {
    bead.classList.remove("on-logo");
})

let navlinks = document.querySelectorAll(".nav-link");

navlinks.forEach((nl, i) => {
    nl.addEventListener('mouseover', () => {
        bead.classList.add("on-" + (i + 1));
    })
    
    nl.addEventListener('mouseout', () => {
        if (bead.classList.contains("on-" + (i + 1))) { bead.classList.remove("on-" + (i + 1)); }
        if (bead.classList.contains("click-" + (i + 1))) { bead.classList.remove("click-" + (i + 1)); }
    })

    nl.addEventListener('mousedown', () => {
        bead.classList.add("click-" + (i + 1));
    })

    nl.addEventListener('mouseup', () => {
        bead.classList.remove("click-" + (i + 1));
    })
})