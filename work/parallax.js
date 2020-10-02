let hasDoWork = true;

try {
    doWork();
} catch (e) {
    hasDoWork = false;
}

let regex = /translateY(.{2,12})/;

if (screen.width > 1000) {

    let oldDoWork = () => { };
    
    if (hasDoWork) {
        oldDoWork = doWork;
        doWork = () => { };
    }
    
    let all = document.querySelectorAll(".top-layer");

    all.forEach((el) => {
        el.classList.remove("float-up");
    })

    doWork = () => {
        oldDoWork();

        let scrollP = window.scrollY / window.innerHeight;

        all.forEach((el) => {
            let t = el.style.transform;
            t = t.replace(regex, "");
            el.style.transform = t + " translateY(" + Math.round(el.getAttribute("data-os") - scrollP * el.getAttribute("data-mm")) + "px)";
        })
    }
}