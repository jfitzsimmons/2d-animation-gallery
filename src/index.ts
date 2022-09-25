import TravelCosmos from './animations/TravelCosmos'
import XorCircles from './animations/XorCircles'
import * as PIXI from 'pixi.js'
import '../assets/style.scss'
import { debounce } from './utils'
import { Bounds } from './types'

export class AnimationStage {
  static renderer: PIXI.AbstractRenderer
  static getRenderer() {
    return this.renderer
  }
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
  currentAnimation: XorCircles

  constructor(domElementSelector: string) {
    this.domElement = document.getElementById(domElementSelector)

    AnimationStage.bounds = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    }

    this.currentAnimation = new XorCircles()
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
      AnimationStage.renderer = this.renderer
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

export const app = new AnimationStage('cvs0-container')
app.ready()
