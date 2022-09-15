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
}*/

class Debris {
  update() {
    throw new Error('Method not implemented.')
  }
  x: number
  y: number
  graphics: PIXI.Graphics
  bounds: Bounds
  speedX: number
  speedY: number

  constructor(bounds: Bounds) {
    this.bounds = bounds
    this.x = Math.round(
      rndmRng(this.bounds.right * 0.75, this.bounds.right * 0.25)
    )
    this.y = Math.round(
      rndmRng(this.bounds.bottom * 0.75, this.bounds.bottom * 0.25)
    )
    this.graphics = new PIXI.Graphics()
    this.graphics.x = this.x
    this.graphics.y = this.y
  }

  isOutOfBounds() {
    if (
      this.graphics.x - this.graphics.width / 2 > this.bounds.right ||
      this.graphics.x + this.graphics.width / 2 < this.bounds.left ||
      this.graphics.y + this.graphics.height / 2 < this.bounds.top ||
      this.graphics.y - this.graphics.height / 2 > this.bounds.bottom ||
      this.graphics.scale.x > 3
    ) {
      TravelCosmos.debris.splice(TravelCosmos.debris.indexOf(this), 1)
      AnimationStage.stage.removeChild(this.graphics)
      return true
    }
  }
}

class Burst extends Debris {
  huesSats: [number, number][]
  size: number
  hsIndex: number
  distanceToCenter: number

  constructor(bounds: Bounds) {
    super(bounds)
    this.huesSats = shuffle(hueSat)
    this.size = Math.round(
      rndmRng(this.bounds.bottom * 0.4, this.bounds.bottom * 0.2)
    )
    this.hsIndex = 0
    //testjpf speed ight be backwards.  slower the further away not faster
    /**
     slower further away (smaller) faster as gets close (bigger)
     */

    // (this.bounds.right / 2) - ( Math.round(this.graphics.x - this.bounds.right / 2) / 600)
    const center = { x: this.bounds.right / 4, y: this.bounds.bottom / 4 }
    const fromCenterX = this.graphics.x / 2 - center.x
    const fromCenterY = this.graphics.y / 2 - center.y

    console.log(
      `alpha test: ${
        1 -
        (Math.abs(fromCenterX) + Math.abs(fromCenterY)) / (center.x + center.y)
      }`
    )
    this.graphics.alpha =
      1 -
      (Math.abs(fromCenterX) + Math.abs(fromCenterY)) / (center.x + center.y)

    this.speedX = (center.x - Math.abs(fromCenterX)) / 2000
    if (fromCenterX < 0) this.speedX *= -1

    this.speedY = (center.y - Math.abs(fromCenterY)) / 2000
    if (fromCenterY < 0) this.speedY *= -1

    // this.speedX = Math.round(this.graphics.x / 2 - this.bounds.right / 4) / 500
    // this.speedY = Math.round(this.graphics.y / 2 - this.bounds.bottom / 4) / 500
    this.distanceToCenter =
      ((this.bounds.right + this.bounds.bottom) / 4 -
        Math.sqrt(
          Math.pow(this.x - this.bounds.right / 2, 2) +
            Math.pow(this.y - this.bounds.bottom / 2, 2)
        )) *
      0.000002
  }

  draw() {
    // const alpha = 1 - (0.5 - (Math.abs(this.speedX) + Math.abs(this.speedY)))
    console.log(`this.speedX: ${this.speedX} | this.speedY: ${this.speedY}`)
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
      const hue: number = this.huesSats[this.hsIndex][0]
      const sat: number = this.huesSats[this.hsIndex][1]
      const strokeColor = hslToHex(hue, sat, Math.round(rndmRng(99, 60)))

      this.graphics.lineStyle(
        rndmRng(5, 1),
        parseInt(`${strokeColor}`),
        rndmRng(1, 0.5)
      )

      const modX = rndmRng(2.5, 1.5)
      const modY = rndmRng(2.5, 1.5)
      const dotX = Math.round(
        rndmRng(this.size / 2 / modX, this.size / -2 / modX)
      )
      const dotY = Math.round(
        rndmRng(this.size / 2 / modY, this.size / -2 / modY)
      )
      this.graphics.moveTo(dotX, dotY)

      /** testJpf 
       * 
       * you don't need this here but you will need it again for circles and lines (NOT debris)!!!
       
      drawDashLine(
        this.graphics,
        Math.round(500 + this.width),
        Math.round(500 + this.height),
        rndmRng(5, 1),
        rndmRng(6, 3)
      )
**/
      this.graphics.lineTo(
        rndmRng(dotX - 1, dotX - 5),
        rndmRng(dotY - 1, dotY - 5)
      )
    }
    this.graphics.cacheAsBitmap = true
    // this.graphics.alpha = 3
    this.graphics.scale.set(0.05, 0.05)
    this.graphics.pivot.x = Math.round(this.graphics.width / 2)
    this.graphics.pivot.y = Math.round(this.graphics.height / 2)

