let balls = document.querySelectorAll(".ball");

balls.forEach((ball, i) => {
    ball.style.left = "calc(" + ((100 / (balls.length - 1)) * i) + "% - 4px)";
    ball.style.animationDelay = (0.23 * (0 - i)) + "s";
})

let svg = document.querySelector(".line");

let doWork = () => {
    svg.innerHTML = "";

    balls.forEach((ball, i) => {
        if (i == balls.length - 1) return;
    
        let next = balls[i + 1];
    
        var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
        newLine.setAttribute('id','line' + i);
        newLine.setAttribute('x1',ball.offsetLeft + 4);
        newLine.setAttribute('y1',ball.offsetTop + 4);
        newLine.setAttribute('x2',next.offsetLeft + 4);
        newLine.setAttribute('y2',next.offsetTop + 4);
        newLine.setAttribute("stroke", "white")
        svg.append(newLine);
    });
}