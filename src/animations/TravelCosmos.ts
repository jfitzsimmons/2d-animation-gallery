import AnimationStage from '..'
import { Bounds } from '../types'
import { hslToHex, rndmRng, shuffle } from '../utils'
import * as PIXI from 'pixi.js'

const hueSat: [number, number][] = [
  [360, 0],
  [204, 100],
  [260, 31],
  [340, 89],
  [179, 79],
]

/**
 * testjpf
 *
 * need to figure out pix transfor that will scale image and move away from start at correct angle and speed.
 * vector3 in glmatrix and lerp in three.js (LERP)
 * just an x y lerp as long as all things grow at the same rate.
 *
 * git clone https://github.com/frequin/space-travel.git
 * 
 *  this.speedX = Math.cos(this.start) / rndmRng(5, 1)
 * instead: this.speedX = math.abs(x - center) / (divided by Some constant?)
 * 
    this.speedY = Math.sin(this.start) / rndmRng(5, 1)
     * instead: this.speedy = math.abs(y - center) / (divided by Some constant?)

 */
function drawDashLine(
  graphics: PIXI.Graphics,
  toX: number,
  toY: number,
  dash = 16,
  gap = 8
) {
  const currentPosition = {
    x: graphics.x,
    y: graphics.y,
  }

  const absValues = {
    toX: Math.abs(toX),
    toY: Math.abs(toY),
  }

  for (
    ;
    Math.abs(currentPosition.x) < absValues.toX ||
    Math.abs(currentPosition.y) < absValues.toY;

  ) {
    currentPosition.x =
      Math.abs(currentPosition.x + dash) < absValues.toX
        ? currentPosition.x + dash
        : toX
    currentPosition.y =
      Math.abs(currentPosition.y + dash) < absValues.toY
        ? currentPosition.y + dash
        : toY

    graphics.lineTo(currentPosition.x, currentPosition.y)

    currentPosition.x =
      Math.abs(currentPosition.x + gap) < absValues.toX
        ? currentPosition.x + gap
        : toX
    currentPosition.y =
      Math.abs(currentPosition.y + gap) < absValues.toY
        ? currentPosition.y + gap
        : toY

    graphics.moveTo(currentPosition.x, currentPosition.y)
  }
}

class Burst {
  huesSats: [number, number][]
  x: number
  y: number
  width: number
  height: number
  size: number
  hsIndex: number
  graphics: PIXI.Graphics

  constructor(bounds: Bounds) {
    this.huesSats = shuffle(hueSat)
    this.x = Math.round(rndmRng(bounds.right * 0.75, bounds.right * 0.25))
    this.y = Math.round(rndmRng(bounds.bottom * 0.75, bounds.bottom * 0.25))
    this.size = Math.round(rndmRng(bounds.bottom * 0.29, bounds.bottom * 0.08))
    this.hsIndex = 0
    this.graphics = new PIXI.Graphics()
    this.graphics.x = this.x
    this.graphics.y = this.y
    this.width = rndmRng(5, 1)
    this.height = rndmRng(5, 1)
  }

  draw() {
    //setDashedLines()

    for (let i = 0; i < this.size; i++) {
      if (i < this.size / 40) {
        this.hsIndex = 0
      } else if (i < this.size / 13) {
        this.hsIndex = 1
      } else if (i < this.size / 6) {
        this.hsIndex = 2
      } else {
        this.hsIndex = 3
      }
      //const hueSat = ReturnFirst(this.huesSats, this.hsIndex)
      const hue: number = this.huesSats[this.hsIndex][0]
      const sat: number = this.huesSats[this.hsIndex][1]

      //this.hueSat = hueSat[Math.round(rndmRng(hueSat.length - 1, 0))]
      const strokeColor = hslToHex(hue, sat, Math.round(rndmRng(99, 60)))

      this.graphics.lineStyle(
        Math.round(rndmRng(5, 1)),
        parseInt(`${strokeColor}`),
        rndmRng(1, 0.5)
      )

      const modX = rndmRng(2.5, 1.5)
      const modY = rndmRng(2.5, 1.5)
      const dotX = Math.round(
        rndmRng(this.x + this.size / modX, this.x - this.size / modX)
      )
      const dotY = Math.round(
        rndmRng(this.y + this.size / modY, this.y - this.size / modY)
      )
      this.graphics.position.set(dotX, dotY)
      console.log(`busrst.x: ${this.graphics.x}   burst.y: 
      ${this.graphics.y}`)
      // this.graphics.lineTo(Math.round(this.width), Math.round(this.height))
      drawDashLine(
        this.graphics,
        Math.round(500 + this.width),
        Math.round(500 + this.height),
        rndmRng(5, 1),
        rndmRng(6, 3)
      )
    }
    this.graphics.cacheAsBitmap = true
    //this.graphics.pivot.x = this.graphics.x + this.graphics.width / 2
    //this.graphics.pivot.y = this.graphics.y + this.graphics.height / 2
    this.graphics.pivot.x = Math.round(this.width / 2)
    this.graphics.pivot.y = Math.round(this.height / 2)

    return this.graphics
  }
}

