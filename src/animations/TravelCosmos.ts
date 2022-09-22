import { AnimationStage, app } from '..'
import { Bounds, BoundsOptions, GradientOptions, ScaleOptions } from '../types'
import {
  hslToHex,
  rndmRng,
  shuffle,
  distanceFromCenter,
  lerp,
  createRadialTexture,
  getSize,
  splatterPoints,
} from '../utils'
import * as PIXI from 'pixi.js'

class Debris {
  //positioning
  x: number
  y: number
  bounds: Bounds
  endPoint: { x: number; y: number }
  time = 1
  duration: number
  //scaling
  scaleModRatio: number
  scaleModIncrease = 0.0001
  scaleLimit = 2
  alphaStart: number
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
    const fromCenterX = this.x - center.x
    const fromCenterY = this.y - center.y
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
    this.alphaStart =
      1 -
      (Math.abs(fromCenterX) + Math.abs(fromCenterY)) / (center.x + center.y)
    this.scaleModRatio = 0.00003 + this.duration * 0.0000008
    this.duration = this.getDuration(2.5)
  }

  getDuration(mod: number) {
    const center = { x: this.bounds.right / 2, y: this.bounds.bottom / 2 }
    const maxDistance =
      this.bounds.right > this.bounds.bottom ? center.x : center.y
    const fromCenter: number = distanceFromCenter(
      this.x,
      this.y,
      center.x,
      center.y
    )
    return (
      100 +
      Math.pow(
        maxDistance - fromCenter,
        1.1 + (1 - fromCenter / maxDistance) / mod
      )
    )
  }

  update(opts: Debris) {
    const _opts = opts
    const boundsOptions: BoundsOptions = {
      w: _opts.sprite.width,
      h: _opts.sprite.height,
      position: _opts.sprite.position,
      scale: _opts.sprite.scale,
      scaleLimit: _opts.scaleLimit,
    }
    if (this.isOutOfBounds(boundsOptions)) {
      TravelCosmos.debris.splice(TravelCosmos.debris.indexOf(_opts), 1)
      AnimationStage.stage.removeChild(_opts.sprite)
      const debris = _opts.newInstance()
      const child = debris.draw()
      TravelCosmos.debris.push(debris)
      if (child instanceof PIXI.Graphics || child instanceof PIXI.Sprite)
        AnimationStage.stage.addChild(child)
    }

    const scaleOptions = {
      w: _opts.sprite.width,
      h: _opts.sprite.height,
      position: { x: _opts.sprite.x, y: _opts.sprite.y },
      scaleModRatio: _opts.scaleModRatio,
      scaleModIncrease: _opts.scaleModIncrease,
    }

    this.time += 1
    this.sprite.scale.set(
      _opts.sprite.scale.x + _opts.getScaleModifier(scaleOptions),
      _opts.sprite.scale.y + _opts.getScaleModifier(scaleOptions)
    )
    this.sprite.position.set(
      lerp(_opts.x, _opts.endPoint.x, _opts.time / _opts.duration),
      lerp(_opts.y, _opts.endPoint.y, _opts.time / _opts.duration)
    )
    if (_opts.sprite.scale.x > _opts.scaleLimit) {
      this.sprite.alpha =
        _opts.scaleLimit + _opts.alphaStart - _opts.sprite.scale.x
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

  getScaleModifier(opts: ScaleOptions) {
    const scaleModifier =
      ((this.bounds.right + this.bounds.bottom) * opts.scaleModRatio -
        Math.sqrt(
          Math.pow(
            (opts.position.x + opts.w / 2 - this.bounds.right / 2) *
              (opts.scaleModRatio * 2),
            2
          ) +
            Math.pow(
              (opts.position.y + opts.h / 2 - this.bounds.bottom / 2) *
                (opts.scaleModRatio * 2),
              2
            )
        )) *
      opts.scaleModIncrease
    return scaleModifier
  }
}
class CurvedLine extends Debris {
  constructor(bounds: Bounds) {
    super(bounds)
    this.duration = this.getDuration(3.5)
    this.scaleLimit = 0.6
    this.scaleModRatio = 0.05 + this.duration * 0.0004
    this.scaleModIncrease = 0.0000002
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

    for (let i = startX; i <= this.bounds.right + 10; i += rndmRng(9, 3)) {
      graphics.lineStyle(Math.round(rndmRng(5, 1)), 0xfefefe, rndmRng(1, 0.1))

      const increase = ((90 / 180) * Math.PI) / rndmRng(30, 15)
      const splatterCenter = {
        x: i + rndmRng(9, 3),
        y: Math.round(startY + i / 2 - Math.sin(counter) * height),
      }
      counter += increase

      graphics.moveTo(splatterCenter.x, splatterCenter.y)
      graphics.lineTo(
        splatterCenter.x + Math.round(rndmRng(5, 1)),
        splatterCenter.y + Math.round(rndmRng(5, 1))
      )

      const splatter = Math.round(rndmRng(10, 1))
      splatterPoints(splatterCenter.x, splatterCenter.y, splatter, graphics)
    }

    const texture = app.renderer.generateTexture(graphics)
    this.sprite = new PIXI.Sprite(texture)
    this.sprite.alpha = this.alphaStart
    this.sprite.anchor.set(0.5, 0.5)
    this.sprite.scale.set(0.05, 0.05)

    return this.sprite
  }
}
class Burst extends Debris {
  constructor(bounds: Bounds) {
    super(bounds)

    this.scaleLimit = 1.5
    this.scaleModRatio = 0.00001 + this.duration * 0.000001
    this.scaleModIncrease = 0.0001
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
    this.scaleModRatio = this.duration * 0.0000008
    this.scaleModIncrease = 0.0002
    this.alphaStart = 1
  }

  newInstance() {
    return new Speck(this.bounds)
  }

  draw() {
    const _hueSat =
      TravelCosmos.hueSat[
        Math.round(rndmRng(TravelCosmos.hueSat.length - 1, 0))
      ]
    const strokeColor = hslToHex(
      _hueSat[0],
      _hueSat[1],
      Math.round(rndmRng(99, 60))
    )
    const graphics = new PIXI.Graphics()

    graphics.lineStyle(Math.round(rndmRng(5, 1)), strokeColor, rndmRng(1, 0.5))
    graphics.lineTo(Math.round(rndmRng(5, 1)), Math.round(rndmRng(5, 1)))

    const texture = app.renderer.generateTexture(graphics)

    this.sprite = new PIXI.Sprite(texture)
    this.sprite.alpha = this.alphaStart
    this.sprite.position.set(this.x, this.y)
    this.sprite.anchor.set(0.5, 0.5)
    this.sprite.scale.set(0.1, 0.1)

    return this.sprite
  }
}

class Radial extends Debris {
  constructor(bounds: Bounds) {
    super(bounds)

    this.scaleLimit = 3
    this.scaleModRatio = 0.00003 + this.duration * 0.0000008
    this.scaleModIncrease = 0.0001
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

    const radialTotal = Math.round(rndmRng(7, 3))

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

    const curvedLine = new CurvedLine(bounds)
    const child: PIXI.Sprite = curvedLine.draw()
    TravelCosmos.debris.push(curvedLine)
    AnimationStage.stage.addChild(child)
  }

  update() {
    if (TravelCosmos.debris.length > 0) {
      for (let i = TravelCosmos.debris.length; i--; ) {
        TravelCosmos.debris[i].update(TravelCosmos.debris[i])
      }
    }
  }

  reset() {
    AnimationStage.stage.removeChildren()
    TravelCosmos.debris.length = 0
    this.init(AnimationStage.bounds)
  }
}
