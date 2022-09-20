import { AnimationStage } from '..'
import { Bounds } from '../types'
import { hslToHex, rndmRng } from '../utils'
import * as PIXI from 'pixi.js'

class Circle {
  bounds: Bounds
  cx: number
  cy: number
  start: number
  speedX: number
  speedY: number
  radius: number
  curr: number
  innerCrcmf: number
  grooves: number
  color: number
  light: number
  strokeColor: string
  graphics: PIXI.Graphics

  constructor(bounds: Bounds) {
    this.bounds = bounds
    this.cx = Math.round(rndmRng(this.bounds.right - 15, this.bounds.left + 15))
    this.cy = Math.round(rndmRng(this.bounds.bottom - 15, this.bounds.top + 15))
    this.start = Math.random() * Math.PI * 2
    this.speedX = Math.cos(this.start) / rndmRng(5, 1)
    this.speedY = Math.sin(this.start) / rndmRng(5, 1)
    this.radius = 0
    this.curr = 0
    this.innerCrcmf = rndmRng(130, 25)
    this.grooves = rndmRng(35, 10)
    this.color = XorCircles.getFillColors()
    this.light = rndmRng(60, 10)
    this.strokeColor = XorCircles.getStrokeColors()
    this.graphics = new PIXI.Graphics()
    this.graphics.blendMode = PIXI.BLEND_MODES.XOR
  }
  update() {
    if (this.radius < this.innerCrcmf && typeof this.radius !== 'undefined') {
      this.radius += Math.round(this.innerCrcmf / this.grooves)
      this.graphics.beginFill(
        hslToHex(
          Math.round((this.color += 0.3)),
          Math.round(100 - rndmRng(50, 0)),
          Math.round((this.light += 0.1))
        )
      )

      this.graphics.drawCircle(this.cx, this.cy, this.radius)
      return this.graphics
    }

    if (this.curr < 101) {
      this.graphics
        .arc(
          this.cx,
          this.cy,
          Math.round(this.innerCrcmf + rndmRng(45, 10)),
          this.start,
          (Math.PI * 2 * this.curr) / 100 + this.start,
          false
        )
        .lineStyle(
          Math.round(rndmRng(25, 5)),
          parseInt(`0x${this.strokeColor}`)
        )
      this.curr += rndmRng(8.8, 3.4)
      if (this.curr == 100) this.graphics.cacheAsBitmap = true
    } else {
      if (
        this.graphics.x + this.cx + this.innerCrcmf > this.bounds.right ||
        this.graphics.x + this.cx < this.bounds.left
      ) {
        this.speedX *= -1
      } else if (
        this.graphics.y + this.cy < this.bounds.top ||
        this.graphics.y + this.cy + this.innerCrcmf > this.bounds.bottom
      ) {
        this.speedY *= -1
      }

      this.graphics.x -= this.speedX
      this.graphics.y -= this.speedY
    }
  }
}

export default class XorCircles {
  circles: Circle[]
  timeouts: ReturnType<typeof setTimeout>[]
  static strokeColors = ['506EE5', '68B2F8', '7037CD']
  static fillColors = [209, 291, 263]
  constructor() {
    this.circles = []
    this.timeouts = []
  }

  static getStrokeColors() {
    return this.strokeColors[
      Math.floor(Math.random() * this.strokeColors.length)
    ]
  }
  static getFillColors() {
    return this.fillColors[Math.floor(Math.random() * this.fillColors.length)]
  }

  init(bounds: Bounds) {
    const circleAmount = Math.round((bounds.right * bounds.bottom) / 47000)
    for (let i = circleAmount; i--; ) {
      this.timeouts.push(
        setTimeout(() => {
          const circle = new Circle(bounds)
          this.circles.push(circle)
        }, i * rndmRng(2000, 900))
      )
    }
  }

  update() {
    if (this.circles.length > 0) {
      for (let i = this.circles.length; i--; ) {
        const child = this.circles[i].update()
        if (child) AnimationStage.stage.addChild(child)
      }
    }
  }

  reset() {
    for (const to in this.timeouts) {
      window.clearTimeout(to)
    }
    AnimationStage.stage.removeChildren()
    this.circles.length = 0
    this.init(AnimationStage.bounds)
  }
}
