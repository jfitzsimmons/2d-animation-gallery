import { AnimationStage, app } from '..'
import { Bounds, BoundsOptions, GradientOptions } from '../types'
import {
  hslToHex,
  rndmRng,
  shuffle,
  distanceFrom,
  lerp,
  createRadialTexture,
  getSize,
  splatterPoints,
  createArc,
  circleShading,
  drawDashLine,
} from '../utils'
import * as PIXI from 'pixi.js'

class Debris {
  //positioning
  bounds: Bounds
  x: number
  y: number
  endPoint: { x: number; y: number }
  //tweening
  timeSlice = 1
  duration: number
  alphaStart: number
  //scaling
  scaleModRatio = 0.000001
  scaleModIncrease = 0.0001
  scaleLimit = 2
  //return
  sprite: PIXI.Sprite

  constructor(bounds: Bounds) {
    this.bounds = bounds
    this.x = Math.round(
      rndmRng(this.bounds.right * 0.75, this.bounds.right * 0.25)
    )
    this.y = Math.round(
      rndmRng(this.bounds.bottom * 0.75, this.bounds.bottom * 0.25)
    )

    const center = { x: this.bounds.right / 2, y: this.bounds.bottom / 2 }
    const slope = (this.y - center.y) / (this.x - center.x)
    const angle = Math.atan(slope)
    const maxDistance =
      this.bounds.right > this.bounds.bottom ? center.x : center.y
    const distanceX = this.x < center.x ? maxDistance * -1 : maxDistance
    const distanceY = this.y < center.y ? maxDistance * -1 : maxDistance
    const flip =
      (distanceY < 0 && distanceX > 0) || (distanceY > 0 && distanceX < 0)
        ? -1
        : 1

    this.endPoint = {
      x: this.x + distanceX * Math.cos(angle),
      y: this.y + distanceY * Math.sin(angle) * flip,
    }
    this.duration = this.getDuration(2.5)

    const fromCenterX = this.x - center.x
    const fromCenterY = this.y - center.y

    this.alphaStart =
      1 -
      (Math.abs(fromCenterX) + Math.abs(fromCenterY)) / (center.x + center.y)
  }

  getDuration(mod: number) {
    const center = { x: this.bounds.right / 2, y: this.bounds.bottom / 2 }
    const maxDistance =
      this.bounds.right > this.bounds.bottom ? center.x : center.y
    const fromCenter: number = distanceFrom(this.x, this.y, center.x, center.y)

    return (
      100 +
      Math.pow(
        (1 - fromCenter / maxDistance) * 900,
        1.1 + (1 - fromCenter / maxDistance) / mod
      )
    )
  }

  getStrokeColor(arr: [number, number][]) {
    const hueSat = arr[Math.round(rndmRng(arr.length - 1, 0))]
    return hslToHex(hueSat[0], hueSat[1], Math.round(rndmRng(99, 60)))
  }

  update() {
    if (
      this.sprite.position.x - this.sprite.width / 2 > this.bounds.right ||
      this.sprite.position.x + this.sprite.width / 2 < this.bounds.left ||
      this.sprite.position.y + this.sprite.height / 2 < this.bounds.top ||
      this.sprite.position.y - this.sprite.height / 2 > this.bounds.bottom ||
      this.sprite.scale.x > this.scaleLimit + 1 ||
      this.sprite.scale.y > this.scaleLimit + 1
    ) {
      TravelCosmos.debris.splice(TravelCosmos.debris.indexOf(this), 1)
      AnimationStage.stage.removeChild(this.sprite)
      const debris = this.newInstance()
      const child = debris.draw()
      TravelCosmos.debris.push(debris)
      if (child instanceof PIXI.Graphics || child instanceof PIXI.Sprite)
        AnimationStage.stage.addChild(child)
    }

    this.timeSlice += 1
    this.sprite.scale.set(
      (this.sprite.scale.x *= 1.001 + this.duration * 0.3 * this.scaleModRatio),
      (this.sprite.scale.y *= 1.001 + this.duration * 0.3 * this.scaleModRatio)
    )
    this.sprite.position.set(
      lerp(this.x, this.endPoint.x, this.timeSlice / this.duration),
      lerp(this.y, this.endPoint.y, this.timeSlice / this.duration)
    )
    if (this.sprite.scale.x > this.scaleLimit) {
      this.sprite.alpha =
        this.scaleLimit + this.alphaStart - this.sprite.scale.x
    }
    this.duration *= 0.999
  }

