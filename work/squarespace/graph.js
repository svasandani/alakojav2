let balls = document.querySelectorAll(".ball");

let svg = document.querySelector(".line");

const doWork = () => {
    svg.innerHTML = "";

    balls.forEach((ball, i) => {
        if (i == balls.length - 1) return;
    
        let next = balls[i + 1];
    
        var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
        newLine.setAttribute('id','line' + i);
        newLine.setAttribute('x1',ball.offsetLeft + 7.5);
        newLine.setAttribute('y1',ball.offsetTop + 7.5);
        newLine.setAttribute('x2',next.offsetLeft + 7.5);
        newLine.setAttribute('y2',next.offsetTop + 7.5);
        newLine.setAttribute("stroke", "white")
        svg.append(newLine);
    });
}