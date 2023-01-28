'use strict'
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

let cw = window.innerWidth
let ch = window.innerHeight

canvas.width = cw
canvas.height = ch

ctx.fillStyle = "rgba(0, 0, 0, 1)"
ctx.fillRect(0, 0, cw, ch)

class Star {
    constructor (x, y, r) {
        this.wIndex = Math.random()
        if (this.wIndex > 0.5) {
            this.x = x
        } else {
            this.x = -x
        }
        this.y = y 
        this.r = r
    }

    draw (ctx) {
        this.speed = 1

        this.x += this.speed 
        this.y += this.speed 

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true)
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.fill()

        if (this.x > cw || this.y > ch) {
            this.wIndex = Math.random()
            if (this.wIndex > 0.5) {
                this.x = Math.random() * cw
            } else {
                this.x = -Math.random() * cw
            }
            this.y = 0
        }
    }

}


const stars = []
const starsNum = 1000

const update = () => {
    if (stars.length < starsNum) {
        let star = new Star (
            Math.random() * cw,
            0,
            1
        )

        stars.push(star)
    }

    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
    ctx.fillRect(0, 0, cw, ch)

    for (let idx in stars) {
        stars[idx].draw(ctx)
    }

}


setInterval( () => {
    update()
    // console.log(stars)
    // console.log("hello")
}, 1000 / 60)