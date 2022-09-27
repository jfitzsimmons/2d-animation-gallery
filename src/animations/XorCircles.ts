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
  graphics: PIXI.Graphics | PIXI.Sprite

  constructor(bounds: Bounds) {
    this.bounds = bounds
    this.innerCrcmf = rndmRng(105, 18)
    this.cx = Math.round(
      rndmRng(
        this.bounds.right - 85 - this.innerCrcmf,
        this.bounds.left + 85 + this.innerCrcmf
      )
    )
    this.cy = Math.round(
      rndmRng(
        this.bounds.bottom - 85 - this.innerCrcmf,
        this.bounds.top + 85 + this.innerCrcmf
      )
    )
    this.start = Math.random() * Math.PI * 2
    this.speedX = Math.cos(this.start) / rndmRng(5, 1)
    this.speedY = Math.sin(this.start) / rndmRng(5, 1)
    this.radius = 0
    this.curr = 0

    this.grooves = rndmRng(20, 5)
    this.color = XorCircles.getFillColors()
    this.light = rndmRng(60, 10)
    this.strokeColor = XorCircles.getStrokeColors()
    this.graphics = new PIXI.Graphics()
    this.graphics.blendMode = PIXI.BLEND_MODES.XOR
  }
  update() {
    if (this.radius < this.innerCrcmf && typeof this.radius !== 'undefined') {
      if (this.graphics instanceof PIXI.Graphics) {
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
    }

    if (this.curr < 101) {
      if (this.graphics instanceof PIXI.Graphics) {
        this.graphics
          .arc(
            this.cx,
            this.cy,
            Math.round(this.innerCrcmf + rndmRng(67, 25)),
            this.start,
            (Math.PI * 2 * this.curr) / 100 + this.start,
            false
          )
          .lineStyle(
            Math.round(rndmRng(22, 5)),
            parseInt(`0x${this.strokeColor}`)
          )
        this.curr += rndmRng(3.3, 1.7)
      }
      if (this.curr >= 101 && Math.random() < 0.5)
        this.graphics.cacheAsBitmap = true
    } else {
      if (
        this.graphics.x + this.cx + this.graphics.width / 2 >
          this.bounds.right ||
        this.graphics.x + this.cx - this.graphics.width / 2 < this.bounds.left
      ) {
        this.speedX *= -1
      } else if (
        this.graphics.y + this.cy - this.graphics.height / 2 <
          this.bounds.top ||
        this.graphics.y + this.cy + this.graphics.width / 2 > this.bounds.bottom
      ) {
        this.speedY *= -1
      }
      this.graphics.x -= this.speedX
      this.graphics.y -= this.speedY
    }
  }
}

class Drape {
  bounds: Bounds
  sprite: PIXI.Sprite
  startAngle = 0
  swing = rndmRng(0.05, 0.005)
  sway = rndmRng(20, 0)
  startX: number
  flipSwing = Math.random() < 0.5 ? 1 : -1
  flipSway = Math.random() < 0.5 ? 1 : -1

  constructor(bounds: Bounds, x: number, sprite: PIXI.Sprite) {
    this.bounds = bounds
    this.sprite = sprite
    this.startX = x
    this.sprite.x = x
    this.sprite.y = rndmRng(-20, -40)
    this.sprite.height = rndmRng(
      this.bounds.bottom * 1.8,
      this.bounds.bottom * 1.5
    )
    this.sprite.anchor.set(0.5, rndmRng(0.4, 0.1))

    return this
  }

  update() {
    if (this.sprite.rotation > this.startAngle + this.swing) {
      this.flipSwing = -1
    }

    if (this.sprite.rotation <= this.startAngle - this.swing) {
      this.flipSwing = 1
    }

    this.sprite.rotation += (this.swing * this.flipSwing) / rndmRng(800, 200)

    if (this.sprite.x > this.startX + this.sway) {
      this.flipSway = -1
    }

    if (this.sprite.x <= this.startX - this.sway) {
      this.flipSway = 1
    }

    this.sprite.x += (this.sway * this.flipSway) / rndmRng(500, 40)
  }
}

export interface Locusts {
  d58?: PIXI.Sprite
  d74?: PIXI.Sprite
  d106?: PIXI.Sprite
}
export default class XorCircles {
  static circles: Circle[] = []
  drapes: Drape[] = []
  timeouts: ReturnType<typeof setTimeout>[] = []
  static strokeColors = ['506EE5', '68B2F8', '7037CD']
  static fillColors = [209, 291, 263]
  static sprites: PIXI.Sprite[]

  static getSprite(index: number) {
    return this.sprites[index]
  }

  static getStrokeColors() {
    return this.strokeColors[
      Math.floor(Math.random() * this.strokeColors.length)
    ]
  }
  static getFillColors() {
    return this.fillColors[Math.floor(Math.random() * this.fillColors.length)]
  }

  createDrapes() {
    const loader = new PIXI.Loader()
    loader
      .add(
        'd58',
        `${process.env.ASSET_PATH}assets/images/xorCircles/tile58.png`
      )
      .add(
        'd74',
        `${process.env.ASSET_PATH}assets/images/xorCircles/tile74.png`
      )
      .add(
        'd106',
        `${process.env.ASSET_PATH}assets/images/xorCircles/tile106.png`
      )
    loader.load((loader, resources) => {
      const tiles = Object.keys(resources)
      tiles.forEach((t) => {
        for (let start = 0; start < AnimationStage.bounds.right; start++) {
          const sprite = new PIXI.Sprite(resources[t].texture)
          const drape = new Drape(AnimationStage.bounds, start, sprite)

          this.drapes.push(drape)
          AnimationStage.stage.addChild(drape.sprite)
          start += drape.sprite.width
        }
      })
    })
  }

  newInstance() {
    return new XorCircles()
  }

  init(bounds: Bounds) {
    this.createDrapes()

    const circleAmount = Math.round((bounds.right * bounds.bottom) / 50000)
    for (let i = circleAmount; i--; ) {
      this.timeouts.push(
        setTimeout(() => {
          const circle = new Circle(bounds)
          XorCircles.circles.push(circle)
        }, i * rndmRng(2000, 900))
      )
    }
  }

  update() {
    if (XorCircles.circles.length > 0) {
      for (let i = XorCircles.circles.length; i--; ) {
        const child = XorCircles.circles[i].update()
        if (child) AnimationStage.stage.addChild(child)
      }
    }

    if (this.drapes.length > 0) {
      for (let i = this.drapes.length; i--; ) {
        this.drapes[i].update()
      }
    }
  }

  reset(restart: boolean) {
    for (const to in this.timeouts) {
      window.clearTimeout(to)
    }
    AnimationStage.stage.removeChildren()
    XorCircles.circles.length = 0
    if (restart) this.init(AnimationStage.bounds)
  }
}
