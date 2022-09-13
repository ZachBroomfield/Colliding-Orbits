import Vector2D from "./Vector2D"

export default class Circle {
  constructor({position, velocity, radius, colour, mass}) {
    this.position = position
    this.velocity = velocity
    this.radius = radius
    this.colour = colour
    this.mass = mass
  }

  updateVelocity(force, angle) {
    this.velocity = this.#velocityCalc(force, angle)
  }

  updatePosition() {
    this.position = this.#positionCalc()
  }

  #velocityCalc(force, angle) {
    return this.velocity.add(
      new Vector2D({
        x: (Math.cos(angle) * force) / this.mass,
        y: (Math.sin(angle) * force) / this.mass
      })
    )
  }

  #positionCalc() {
    return this.position.add(this.velocity)
  }
}