    return this.graphics
  }

  update() {
    if (Debris.prototype.isOutOfBounds.call(this)) {
      const burst = new Burst(this.bounds)
      const child = burst.draw()
      TravelCosmos.debris.push(burst)
      AnimationStage.stage.addChild(child)
    }
    //testjpf distance to center logic will work
    //if you teake into account ?left sie is negative,
    //////right positive and ultiply by different deciaml at end
    /**
     * testjpf
     *
     * add speed plus a modifuer that is
     * faster when bigger, slower when smaller
     */
    this.graphics.position.x += this.speedX
    this.graphics.position.y += this.speedY
    //testjpf multply by speeds?
    this.graphics.scale.x += this.distanceToCenter
    this.graphics.scale.y += this.distanceToCenter
    if (this.graphics.scale.x > 2)
      this.graphics.alpha = 3 - this.graphics.scale.x
  }
}

class Speck extends Debris {
  width: number
  height: number
  hueSat: [number, number]
  strokeColor: string
  lineWidth: number

  constructor(bounds: Bounds) {
    super(bounds)
    this.bounds = bounds
    this.width = rndmRng(5, 1)
    this.height = rndmRng(5, 1)
    this.graphics.x = this.x
    this.graphics.y = this.y
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
    this.graphics.lineStyle(
      Math.round(rndmRng(5, 1)),
      parseInt(`${this.strokeColor}`),
      rndmRng(1, 0.5)
    )
    this.graphics.scale.set(0.1, 0.1)
    this.graphics.lineTo(Math.round(this.width), Math.round(this.height))
    this.graphics.cacheAsBitmap = true
    this.graphics.pivot.x = Math.round(this.width / 2)
    this.graphics.pivot.y = Math.round(this.height / 2)

    return this.graphics
  }

  update() {
    if (Debris.prototype.isOutOfBounds.call(this)) {
      const speck = new Speck(this.bounds)
      const child = speck.draw()
      TravelCosmos.debris.push(speck)
      AnimationStage.stage.addChild(child)
    }

    this.graphics.position.x += this.speedX
    this.graphics.position.y += this.speedY
    //testjpf scale should grow faster the closer to center
    this.graphics.scale.x += 0.001
    this.graphics.scale.y += 0.001
    if (this.graphics.scale.x > 2)
      this.graphics.alpha = 3 - this.graphics.scale.x
  }
}

export default class TravelCosmos {
  static debris: Debris[] = []
  //static debris: Burst[] = []
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
    const burstTotal = Math.round((bounds.right * bounds.bottom) / 180000)

    const speckTotal = Math.round((bounds.right * bounds.bottom) / 47000)
    for (let i = speckTotal; i--; ) {
      const speck = new Speck(bounds)
      const child = speck.draw()
      TravelCosmos.debris.push(speck)
      AnimationStage.stage.addChild(child)
    }

    for (let i = burstTotal; i--; ) {
      const burst = new Burst(bounds)
      const child = burst.draw()
      TravelCosmos.debris.push(burst)
      AnimationStage.stage.addChild(child)
    }
  }

  update() {
    if (TravelCosmos.debris.length > 0) {
      for (let i = TravelCosmos.debris.length; i--; ) {
        TravelCosmos.debris[i].update()
      }
    }
  }

  reset() {
    for (const to in this.timeouts) {
      window.clearTimeout(to)
    }
    AnimationStage.stage.removeChildren()
    TravelCosmos.debris.length = 0
    this.init(AnimationStage.bounds)
  }
}
