console.log("This is index.js file");
document.querySelector("body").style.overflow = "hidden";
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Arc {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }
    createCircle() {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        context.fillStyle = `#${randomColor}`;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        context.fill();
        context.stroke();
        console.log("hello ekta");
        this.animateCircle()

    }
    animateCircle() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }


    }
}

let circleArray = [];
for (let i = 0; i < 800; i++) {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let dx = (Math.random() - 0.5) * 6;
    let dy = (Math.random() - 0.5) * 6;
    let radius = 20;
    circleArray.push(new Arc(x,y,dx,dy,radius));

}
console.log(circleArray);
function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
       circleArray[i].createCircle();    
    }

}
animate();
canvas.addEventListener("mousemove",(e)=>{
    console.log("e.target");
})

























// let radius = 50;
// function animate() {
//     requestAnimationFrame(animate)
//     context.clearRect(0, 0, innerWidth, innerHeight);
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     context.fillStyle=`#${randomColor}`;
//     context.beginPath();
//     context.arc(x, y, radius, 0, 2 * Math.PI, false);
//     context.fill();
//     context.stroke();
//     x+=dx;
//     y+=dy;
//     if (x+radius > innerWidth||x-radius<0) {
//         dx = -dx;
//     }
//     if(y+radius>innerHeight||y-radius<0){
//         dy = -dy;
//     }
//     circle1.createCircle();

// }
// animate();