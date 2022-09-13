import GravitationalForceCalc from "./GravitationalForceCalc.js"
import AngleCalc from "./AngleCalc.js"
import CollisionHandler from "./CollisionHandler.js"

export default class CircleUpdater {
  static update(circles) {
    this.#updateVelocities(circles)
    this.#updatePositions(circles)
    CollisionHandler.normalise(circles)
  }

  static #updateVelocities(circles) {
    for (let i = 0; i < circles.length; i++) {
      for (let j = i + 1; j < circles.length; j++) {
        const force = GravitationalForceCalc.calc(circles[i], circles[j])
        const angle = AngleCalc.calc(circles[i], circles[j])

        circles[i].updateVelocity(force, angle)
        circles[j].updateVelocity(force, angle - Math.PI)
      }
    }
  }

  static #updatePositions(circles) {
    circles.forEach(circle => circle.updatePosition())
  }
}