export default class DistanceSqrCalc {
  static calc(first, second) {
    return this.#calcDistanceSquared(first, second)
  }

  static #calcDistanceSquared(first, second) {
    return (
      (first.position.x - second.position.x) ** 2 +
      (first.position.y - second.position.y) ** 2
    )
  }
}