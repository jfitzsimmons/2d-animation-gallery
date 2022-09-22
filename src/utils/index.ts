import * as PIXI from 'pixi.js'
import { GradientOptions, SizeOptions } from '../types'
//testJPF make util that returns hueSats??
const hueSat: [number, number][] = [
  [360, 0],
  [204, 100],
  [260, 31],
  [340, 89],
  [179, 79],
]

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

export const distanceFromCenter = (
  px: number,
  py: number,
  cx: number,
  cy: number
) => Math.sqrt(Math.pow(px - cx, 2) + Math.pow(py - cy, 2))

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

//TESTJPF NOt USED YET
//is this needed
//and when the hell did I make this :-)
export function drawDashLine(
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
    const _hueSat = hueSat[Math.round(rndmRng(hueSat.length - 1, 0))]
    const strokeColor = hslToHex(
      _hueSat[0],
      _hueSat[1],
      Math.round(rndmRng(99, 60))
    )

    graphics.lineStyle(Math.round(rndmRng(7, 3)), strokeColor, rndmRng(1, 0.9))

    const spacing = (2 * Math.PI) / rndmRng(300, 150)

    while (start <= end) {
      graphics.arc(x, y, size, start, start + spacing)
      start += spacing * 1.5
      graphics.closePath()
    }

    end = rndmRng(2 * Math.PI, start + 0.2)
  }
}

export function circleShading(
  graphics: PIXI.Graphics,
  x: number,
  y: number,
  size: number
) {
  const _hueSat = hueSat[Math.round(rndmRng(hueSat.length - 1, 0))]
  const strokeColor = hslToHex(
    _hueSat[0],
    _hueSat[1],
    Math.round(rndmRng(99, 60))
  )

  let startAngle = Math.floor(rndmRng(2 * Math.PI, 0))
  let endAngle = startAngle + 1
  let increment = rndmRng(6, 3.3)
  const layers = Math.round(size / 28)

  for (let i = 0; i < layers; i++) {
    let counter = startAngle
    graphics.lineStyle(
      Math.round(rndmRng(5, 1)),
      strokeColor,
      rndmRng(0.6, 0.1)
    )
    graphics.alpha = rndmRng(1 - i * 0.05, 0.9 - i * 0.05)

    endAngle =
      startAngle - i / 30 + increment > 2 * Math.PI
        ? startAngle - i / 30 + increment - 2 * Math.PI
        : startAngle - i / 30 + increment
    const spacing = (2 * Math.PI) / rndmRng(300, 150)
    const layerSize = Math.round(size - (i / 2) * 10)

    while (counter <= endAngle) {
      graphics.arc(x, y, layerSize, counter, counter + spacing)
      counter += spacing * 1.5
      graphics.closePath()
    }

    increment -=
      rndmRng(increment * 0.03, increment * 0.001) + (layers / 10) * 0.01

    startAngle += i / rndmRng(30, 20)
  }
}
