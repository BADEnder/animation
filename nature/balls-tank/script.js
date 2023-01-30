const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d')

let cw = window.innerWidth
let ch = window.innerHeight

canvas.width = cw 
canvas.height = ch

ctx.fillStyle = "rgba(0, 0, 0, 0.9)"
ctx.fillRect(0, 0, cw, ch)


let balls = []
let ballsNum = 1000
let addDelay = 0

class Ball {
    constructor (x, y, size, speed) {
        this.xIndex = 1
        this.yIndex = 1
        this.x = x 
        this.y = y 
        this.r = size 
        this.speed = speed 
    }

    draw(ctx) {
        this.x += this.xIndex * this.speed
        this.y += this.yIndex * this.speed

        if (this.x > cw) {
            this.xIndex = -1
        }
        
        if (this.x < 0) {
            this.xIndex = 1
        }

        if (this.y > ch) {
            this.yIndex = -1
        }

        if (this.y < 0) {
            this.yIndex = 1
        }

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true)
        // ctx.fillStyle = 'red'
        ctx.fillStyle = `rgba(100, ${this.x/cw *255}, ${this.y/ch * 255}, 1)`
        ctx.fill()
    }
}


const update = () => {
    if (balls.length < ballsNum && addDelay%5==0 ) {
        ball = new Ball (
            cw * Math.random(),
            0, 
            3,
            5
        ) 

        balls.push(ball)
    }

    // ctx.fillStyle = "rgba(0, 0, 0, 0.4)"
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
    ctx.fillRect(0, 0, cw, ch)

    for (let idx in balls) {
        balls[idx].draw(ctx)
    }

    addDelay += 1
}

setInterval( () => {
    update()
}, 1000 / 60)

