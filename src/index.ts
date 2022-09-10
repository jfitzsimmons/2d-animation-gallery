import * as PIXI from 'pixi.js'
import '../assets/style.scss'

const rndmArrI = (a:any[]) => a[Math.floor(Math.random() * a.length)]
const rndmRng = (h:number, l:number) => Math.random() * (h - l) + l
const colors = [209, 291, 263]
const strokeColors = ['506EE5', '68B2F8', '7037CD']
const timeouts:any = []

function hslToHex(h: number, s:number, l:number) {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n:number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0')
  }
  return `0x${f(0)}${f(8)}${f(4)}`
}

function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
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
  top: number,
  bottom: number,
  left:number,
  right: number,
}


const Circle = function (this: any, bounds: Bounds) {
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
  this.color = rndmArrI(colors)
  this.light = rndmRng(60, 10)
  this.strokeColor = rndmArrI(strokeColors)
  this.graphics = new PIXI.Graphics()
  this.graphics.blendMode = PIXI.BLEND_MODES.XOR
}

Circle.prototype.update = function () {
  if (this.radius < this.innerCrcmf && typeof this.radius !== 'undefined') {
    this.radius += Math.round(this.innerCrcmf / this.grooves)
    this.graphics.beginFill(
      hslToHex(
        Math.round((this.color += 0.3)),
        Math.round(100 - rndmRng(50, 0)),
        Math.round((this.light += 0.1))
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
      .lineStyle(Math.round(rndmRng(25, 5)), `0x${this.strokeColor}`)
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

const CircleStage = function (this: any, domElementSelector: string) {
  this.circles = []

  this.domElement = document.getElementById(domElementSelector)

  this.bounds = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  }

  this.renderer = null

  this.stage = null
}


CircleStage.prototype.addCircles = function () {
  const circleAmount = Math.round(
    (this.bounds.right * this.bounds.bottom) / 47000
  )
  for (let i = circleAmount; i--; ) {
    timeouts.push(
      setTimeout(() => {
        const circle = new (Circle as any)(this.bounds)
        this.circles.push(circle)
      }, i * rndmRng(2000, 900))
    )
  }
}

CircleStage.prototype.ready = function () {
  if (typeof PIXI === 'undefined') {
    this.domElement.addClass('error')
    throw 'PIXI is required to run'
  }

  const stage = document.getElementById('cvs0') as HTMLCanvasElement

  this.bounds.right = stage.offsetWidth
  this.bounds.bottom = stage.offsetHeight

  const options = {
    backgroundAlpha: 0,
    view: stage,
    clearBeforeRender: true,
  }

  Object.assign(options, {
    width: this.bounds.right,
    height: this.bounds.bottom,
  })

  try {
    this.renderer = PIXI.autoDetectRenderer(options)
  } catch (err) {
    alert(err.message)
    return
  }

  this.stage = new PIXI.Container()
  this.stage.interactiveChildren = false

  window.addEventListener('resize', debounce(this.resize.bind(this), 400))

  this.startUpdate()
  this.addCircles()
}

document.addEventListener('DOMContentLoaded', (e) => {
  const app = new (CircleStage as any)('cvs0-container')

  app.ready()
})

CircleStage.prototype.startUpdate = function () {
  // testjpf this below breaks app!!!! 
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const _this = this
  requestAnimationFrame(function () {
    _this.update()
  })
}

CircleStage.prototype.resize = function () {
  const prevWidth = this.bounds.right
  const prevHeight = this.bounds.bottom
  const width = this.domElement.offsetWidth
  const height = this.domElement.offsetHeight
  this.bounds.right = width
  this.bounds.bottom = height
  if (Math.abs(prevWidth - width) > 50 || Math.abs(prevHeight - height) > 50) {
    this.renderer.resize(width, height)
    this.reset()
  }
}

CircleStage.prototype.reset = function () {
  for (const to in timeouts) {
    window.clearTimeout(to)
  }
  this.stage.removeChildren()
  this.circles.length = 0
  this.addCircles()
}

CircleStage.prototype.update = function () {
  if (this.circles.length > 0) {
    for (let i = this.circles.length; i--; ) {
      const child = this.circles[i].update()
      if (child) this.stage.addChild(child)
    }
  }

  this.renderer.render(this.stage)

  this.startUpdate()
}
