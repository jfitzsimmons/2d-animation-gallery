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
