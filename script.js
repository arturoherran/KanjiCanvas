window.onload = function () {
    sizeCanvas();
}

function sizeCanvas() {
    let canvas = document.getElementById('mainCanvas');
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    WIDTH = canvas.width;
    HEIGHT = canvas.height;

    fillCanvas();
    Moon();
}

function fillCanvas() {    
    let canvas = document.getElementById('mainCanvas');
    let ctx = canvas.getContext("2d");
    var grd = ctx.createLinearGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"black");

    ctx.fillStyle = grd;
    ctx.fillRect(  0, 0, WIDTH, HEIGHT );

}

function Moon() {
    let canvas = document.getElementById('mainCanvas');
    let ctx = canvas.getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "white");
    gradient.addColorStop("0.5" ,"black");
    gradient.addColorStop("1.0", "yellow");
    ctx.lineWidth = 10;

    // Primera linea horizontal
    ctx.beginPath();
    ctx.moveTo(900,225);
    ctx.lineTo(1000,225);
    ctx.closePath();
    ctx.stroke();

    // segunda linea horizontal
    ctx.beginPath();
    ctx.moveTo(900,255);
    ctx.lineTo(1000,255);
    ctx.closePath();
    ctx.stroke();

    // tercera linea horizontal
    ctx.beginPath();
    ctx.moveTo(900,285);
    ctx.lineTo(1000,285);
    ctx.closePath();
    ctx.stroke();

    // Primera linea vertical
    ctx.beginPath();
    ctx.moveTo(900,221);
    ctx.lineTo(900,305);
    ctx.lineTo(890,325);
    ctx.stroke();

    // Segunda linea vertical
    ctx.beginPath();
    ctx.moveTo(999,220);
    ctx.lineTo(999,325);
    ctx.lineTo(985,325);
    ctx.stroke();

}