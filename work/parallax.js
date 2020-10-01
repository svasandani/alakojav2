let doWork = () => { };

let regex = /translateY(.{2,12})/;

if (screen.width > 1000) {
    let all = document.querySelectorAll(".top-layer");

    all.forEach((el) => {
        el.classList.remove("float-up");
    })

    doWork = () => {
        let scrollP = window.scrollY / window.innerHeight;

        all.forEach((el) => {
            let t = el.style.transform;
            t = t.replace(regex, "");
            el.style.transform = t + " translateY(" + (el.getAttribute("data-os") - scrollP * el.getAttribute("data-mm")) + "px)";
        })
    }
}