  draw() {
    return {}
  }

  newInstance() {
    return new Debris(this.bounds)
  }

  isOutOfBounds(opts: BoundsOptions) {
    if (
      opts.position.x - opts.w / 2 > this.bounds.right ||
      opts.position.x + opts.w / 2 < this.bounds.left ||
      opts.position.y + opts.h / 2 < this.bounds.top ||
      opts.position.y - opts.h / 2 > this.bounds.bottom ||
      opts.scale.x > opts.scaleLimit + 1 ||
      opts.scale.y > opts.scaleLimit + 1
    )
      return true
  }
}

class Points extends Debris {
  constructor(bounds: Bounds) {
    super(bounds)

    this.scaleLimit = 0.3
    this.scaleModRatio = 0.0000007
  }

  newInstance() {
    return new Points(this.bounds)
  }

  draw() {
    const graphics = new PIXI.Graphics()
    const sizeOptions = {
      bounds: this.bounds,
      maxMultiplier: 0.17,
      minMultiplier: 0.05,
      maxLimit: 470,
      minLimit: 150,
    }
    let size = getSize(sizeOptions)
    const rings = Math.round(rndmRng(3, 1))
    const lines = Math.round(rndmRng(21, 8))
    const edge =
      this.bounds.right > this.bounds.bottom
        ? this.bounds.right
        : this.bounds.bottom
    for (let i = 0; i < lines; i++) {
      const strokeColor = this.getStrokeColor(TravelCosmos.hueSat)
      graphics.lineStyle(Math.round(rndmRng(14, 6)), strokeColor, rndmRng(1, 1))

      //testjpf left off here!!!!
      const x1 = Math.round(this.x + size * Math.cos((2 * Math.PI * i) / lines))
      const y1 = Math.round(this.y + size * Math.sin((2 * Math.PI * i) / lines))
      const x2 = Math.round(this.x + edge * Math.cos((2 * Math.PI * i) / lines))
      const y2 = Math.round(this.y + edge * Math.sin((2 * Math.PI * i) / lines))

      const dash = rndmRng(16, 8)
      const gap = rndmRng(16, 8)

      drawDashLine(
        graphics,
        x1,
        y1,
        x2,
        y2,
        (2 * Math.PI * i) / lines,
        dash,
        gap
      )
    }

    for (let c = 1; c <= rings; c++) {
      size = Math.round(size * rndmRng(2.2, 1.8))
      const strokeColor = this.getStrokeColor(TravelCosmos.hueSat)

      graphics.lineStyle(
        Math.round(rndmRng(7, 3)),
        strokeColor,
        rndmRng(1, 0.5)
      )
      createArc(graphics, this.x, this.y, size)
      if (Math.random() > 0.5)
        circleShading(graphics, this.x, this.y, size, strokeColor)
    }

    graphics.cacheAsBitmap = true

    const texture = app.renderer.generateTexture(graphics)

    this.sprite = new PIXI.Sprite(texture)
    this.sprite.alpha = this.alphaStart
    this.sprite.anchor.set(0.5, 0.5)
    this.sprite.position.set(this.x, this.y)
    this.sprite.scale.set(0.02, 0.02)

    return this.sprite
  }
}

class Circle extends Debris {
  constructor(bounds: Bounds) {
    super(bounds)
    this.duration = this.getDuration(3.2)
    this.scaleLimit = 1
    this.scaleModRatio = 0.0000014
  }

  newInstance() {
    return new Circle(this.bounds)
  }

