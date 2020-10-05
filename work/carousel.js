let is = document.querySelectorAll(".banner-fill");

let topshowing = true;

let changeslide = () => {
    if (!topshowing) {
        is[0].style.opacity = "0";
        is[1].style.opacity = "1";
        topshowing = true;
    } else {
        is[0].style.opacity = "1";
        is[1].style.opacity = "0";
        topshowing = false;
    }

    setTimeout(changeslide, 8000);
}

changeslide();