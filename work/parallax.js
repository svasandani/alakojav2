let all = document.querySelectorAll(".top-layer");

const doWork = () => {
    let scrollP = window.scrollY / window.innerHeight;

    all.forEach((el) => {
        el.style.marginBottom = (scrollP * el.getAttribute("data-mm") - el.getAttribute("data-os")) + "px";
    })
}