/**
 * testjpf
 *
 * separate circle and AnimationStage into two files
 * AnimationStage will probably be index
 * circle will be inanimations directory
 * all animations share AnimationStage?!?!?
 */

import * as PIXI from 'pixi.js'
import '../assets/style.scss'

const rndmRng = (h: number, l: number) => Math.random() * (h - l) + l
const colors: number[] = [209, 291, 263]
const strokeColors: string[] = ['506EE5', '68B2F8', '7037CD']
const timeouts: ReturnType<typeof setTimeout>[] = []

function hslToHex(h: number, s: number, l: number) {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0')
  }
  return `0x${f(0)}${f(8)}${f(4)}`
}

function debounce<Params extends unknown[]>(
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

interface Bounds {
  top: number
  bottom: number
  left: number
  right: number
}

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
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.light = rndmRng(60, 10)
    this.strokeColor =
      strokeColors[Math.floor(Math.random() * strokeColors.length)]
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

class Circles {
  circles: Circle[]

  constructor() {
    this.circles = []
  }

  init(bounds: Bounds) {
    const circleAmount = Math.round((bounds.right * bounds.bottom) / 47000)
    for (let i = circleAmount; i--; ) {
      timeouts.push(
        setTimeout(() => {
          const circle = new Circle(bounds)
          this.circles.push(circle)
        }, i * rndmRng(2000, 900))
      )
    }
  }

  update() {
    if (this.circles.length > 0) {
      for (let i = this.circles.length; i--; ) {
        const child = this.circles[i].update()
        if (child) AnimationStage.stage.addChild(child)
      }
    }
  }

  reset() {
    for (const to in timeouts) {
      window.clearTimeout(to)
    }
    AnimationStage.stage.removeChildren()
    this.circles.length = 0
    this.init(AnimationStage.bounds)
  }
}

class AnimationStage {
  static bounds: Bounds
  static getBounds() {
    return this.bounds
  }
  static stage: PIXI.Container
  static getStage() {
    return this.stage
  }
  /**
   * testjpf
   *
   * track list of animations (startfunctions per animation?!?!?)
   * track current animation (with default)
   */
  domElement: HTMLElement
  renderer: PIXI.AbstractRenderer
  currentAnimation: Circles

  constructor(domElementSelector: string) {
    this.domElement = document.getElementById(domElementSelector)

    AnimationStage.bounds = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    }

    this.currentAnimation = new Circles()
  }

  ready() {
    if (typeof PIXI === 'undefined') {
      this.domElement.classList.add('error')
      throw 'PIXI is required to run'
    }

    const stage = document.getElementById('cvs0') as HTMLCanvasElement

    AnimationStage.bounds.right = stage.offsetWidth
    AnimationStage.bounds.bottom = stage.offsetHeight

    const options = {
      backgroundAlpha: 0,
      view: stage,
      clearBeforeRender: true,
    }

    Object.assign(options, {
      width: AnimationStage.bounds.right,
      height: AnimationStage.bounds.bottom,
    })

    try {
      this.renderer = PIXI.autoDetectRenderer(options)
    } catch (err) {
      alert(err.message)
      return
    }

    AnimationStage.stage = new PIXI.Container()
    AnimationStage.stage.interactiveChildren = false

    window.addEventListener('resize', debounce(this.resize.bind(this), 400))

    this.startUpdate()

    this.currentAnimation.init(AnimationStage.bounds)
  }
  startUpdate() {
    requestAnimationFrame(() => this.update())
  }
  update() {
    this.currentAnimation.update()

    this.renderer.render(AnimationStage.stage)

    this.startUpdate()
  }
  resize() {
    const prevWidth = AnimationStage.bounds.right
    const prevHeight = AnimationStage.bounds.bottom
    const width = this.domElement.offsetWidth
    const height = this.domElement.offsetHeight
    AnimationStage.bounds.right = width
    AnimationStage.bounds.bottom = height
    if (
      Math.abs(prevWidth - width) > 50 ||
      Math.abs(prevHeight - height) > 50
    ) {
      this.renderer.resize(width, height)
      this.currentAnimation.reset()
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new AnimationStage('cvs0-container')

  app.ready()
})
