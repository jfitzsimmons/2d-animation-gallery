import TravelCosmos from '../animations/TravelCosmos'
import XorCircles from '../animations/XorCircles'

export interface Bounds {
  top: number
  bottom: number
  left: number
  right: number
}

export interface GradientOptions {
  inR: number
  outR: number
  from: string
  to: string
}

export interface UpdateOptions {
  mod: number
  increase: number
}

export interface BoundsOptions {
  w: number
  h: number
  position: { x: number; y: number }
  scale: { x: number; y: number }
  scaleLimit: number
}

export interface SizeOptions {
  bounds: Bounds
  maxMultiplier: number
  minMultiplier: number
  maxLimit: number
  minLimit: number
}

export interface AnimationSelect {
  travelCosmos: TravelCosmos
  xorCircles: XorCircles
}