  draw() {
    const graphics = new PIXI.Graphics()
    const sizeOptions = {
      bounds: this.bounds,
      maxMultiplier: 0.17,
      minMultiplier: 0.05,
      maxLimit: 370,
      minLimit: 100,
    }
    let size = getSize(sizeOptions)
    const rings = Math.round(rndmRng(5, 2))

    for (let c = 1; c <= rings; c++) {
      const strokeColor = this.getStrokeColor(TravelCosmos.hueSat)

      graphics.lineStyle(
        Math.round(rndmRng(7, 3)),
        strokeColor,
        rndmRng(1, 0.5)
      )
      createArc(graphics, this.x, this.y, size)
      if (Math.random() > 0.5)
        circleShading(graphics, this.x, this.y, size, strokeColor)
      size = size * rndmRng(1.6, 1.2)
    }

    graphics.cacheAsBitmap = true

    const texture = app.renderer.generateTexture(graphics)

    this.sprite = new PIXI.Sprite(texture)
    this.sprite.alpha = this.alphaStart
    this.sprite.anchor.set(0.5, 0.5)
    this.sprite.position.set(this.x, this.y)
    this.sprite.scale.set(0.02, 0.02)

    return this.sprite
  }
}
class CurvedLine extends Debris {
  constructor(bounds: Bounds) {
    super(bounds)
    this.duration = this.getDuration(3.5)
    this.scaleLimit = 1.1
    this.scaleModRatio = 0.0000033
  }

  newInstance() {
    return new CurvedLine(this.bounds)
  }

  draw() {
    let counter = 0
    const startX = rndmRng(-250, 0)
    const height = rndmRng(350, 40)
    const startY = rndmRng(300, -100)
    const graphics = new PIXI.Graphics()
    const flip = Math.random() < 0.5 ? 1 : -1

    for (let i = startX; i <= this.bounds.right + 10; i += rndmRng(14, 6)) {
      graphics.lineStyle(Math.round(rndmRng(5, 1)), 0xfefefe, rndmRng(0.6, 0.1))

      const increase = ((90 / 180) * Math.PI) / rndmRng(30, 15)
      const splatterCenter = {
        x: i + rndmRng(14, 6),
        y: Math.round(startY + (i / 2 - Math.sin(counter) * height) * flip),
      }
      counter += increase

      graphics.moveTo(splatterCenter.x, splatterCenter.y)
      graphics.lineTo(
        splatterCenter.x + Math.round(rndmRng(9, 5)),
        splatterCenter.y + Math.round(rndmRng(9, 5))
      )

      const splatter = Math.round(rndmRng(10, 1))
      splatterPoints(splatterCenter.x, splatterCenter.y, splatter, graphics)
    }

    const texture = app.renderer.generateTexture(graphics)
    this.sprite = new PIXI.Sprite(texture)
    this.sprite.alpha = this.alphaStart
    this.sprite.anchor.set(0.5, 0.5)
    this.sprite.scale.set(0.01, 0.01)

    return this.sprite
  }
}
class Burst extends Debris {
  constructor(bounds: Bounds) {
    super(bounds)

    this.scaleLimit = 1.5
    this.scaleModRatio = 0.000001
    this.duration = this.getDuration(2.8)
  }

  draw() {
    let hsIndex = 0
    const graphics = new PIXI.Graphics()
    const sizeOptions = {
      bounds: this.bounds,
      maxMultiplier: 0.3,
      minMultiplier: 0.15,
      maxLimit: 400,
      minLimit: 200,
    }
    const size = getSize(sizeOptions)
    const huesSats = shuffle(TravelCosmos.hueSat)

    for (let i = 0; i < size; i++) {
      if (i < size / 40) {
        hsIndex = 0
      } else if (i < size / 13) {
        hsIndex = 1
      } else if (i < size / 6) {
        hsIndex = 2
      } else {
        hsIndex = 3
      }

      const hue: number = huesSats[hsIndex][0]
      const sat: number = huesSats[hsIndex][1]
      const strokeColor = hslToHex(hue, sat, Math.round(rndmRng(99, 60)))
      graphics.lineStyle(rndmRng(5, 1), strokeColor, rndmRng(1, 0.5))

      const modX = rndmRng(2.5, 1.5)
      const modY = rndmRng(2.5, 1.5)
      const dotX = Math.round(rndmRng(size / 2 / modX, size / -2 / modX))
      const dotY = Math.round(rndmRng(size / 2 / modY, size / -2 / modY))
      graphics.moveTo(dotX, dotY)
      graphics.lineTo(rndmRng(dotX - 1, dotX - 5), rndmRng(dotY - 1, dotY - 5))
    }

    graphics.cacheAsBitmap = true

    const texture = app.renderer.generateTexture(graphics)

    this.sprite = new PIXI.Sprite(texture)
    this.sprite.alpha = this.alphaStart
    this.sprite.anchor.set(0.5, 0.5)
    this.sprite.position.set(this.x, this.y)
    this.sprite.scale.set(0.1, 0.1)

    return this.sprite
  }

