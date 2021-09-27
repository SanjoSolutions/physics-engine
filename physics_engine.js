import { convertDegreesToRadians } from './unnamed/convertDegreesToRadians.js'

// The coordinate system base unit is 1 meter (m).

export class PhysicalObject {
  constructor({position, mass, radius}) {
    this.position = position
    this.mass = mass // in kg
    this.radius = radius
    this.speed = 0 // in m / s
    this.acceleration = 0 // in m / s²
  }
}

export class PhysicsEngine {
  static ACCELERATION_OF_GRAVITY = 9.81

  constructor() {
    this.objects = new Set()
  }

  addObject(object) {
    this.objects.add(object)
    const F = PhysicsEngine.ACCELERATION_OF_GRAVITY
    object.acceleration = F / object.mass
  }

  /**
   * @param {number} ellapsedTime Ellapsed time in seconds.
   */
  simulate(ellapsedTime) {
    this.objects.forEach(this._simulateObjectAcceleration.bind(this, ellapsedTime))
  }

  _simulateObjectAcceleration(ellapsedTime, object) {
    object.speed += object.acceleration
    object.position.y = Math.max(object.radius, object.position.y - object.speed * ellapsedTime)
  }
}
