import Circle from "./Circle.js"
import Vector2D from "./Vector2D.js"
import StableOrbitVelocityCalc from "./StableOrbitVelocityCalc.js"

export default class CircleFactory {
  static create(details) {
    return this.#newCircle(details)
  }

  static #newCircle(details) {
    if (!details.velocity && details.circleToOrbit) {
      details.velocity = StableOrbitVelocityCalc.calc(details)
    }

    return new Circle({
      position: new Vector2D(details.position),
      velocity: new Vector2D(details.velocity),
      radius: details.radius,
      colour: details.colour,
      mass: details.mass
    })
  }
}