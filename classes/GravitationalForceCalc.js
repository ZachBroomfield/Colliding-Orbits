import DistanceSqrCalc from "./DistanceSqrCalc.js"
import GravitationalConstant from "./GravitationalConstant.js"

export default class GravitationalForceCalc {
  static calc(first, second) {
    return this.#calcForce(first, second)
  }

  static #calcForce(first, second) {
    let distanceSqr = DistanceSqrCalc.calc(first, second)

    distanceSqr = distanceSqr < 1 ? 1 : distanceSqr

    return (GravitationalConstant.get() * first.mass * second.mass) / distanceSqr
  }

}