  newInstance() {
    return new Burst(this.bounds)
  }
}

class Speck extends Debris {
  constructor(bounds: Bounds) {
    super(bounds)

    this.scaleLimit = 2
    this.alphaStart = 1
  }

  newInstance() {
    return new Speck(this.bounds)
  }

  draw() {
    const strokeColor = this.getStrokeColor(TravelCosmos.hueSat)
    const graphics = new PIXI.Graphics()

    graphics.lineStyle(Math.round(rndmRng(5, 1)), strokeColor, rndmRng(1, 0.5))
    graphics.lineTo(Math.round(rndmRng(5, 1)), Math.round(rndmRng(5, 1)))

    const texture = app.renderer.generateTexture(graphics)

    this.sprite = new PIXI.Sprite(texture)
    this.sprite.alpha = this.alphaStart
    this.sprite.position.set(this.x, this.y)
    this.sprite.anchor.set(0.5, 0.5)
    this.sprite.scale.set(0.3, 0.3)

    return this.sprite
  }
}

class Radial extends Debris {
  constructor(bounds: Bounds) {
    super(bounds)

    this.scaleLimit = 5

    this.alphaStart = 1
  }

  newInstance() {
    return new Radial(this.bounds)
  }

  draw() {
    const outR = rndmRng(this.bounds.bottom * 0.15, this.bounds.bottom * 0.05)
    const inR = rndmRng(outR * 0.2, outR * 0.01)
    const gradientOptions: GradientOptions = {
      outR,
      inR,
      from: `rgba(${rndmRng(80, 54)}, ${rndmRng(40, 10)}, ${rndmRng(
        43,
        17
      )}, ${rndmRng(0.5, 0.2)})`,
      to: `rgba(${rndmRng(80, 54)}, ${rndmRng(40, 10)}, ${rndmRng(43, 17)}, 0)`,
    }
    const texture = createRadialTexture(gradientOptions)

    this.sprite = new PIXI.Sprite(texture)
    this.sprite.alpha = this.alphaStart
    this.sprite.position.set(this.x, this.y)
    this.sprite.anchor.set(0.5, 0.5)
    this.sprite.scale.set(0.06, 0.06)

    return this.sprite
  }
}

export default class TravelCosmos {
  static debris: Debris[] = []
  static strokeColors = ['506EE5', '68B2F8', '7037CD']
  static fillColors = [209, 291, 263]
  static hueSat: [number, number][] = [
    [360, 0],
    [204, 100],
    [260, 31],
    [340, 89],
    [179, 79],
  ]

  init(bounds: Bounds) {
    const burstTotal = Math.round((bounds.right * bounds.bottom) / 170000)
    const speckTotal = Math.round((bounds.right * bounds.bottom) / 37000)
    const radialTotal = Math.round(rndmRng(8, 5))
    const circleTotal = burstTotal <= 1 ? 2 : Math.round(rndmRng(burstTotal, 2))

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

    for (let i = radialTotal; i--; ) {
      const radial = new Radial(bounds)
      const child: PIXI.Sprite = radial.draw()
      TravelCosmos.debris.push(radial)
      AnimationStage.stage.addChild(child)
    }

    for (let i = 2; i--; ) {
      const curvedLine = new CurvedLine(bounds)
      const child: PIXI.Sprite = curvedLine.draw()
      TravelCosmos.debris.push(curvedLine)
      AnimationStage.stage.addChild(child)
    }

    for (let i = circleTotal; i--; ) {
      const circle = new Circle(bounds)
      const child: PIXI.Sprite = circle.draw()
      TravelCosmos.debris.push(circle)
      AnimationStage.stage.addChild(child)
    }

    for (let i = 3; i--; ) {
      const points = new Points(bounds)
      const child: PIXI.Sprite = points.draw()
      TravelCosmos.debris.push(points)
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
    AnimationStage.stage.removeChildren()
    TravelCosmos.debris.length = 0
    this.init(AnimationStage.bounds)
  }
}
