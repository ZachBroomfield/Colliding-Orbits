export default class AngleCalc {
  static calc(first, second) {
    return this.#calcAngle(first, second)
  }

  static #calcAngle(first, second) {
    return Math.atan2(
      second.position.y - first.position.y,
      second.position.x - first.position.x,
    )
  }
}