class Speck {
  x: number
  y: number
  speedX: number
  speedY: number
  width: number
  height: number
  //TESTJPF
  // how to make return of shuffle [number,number] instead of iunknown
  hueSat: [number, number]
  strokeColor: string
  lineWidth: number
  graphics: PIXI.Graphics
  bounds: Bounds

  constructor(bounds: Bounds) {
    this.bounds = bounds
    this.width = rndmRng(5, 1)
    this.height = rndmRng(5, 1)

    this.graphics = new PIXI.Graphics()
    this.graphics.x = Math.round(
      rndmRng(this.bounds.right * 0.75, this.bounds.right * 0.25)
    )
    this.graphics.y = Math.round(
      rndmRng(this.bounds.bottom * 0.75, this.bounds.bottom * 0.25)
    )
    this.x = this.graphics.x
    this.y = this.graphics.y
    /**
     * testjpf
     *
     * get center of bounds
     * speedX = Math.abs(this.x - bounds.right/2)
     */
    this.speedX = Math.round(this.graphics.x - this.bounds.right / 2) / 600
    this.speedY = Math.round(this.graphics.y - this.bounds.bottom / 2) / 600
    this.hueSat = hueSat[Math.round(rndmRng(hueSat.length - 1, 0))]
    this.strokeColor = hslToHex(
      this.hueSat[0],
      this.hueSat[1],
      Math.round(rndmRng(99, 60))
    )
    this.lineWidth = rndmRng(5, 1)
  }

  draw() {
    //  this.graphics.lineStyle(10, 0x990099)
    this.graphics.lineStyle(
      Math.round(rndmRng(5, 1)),
      parseInt(`${this.strokeColor}`),
      rndmRng(1, 0.5)
    )
    this.graphics.scale.set(0.1, 0.1)
    this.graphics.lineTo(Math.round(this.width), Math.round(this.height))

    this.graphics.cacheAsBitmap = true
    //this.graphics.pivot.x = this.graphics.x + this.graphics.width / 2
    //this.graphics.pivot.y = this.graphics.y + this.graphics.height / 2
    this.graphics.pivot.x = Math.round(this.width / 2)
    this.graphics.pivot.y = Math.round(this.height / 2)

    return this.graphics
  }

  update() {
    if (
      this.graphics.x > this.bounds.right ||
      this.graphics.x < this.bounds.left ||
      this.graphics.y < this.bounds.top ||
      this.graphics.y > this.bounds.bottom ||
      this.graphics.scale.x > 4
    ) {
      /**
       * testjpf
       *
       * instead of removing, reset  where it draws again?!
       */

      const speck = new Speck(this.bounds)
      TravelCosmos.specks.splice(TravelCosmos.specks.indexOf(this), 1)
      AnimationStage.stage.removeChild(this.graphics)

      const child = speck.draw()
      TravelCosmos.specks.push(speck)
      AnimationStage.stage.addChild(child)
    }

    this.graphics.position.x += this.speedX
    this.graphics.position.y += this.speedY

    this.graphics.scale.x += 0.002
    this.graphics.scale.y += 0.002
    /** this.graphics.pivot.x = this.graphics.x
    this.graphics.pivot.y = this.graphics.y
     */
  }
}
/**
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
    this.color = TravelCosmos.getFillColors()
    this.light = rndmRng(60, 10)
    this.strokeColor = TravelCosmos.getStrokeColors()
    this.graphics = new PIXI.Graphics()
    this.graphics.blendMode = PIXI.BLEND_MODES.XOR
  }
  update() {
    if (this.radius < this.innerCrcmf && typeof this.radius !== 'undefined') {
      this.radius += Math.round(this.innerCrcmf / this.grooves)
      this.graphics.beginFill(
        parseInt(
          hslToHex(
            Math.round((this.color += 0.3)),
            Math.round(100 - rndmRng(50, 0)),
            Math.round((this.light += 0.1))
          )
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
 */
export default class TravelCosmos {
  static specks: Speck[] = []
  static bursts: Burst[] = []
  timeouts: ReturnType<typeof setTimeout>[]
  static strokeColors = ['506EE5', '68B2F8', '7037CD']
  static fillColors = [209, 291, 263]
  constructor() {
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
    //const burstTotal = Math.round((bounds.right * bounds.bottom) / 90000)
    /** 
    const speckTotal = Math.round((bounds.right * bounds.bottom) / 47000)
    for (let i = speckTotal; i--; ) {
      const speck = new Speck(bounds)
      const child = speck.draw()
      TravelCosmos.specks.push(speck)
      AnimationStage.stage.addChild(child)
    }
    */
    for (let i = 1; i--; ) {
      const burst = new Burst(bounds)
      const child = burst.draw()
      TravelCosmos.bursts.push(burst)
      AnimationStage.stage.addChild(child)
    }
  }

  update() {
    if (TravelCosmos.specks.length > 0) {
      for (let i = TravelCosmos.specks.length; i--; ) {
        TravelCosmos.specks[i].update()
      }
    }
  }

  reset() {
    for (const to in this.timeouts) {
      window.clearTimeout(to)
    }
    AnimationStage.stage.removeChildren()
    TravelCosmos.specks.length = 0
    this.init(AnimationStage.bounds)
  }
}
