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

  domElement: HTMLElement
  renderer: PIXI.AbstractRenderer
  currentAnimation: XorCircles | TravelCosmos
  defaultAnimation: keyof typeof this.animations
  animations = {
    travelCosmos: new TravelCosmos(),
    xorCircles: new XorCircles(),
  }

  constructor(domElementSelector: string) {
    this.domElement = document.getElementById(domElementSelector)
    this.defaultAnimation = 'travelCosmos'

    AnimationStage.bounds = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    }
  }

  toggleUi() {
    const navs = document.getElementsByClassName('nav')
    navs[0].classList.contains('unstuck')
      ? navs[0].classList.remove('unstuck')
      : navs[0].classList.add('unstuck')
  }

  getAnimation(prop: keyof typeof this.animations) {
    type AnimationKey = keyof typeof this.animations
    const animationKey: AnimationKey = prop
    const oldActives = document.getElementsByClassName('active')
    if (oldActives.length > 0) oldActives[0].classList.remove('active')
    const newActives = document.getElementsByClassName(animationKey)
    if (newActives.length > 0) newActives[0].classList.add('active')
    return this.animations[animationKey]
  }

  switchAnimation(prop: keyof typeof this.animations) {
    this.currentAnimation.reset(false)
    this.currentAnimation = this.getAnimation(prop)
    this.currentAnimation.init(AnimationStage.bounds)
  }

  static newContainer() {
    if (AnimationStage.stage)
      AnimationStage.stage.destroy({
        children: true,
        texture: true,
        baseTexture: true,
      })
    AnimationStage.stage = new PIXI.Container()
    AnimationStage.stage.interactiveChildren = false
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

    AnimationStage.newContainer()

    let key: keyof typeof this.animations
    for (key in this.animations) {
      const _key = key
      const element = document.createElement('li')
      element.appendChild(document.createTextNode(_key))
      element.addEventListener('click', () => this.switchAnimation(_key))
      element.classList.add(`menu__link`, `${_key}`)
      const menu = document.getElementById('menu')
      menu.appendChild(element)
    }

    const uiToggles = document.getElementsByClassName('arrows')
    if (uiToggles.length > 0)
      uiToggles[0].addEventListener('click', () => this.toggleUi())

    window.addEventListener('resize', debounce(this.resize.bind(this), 400))

    this.startUpdate()
    this.currentAnimation = this.getAnimation(this.defaultAnimation)
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
      this.currentAnimation.reset(true)
    }
  }
}

export const app = new AnimationStage('cvs0-container')
app.ready()
