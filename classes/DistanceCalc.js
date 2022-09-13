export default class DistanceCalc {
  static calc(first, second) {
    return this.#calcDistance(first, second)
  }

  static #calcDistance(first, second) {
    return Math.hypot(
      first.position.x - second.position.x,
      first.position.y - second.position.y
    )
  }
}