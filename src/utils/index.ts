import * as PIXI from 'pixi.js'
import { GradientOptions, SizeOptions } from '../types'

export function hslToHex(h: number, s: number, l: number) {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0')
  }
  return parseInt(`0x${f(0)}${f(8)}${f(4)}`)
}

export function debounce<Params extends unknown[]>(
  func: (...args: Params) => unknown,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}

export const rndmRng = (h: number, l: number) => Math.random() * (h - l) + l

export const shuffle = (array: [number, number][]): [number, number][] => {
  let currentIndex: number = array.length
  let randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export const distanceFrom = (px: number, py: number, cx: number, cy: number) =>
  Math.sqrt(Math.pow(px - cx, 2) + Math.pow(py - cy, 2))

export function lerp(start_value: number, end_value: number, pct: number) {
  return start_value + (end_value - start_value) * pct
}

export function createRadialTexture(opts: GradientOptions) {
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

export function drawDashLine(
  graphics: PIXI.Graphics,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  angle: number,
  dash = 16,
  gap = 8
) {
  let xn = fromX + dash * Math.cos(angle)
  let yn = fromY + dash * Math.sin(angle)
  let counter = 0
  const distance = distanceFrom(fromX, fromY, toX, toY)

  while (counter < distance) {
    graphics.moveTo(xn, yn)
    xn += dash * Math.cos(angle)
    yn += dash * Math.sin(angle)

    graphics.lineTo(xn, yn)
    xn += gap * Math.cos(angle)
    yn += gap * Math.sin(angle)
    graphics.closePath()
    counter += dash + gap
  }
}

export function getSize(opts: SizeOptions): number {
  const size = Math.round(
    rndmRng(
      opts.bounds.right * opts.maxMultiplier,
      opts.bounds.right * opts.minMultiplier
    )
  )
  const max = Math.min(size, opts.maxLimit)
  const min = Math.max(size, opts.minLimit)
  return size > max ? max : min
}

export const splatterPoints = (
  ox: number,
  oy: number,
  layers: number,
  graphics: PIXI.Graphics
) => {
  let strokeColor = 0xfefefe
  let newX = 0
  let newY = 0
  for (let m = 1; m <= layers; m++) {
    strokeColor = hslToHex(204, 100, 48 + Math.round(rndmRng(51, 0)))

    graphics.lineStyle(Math.round(rndmRng(9, 5)), strokeColor, rndmRng(1, 0.1))
    newX = Math.round(rndmRng(10 * m + ox, 5 * m + ox))
    newY = Math.round(rndmRng(-5 * m + oy, -10 * m + oy))
    graphics.moveTo(newX, newY)
    graphics.lineTo(
      newX + Math.round(rndmRng(5, 1)),
      newY + Math.round(rndmRng(5, 1))
    )
    graphics.moveTo(ox, oy)
    strokeColor = hslToHex(260, 31, 70 + Math.round(rndmRng(29, 0)))
    graphics.lineStyle(Math.round(rndmRng(9, 5)), strokeColor, rndmRng(1, 0.5))
    newX = Math.round(rndmRng(-5 * m + ox, -10 * m + ox))
    newY = Math.round(rndmRng(-5 * m + oy, -10 * m + oy))
    graphics.moveTo(newX, newY)
    graphics.lineTo(
      newX + Math.round(rndmRng(5, 1)),
      newY + Math.round(rndmRng(5, 1))
    )
    graphics.moveTo(ox, oy)
    strokeColor = hslToHex(340, 89, 74 + Math.round(rndmRng(25, 0)))
    graphics.lineStyle(Math.round(rndmRng(9, 5)), strokeColor, rndmRng(1, 0.5))
    newX = Math.round(rndmRng(-5 * m + ox, -10 * m + ox))
    newY = Math.round(rndmRng(10 * m + oy, 5 * m + oy))
    graphics.moveTo(newX, newY)

    graphics.lineTo(
      newX + Math.round(rndmRng(5, 1)),
      newY + Math.round(rndmRng(5, 1))
    )
    graphics.moveTo(ox, oy)
    strokeColor = hslToHex(179, 79, 74 + Math.round(rndmRng(25, 0)))
    graphics.lineStyle(Math.round(rndmRng(9, 5)), strokeColor, rndmRng(1, 0.5))
    newX = Math.round(rndmRng(10 * m + ox, 5 * m + ox))
    newY = Math.round(rndmRng(10 * m + oy, 5 * m + oy))
    graphics.moveTo(newX, newY)
    graphics.lineTo(
      newX + Math.round(rndmRng(5, 1)),
      newY + Math.round(rndmRng(5, 1))
    )
    graphics.moveTo(ox, oy)
  }
}

export function createArc(
  graphics: PIXI.Graphics,
  x: number,
  y: number,
  size: number
) {
  let start = 0
  let end = rndmRng(2 * Math.PI, start + 0.2)

  while (start < 2 * Math.PI) {
    const spacing = (2 * Math.PI) / rndmRng(300, 150)

    while (start <= end) {
      graphics.arc(x, y, size, start, start + spacing)
      start += spacing * 1.5
      graphics.closePath()
    }

    end = rndmRng(2 * Math.PI, start + 0.2)
  }
}

export function createHalfArc(
  graphics: PIXI.Graphics,
  x: number,
  y: number,
  size: number,
  start: number
) {
  const counterClockwise = Math.random() < 0.5 ? true : false
  const end = Math.PI + start
  const spacing = Math.PI / rndmRng(150, 75)
  const flip = counterClockwise ? -1 : 1
  let counter = start

  while (counter <= end) {
    graphics.arc(x, y, size, start, start + spacing * flip, counterClockwise)
    counter += spacing * 1.5
    graphics.closePath()
    start += spacing * 1.5 * flip
  }
}

export function circleShading(
  graphics: PIXI.Graphics,
  x: number,
  y: number,
  size: number,
  strokeColor: number
) {
  let startAngle = Math.floor(rndmRng(2 * Math.PI, 0))
  let endAngle = startAngle + 1
  let increment = rndmRng(6, 3.3)
  const layers = Math.round(size / 28)

  for (let i = 0; i < layers; i++) {
    let counter = startAngle
    graphics.lineStyle(
      Math.round(rndmRng(7, 3)),
      strokeColor,
      rndmRng(0.9 - i * 0.08, 0.8 - i * 0.08)
    )

    endAngle =
      startAngle - i / 30 + increment > 2 * Math.PI
        ? startAngle - i / 6 + increment - 2 * Math.PI
        : startAngle - i / 6 + increment
    const spacing = (2 * Math.PI) / rndmRng(300, 150)
    const layerSize = Math.round(size - (i / 2) * 18)

    while (counter <= endAngle) {
      graphics.arc(x, y, layerSize, counter, counter + spacing)
      counter += spacing * 1.5
      graphics.closePath()
    }

    increment -=
      rndmRng(increment * 0.06, increment * 0.002) + (layers / 10) * 0.01

    startAngle += i / rndmRng(70, 40)
  }
}

export function convertToSprite(
  x: number,
  y: number,
  alpha: number,
  graphics: PIXI.Graphics | PIXI.Sprite | PIXI.Texture
) {
  let sprite = graphics

  if (sprite instanceof PIXI.Texture) {
    sprite = new PIXI.Sprite(sprite)
  } else {
    sprite.cacheAsBitmap = true
    sprite.alpha = alpha
    if (sprite instanceof PIXI.Sprite) sprite.anchor.set(0.5, 0.5)
    if (sprite instanceof PIXI.Graphics)
      sprite.pivot.set(sprite.width / 2, sprite.height / 2)
    sprite.position.set(x, y)
  }

  return sprite
}

export function findNewPoint(
  x: number,
  y: number,
  angle: number,
  distance: number
) {
  const result = { x, y }

  result.x = Math.cos(angle) * distance + x
  result.y = Math.sin(angle) * distance + y

  return result
}
