let doWork = () => { };

if (screen.width > 1000) {
    let all = document.querySelectorAll(".top-layer");

    doWork = () => {
        let scrollP = window.scrollY / window.innerHeight;

        all.forEach((el) => {
            el.style.marginBottom = (scrollP * el.getAttribute("data-mm") - el.getAttribute("data-os")) + "px";
        })
    }
}