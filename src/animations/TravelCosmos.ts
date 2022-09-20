import { AnimationStage, app } from '..'
import { Bounds, GradientOptions } from '../types'
import { hslToHex, rndmRng, shuffle, distanceFromCenter, lerp } from '../utils'
import * as PIXI from 'pixi.js'

function gradient(opts: GradientOptions) {
  const _opts = opts
  const c = document.createElement('canvas') as HTMLCanvasElement
  c.width = _opts.outR * 2
  c.height = _opts.outR * 2
  const ctx = c.getContext('2d')
  const grd = ctx.createRadialGradient(
    _opts.outR,
    _opts.outR,
    _opts.inR,
    _opts.outR,
    _opts.outR,
    _opts.outR
  )
  grd.addColorStop(0, _opts.from)
  grd.addColorStop(1, _opts.to)
  ctx.fillStyle = grd
  ctx.fillRect(0, 0, _opts.outR * 2, _opts.outR * 2)

  return PIXI.Texture.from(c, {
    width: _opts.outR * 2,
    height: _opts.outR * 2,
  })
}

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
  x: number
  y: number
  graphics: PIXI.Graphics
  bounds: Bounds
  speedMod: number
  scaleMod: number
  scaleModRatio: number
  scaleModIncrease: number
  scaleLimit: number
  alphaStart: number
  endPoint: { x: number; y: number }
  time: number
  duration: number
  sprite: PIXI.Sprite
  center: { x: number; y: number }

  constructor(bounds: Bounds) {
    this.bounds = bounds
    this.x = Math.round(
      rndmRng(this.bounds.right * 0.75, this.bounds.right * 0.25)
    )
    this.y = Math.round(
      rndmRng(this.bounds.bottom * 0.75, this.bounds.bottom * 0.25)
    )
    this.graphics = new PIXI.Graphics()
    this.center = { x: this.bounds.right / 2, y: this.bounds.bottom / 2 }

    const slope = (this.y - this.center.y) / (this.x - this.center.x)
    const angle = Math.atan(slope)
    const fromCenterX = this.x - this.center.x
    const fromCenterY = this.y - this.center.y
    const maxDistance =
      this.bounds.right > this.bounds.bottom ? this.center.x : this.center.y
    const distanceX = this.x < this.center.x ? maxDistance * -1 : maxDistance
    const distanceY = this.y < this.center.y ? maxDistance * -1 : maxDistance
    const flip =
      (distanceY < 0 && distanceX > 0) || (distanceY > 0 && distanceX < 0)
        ? -1
        : 1

    this.endPoint = {
      x: this.x + distanceX * Math.cos(angle),
      y: this.y + distanceY * Math.sin(angle) * flip,
    }
    this.graphics.alpha =
      1 -
      (Math.abs(fromCenterX) + Math.abs(fromCenterY)) /
        (this.center.x + this.center.y)
    this.alphaStart = this.graphics.alpha
    this.time = 1
    this.duration =
      100 +
      Math.pow(
        maxDistance -
          distanceFromCenter(this.x, this.y, this.center.x, this.center.y),
        1.5
      )
  }

  update(opts: Debris) {
    const _opts = opts
    if (this.isOutOfBounds(_opts)) {
      const debris = _opts.newInstance()
      const child = debris.draw()
      TravelCosmos.debris.push(debris)
      if (child instanceof PIXI.Graphics || child instanceof PIXI.Sprite)
        AnimationStage.stage.addChild(child)
    }

    this.time += 1
    this.sprite.scale.set(
      _opts.sprite.scale.x +
        _opts.getScaleModifier(
          _opts.sprite.x,
          _opts.sprite.y,
          _opts.sprite.width,
          _opts.sprite.height,
          _opts.scaleModRatio,
          _opts.scaleModIncrease
        ),
      _opts.sprite.scale.y +
        _opts.getScaleModifier(
          _opts.sprite.x,
          _opts.sprite.y,
          _opts.sprite.width,
          _opts.sprite.height,
          _opts.scaleModRatio,
          _opts.scaleModIncrease
        )
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

  isOutOfBounds(_opts: Debris) {
    if (
      _opts.sprite.x - _opts.sprite.width / 2 > _opts.bounds.right ||
      _opts.sprite.x + _opts.sprite.width / 2 < _opts.bounds.left ||
      _opts.sprite.y + _opts.sprite.width / 2 < _opts.bounds.top ||
      _opts.sprite.y - _opts.sprite.width / 2 > _opts.bounds.bottom ||
      _opts.sprite.scale.x > _opts.scaleLimit + 1
    ) {
      TravelCosmos.debris.splice(TravelCosmos.debris.indexOf(_opts), 1)
      AnimationStage.stage.removeChild(_opts.sprite)
      return true
    }
  }

  getScaleModifier(
    x: number,
    y: number,
    w: number,
    h: number,
    mod: number,
    increase: number
  ) {
    const scaleModifier =
      ((this.bounds.right + this.bounds.bottom) * mod -
        Math.sqrt(
          Math.pow((x + w / 2 - this.center.x) * (mod * 2), 2) +
            Math.pow((y + h / 2 - this.center.y) * (mod * 2), 2)
        )) *
      increase
    return scaleModifier
  }
}

class Burst extends Debris {
  constructor(bounds: Bounds) {
    super(bounds)

    this.scaleLimit = 2
    this.scaleModRatio = 0.00001 + this.duration * 0.000001
    this.scaleModIncrease = 0.0001
    this.alphaStart = 1
  }

  draw() {
    let hsIndex = 0
    //TESTJPF have a max size!!!!
    //TESTJPF Maybe better to hardcode min and max!!!
    const size = Math.round(
      rndmRng(this.bounds.right * 0.3, this.bounds.right * 0.15)
    )
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

      this.graphics.lineStyle(rndmRng(5, 1), strokeColor, rndmRng(1, 0.5))

      const modX = rndmRng(2.5, 1.5)
      const modY = rndmRng(2.5, 1.5)
      const dotX = Math.round(rndmRng(size / 2 / modX, size / -2 / modX))
      const dotY = Math.round(rndmRng(size / 2 / modY, size / -2 / modY))

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

    const texture = app.renderer.generateTexture(this.graphics)

    this.sprite = new PIXI.Sprite(texture)
    this.sprite.position.set(this.x, this.y)
    this.sprite.anchor.set(0.5, 0.5)
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
    this.graphics.lineStyle(
      Math.round(rndmRng(5, 1)),
      strokeColor,
      rndmRng(1, 0.5)
    )
    this.graphics.lineTo(Math.round(rndmRng(5, 1)), Math.round(rndmRng(5, 1)))

    const texture = app.renderer.generateTexture(this.graphics)

    this.sprite = new PIXI.Sprite(texture)
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
    const texture = gradient(gradientOptions)

    this.sprite = new PIXI.Sprite(texture)
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
