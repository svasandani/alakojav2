let msg = document.querySelector(".message-input");

let msgSpan = msg.querySelector("span");

let msgTA = msg.querySelector("textarea");

msgTA.addEventListener('input', () => {
    msgSpan.textContent = msgTA.value;
})

let email = document.querySelector(".email-input");

let fs = 2;

let touched = false;

let emailSpan = email.querySelector("span");

let emailInput = email.querySelector("input");

const smallify = (span, div, layer) => {
    if (layer > 20) return;
    if (fs <= 0.6) return;
    if (touched) return;
    if (span.offsetWidth < div.offsetWidth) return;

    touched = true;

    fs = fs - 0.05;

    email.style.fontSize = fs + "em";

    setTimeout(() => { touched = false; smallify(span, div, layer + 1); }, 100);
}

const bigify = (span, div, layer) => {
    if (layer > 20) return;
    if (fs >= 2) return;
    if (touched) return;
    if (span.offsetWidth + 75 > div.offsetWidth) return;

    fs = fs + 0.05;

    email.style.fontSize = fs + "em";

    setTimeout(() => { bigify(span, div, layer + 1); }, 100);
}

emailInput.addEventListener('input', () => {
    emailSpan.textContent = emailInput.value;

    let i = 0;

    if (emailSpan.offsetWidth > email.offsetWidth) {
        smallify(emailSpan, email, 1);
    } else {
        if (fs >= 2) return;

        bigify(emailSpan, email, 1);
    }
})