if (window.screen.width >= 1000) {

    let bead = document.querySelector(".bead");

    let logo = document.querySelector(".logo");

    let navlinks = document.querySelectorAll(".nav-link");

    let baseIndex = bead.getAttribute("data-index");

    let hover = baseIndex;
    let click = true;
    let navaway = false;
    let ready = false;

    doBead();

    function doBead() {
        if (bead.classList.contains("on-0")) { bead.classList.remove("on-0"); }
        navlinks.forEach((nl, i) => {
            if (bead.classList.contains("on-" + (i + 1))) { bead.classList.remove("on-" + (i + 1)); }
        })

        if (hover >= 0) {
            bead.classList.add("on-" + hover);
        }

        if (bead.classList.contains("click")) { bead.classList.remove("click"); }

        if (click) {
            bead.classList.add("click");
        } 

        setTimeout(() => { bead.setAttribute("style", "transition: 0.13s ease-out;"); ready = true; }, 500);
    }

    logo.addEventListener('mouseover', () => {
        if (navaway || !ready) return;
        hover = 0;
        click = false;
        doBead();
    });

    logo.addEventListener('mouseout', () => {
        if (navaway || !ready) return;
        hover = baseIndex;
        click = true;
        doBead();
    })

    logo.addEventListener('mousedown', () => {
        click = true;
        doBead();
    })

    logo.addEventListener('mouseup', () => {
        navaway = true;
        click = true;
        doBead();
    })

    navlinks.forEach((nl, i) => {
        if (nl.classList.contains("cta-link")) { return; }
        nl.addEventListener('mouseover', () => {
            if (navaway || !ready) return;
            hover = i + 1;
            click = false;
            doBead();
        })
        
        nl.addEventListener('mouseout', () => {
            if (navaway || !ready) return;
            hover = baseIndex;
            click = true;
            doBead();
        })

        nl.addEventListener('mousedown', () => {
            click = true;
            doBead();
        })

        nl.addEventListener('mouseup', () => {
            navaway = true;
            click = true;
            doBead();
        })
    });

} else {
    let flyout = document.querySelector(".flyout-button");

    let nav = document.querySelector("nav");

    let navlinks = document.querySelectorAll(".nav-link");

    navlinks.forEach((nl) => {
        nl.classList.add("pulled-up");
    });

    const cascadeLinks = (links, i) => {
        if (i == links.length) return;

        links[i].classList.remove("pulled-up");

        setTimeout(() => { cascadeLinks(links, i + 1); }, 130);
    }

    const deCascadeLinks = (links, i) => {
        if (i < 0) return;

        links[i].classList.add("pulled-up");

        setTimeout(() => { deCascadeLinks(links, i - 1); }, 60);
    }

    const toggleFlyout = () => {
        if (nav.classList.contains("flyout")) {
            nav.classList.remove("flyout");
            deCascadeLinks(navlinks, navlinks.length - 1);
        } else {
            nav.classList.add("flyout");
            cascadeLinks(navlinks, 0);
        }
    };

    flyout.addEventListener('click', toggleFlyout);
}