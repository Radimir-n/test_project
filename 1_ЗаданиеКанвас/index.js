var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(10, 10, 600, 600);

var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
ctx2.fillRect(10, 10, 600, 50);

let paths = {
    red: null,
    blue: null,
    green: null,
    yellow: null,
    black: null
}

function drawStar(cx, cy, outerRadius, innerRadius, color) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / 5;
    let path = new Path2D()
    paths[color] = path
    path.moveTo(cx, cy - outerRadius)
    for (i = 0; i < 5; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        path.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        path.lineTo(x, y)
        rot += step
    }
    path.lineTo(cx, cy - outerRadius)
    path.closePath();
    path.lineWidth=5;
    path.strokeStyle=color;
    ctx.stroke(path);
    ctx.fillStyle=color;
    ctx.fill(path);
}
drawStar(75, 100, 30, 15, 'red');
drawStar(175, 100, 30, 15, 'blue');
drawStar(275, 100, 30, 15, 'green');
drawStar(375, 100, 30, 15, 'yellow');
drawStar(475, 100,  30, 15, 'black');

canvas.addEventListener("click", function(e) {
    var r = this.getBoundingClientRect(),
        x = e.clientX - r.left,
        y = e.clientY - r.top;
        findColor(x,y)
})
function changeColor(color){
    ctx2.fillStyle = color;
    ctx2.fillRect(10, 10, 600, 50);
    ctx2.fill()
}
function findColor(x,y){
    if (ctx.isPointInPath(paths.red, x, y)){
        changeColor('red')
    } else if(ctx.isPointInPath(paths.blue, x, y)){
        changeColor('blue')
    } else if(ctx.isPointInPath(paths.green, x, y)){
        changeColor('green')
    } else if(ctx.isPointInPath(paths.yellow, x, y)){
        changeColor('yellow')
    } else if(ctx.isPointInPath(paths.black, x, y)){
        changeColor('black')
    } else {
        changeColor('white')
    }
}





