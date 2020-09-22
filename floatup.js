var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};

let floatUp = Array.from(document.querySelectorAll(".float-up"));

let haswork = true;

function loop() {

    floatUp.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('floated');
            floatUp = floatUp.filter((e) => (e != el));
        }
    })

    if (haswork) {
      try {
        doWork();
      } catch(e) {
        console.log(e);
        haswork = false;
      }
    }

    scroll(loop);
}

loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }

    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}
