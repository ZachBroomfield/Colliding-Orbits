import GravitationalConstant from "./GravitationalConstant"
import DistanceCalc from "./DistanceCalc"
import AngleCalc from "./AngleCalc"

export default class StableOrbitVelocityCalc {
  static calc(details) {
    return this.#calcVelocity(details)
  }

  static #calcVelocity(details) {
    const speed = this.#calcSpeed(details)
    const angle = this.#calcTangentAngle(details)

    return {
      x: Math.cos(angle) * speed + details.circleToOrbit.velocity.x,
      y: Math.sin(angle) * speed + details.circleToOrbit.velocity.y
    }
  }

  static #calcSpeed(details) {
    const stdGravParam = this.#calcStdGravParam(details)
    const distance = DistanceCalc.calc(details, details.circleToOrbit)

    return Math.sqrt(stdGravParam / distance)
  }

  static #calcStdGravParam(details) {
    return GravitationalConstant.get() * (details.circleToOrbit.mass + details.mass)
  }

  static #calcTangentAngle(details) {
    const offset = Math.random() > 0.5 ? 2 : -2
    return AngleCalc.calc(details, details.circleToOrbit) + (Math.PI / offset)
  }
}