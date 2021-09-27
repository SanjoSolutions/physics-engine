import { PhysicalObject, PhysicsEngine } from './physics_engine.js'
import { describe, it, expect} from '@jest/globals'

describe('PhysicsEngine', () => {
  it('accelerates objects', () => {
    const physicsEngine = new PhysicsEngine()
    const initialY = 100
    const object = new PhysicalObject({
      position: { x: 0, y: initialY },
      mass: 1,
      radius: 10
    })
    physicsEngine.addObject(object)
    physicsEngine.simulate(1)
    expect(object.position.y).toBeLessThan(initialY)
  })

  it('objects fall down to the ground', () => {
    const physicsEngine = new PhysicsEngine()
    const initialY = 11
    const radius = 10
    const object = new PhysicalObject({
      position: { x: 0, y: initialY },
      mass: 1,
      radius: radius
    })
    physicsEngine.addObject(object)
    physicsEngine.simulate(60)
    expect(object.position.y).toBeGreaterThanOrEqual(radius)
  })
})
