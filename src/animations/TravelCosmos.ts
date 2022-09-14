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

class Burst {
  huesSats: [number, number][]
  x: number
  y: number
  size: number
  hsIndex: number
  graphics: PIXI.Graphics
  bounds: Bounds
  speedX: number
  speedY: number

  constructor(bounds: Bounds) {
    this.bounds = bounds
    this.huesSats = shuffle(hueSat)
    this.size = Math.round(rndmRng(bounds.bottom * 0.4, bounds.bottom * 0.2))
    this.x = Math.round(rndmRng(bounds.right * 0.75, bounds.right * 0.25))
    this.y = Math.round(rndmRng(bounds.bottom * 0.75, bounds.bottom * 0.25))
    this.hsIndex = 0
    this.graphics = new PIXI.Graphics()
    this.graphics.x = this.x
    this.graphics.y = this.y
    this.speedX = Math.round(this.graphics.x - this.bounds.right / 2) / 600
    this.speedY = Math.round(this.graphics.y - this.bounds.bottom / 2) / 600
  }

  draw() {
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
       * you don't need this here but you will need it again for circles and lines (NOT SPECKS)!!!
       
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
    this.graphics.scale.set(0.05, 0.05)
    this.graphics.pivot.x = Math.round(this.graphics.width / 2)
    this.graphics.pivot.y = Math.round(this.graphics.height / 2)

    return this.graphics
  }

  update() {
    if (
      this.graphics.x - this.graphics.width / 2 > this.bounds.right ||
      this.graphics.x + this.graphics.width / 2 < this.bounds.left ||
      this.graphics.y + this.graphics.height / 2 < this.bounds.top ||
      this.graphics.y - this.graphics.height / 2 > this.bounds.bottom ||
      this.graphics.scale.x > 3
    ) {
      const burst = new Burst(this.bounds)
      TravelCosmos.bursts.splice(TravelCosmos.bursts.indexOf(this), 1)
      AnimationStage.stage.removeChild(this.graphics)
      const child = burst.draw()
      TravelCosmos.bursts.push(burst)
      AnimationStage.stage.addChild(child)
    }

    this.graphics.position.x += this.speedX
    this.graphics.position.y += this.speedY
    this.graphics.scale.x += 0.001
    this.graphics.scale.y += 0.001
    if (this.graphics.scale.x > 2)
      this.graphics.alpha = 3 - this.graphics.scale.x
  }
}

class Speck {
  x: number
  y: number
  speedX: number
  speedY: number
  width: number
  height: number
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
    if (
      this.graphics.x - this.graphics.width / 2 > this.bounds.right ||
      this.graphics.x + this.graphics.width / 2 < this.bounds.left ||
      this.graphics.y + this.graphics.height / 2 < this.bounds.top ||
      this.graphics.y - this.graphics.height / 2 > this.bounds.bottom ||
      this.graphics.scale.x > 3
    ) {
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

    if (this.graphics.scale.x > 2)
      this.graphics.alpha = 3 - this.graphics.scale.x
  }
}

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
    const burstTotal = Math.round((bounds.right * bounds.bottom) / 180000)

    const speckTotal = Math.round((bounds.right * bounds.bottom) / 47000)
    for (let i = speckTotal; i--; ) {
      const speck = new Speck(bounds)
      const child = speck.draw()
      TravelCosmos.specks.push(speck)
      AnimationStage.stage.addChild(child)
    }

    for (let i = burstTotal; i--; ) {
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
    if (TravelCosmos.bursts.length > 0) {
      for (let i = TravelCosmos.bursts.length; i--; ) {
        TravelCosmos.bursts[i].update()
      }
    }
  }

  reset() {
    for (const to in this.timeouts) {
      window.clearTimeout(to)
    }
    AnimationStage.stage.removeChildren()
    TravelCosmos.specks.length = 0
    TravelCosmos.bursts.length = 0
    this.init(AnimationStage.bounds)
  }
}
