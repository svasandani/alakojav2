var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};

let floatUp = Array.from(document.querySelectorAll(".float-up"));

let haswork = true;

let nav = document.querySelector("nav");
let prev = 0;

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

    if (screen.width < 1000) {
      let current = window.pageYOffset;

      if (current != prev) {
        if (nav.classList.contains("flyout")) { nav.classList.remove("flyout"); }
      }

      prev = current;
    }

    scroll(loop);
}

loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
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
