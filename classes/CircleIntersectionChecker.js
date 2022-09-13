export default class CircleIntersectionChecker {
  static check(first, second) {
    return this.#checkIntersection(first, second)
  }

  static #checkIntersection(first, second) {
    const cSqr = (first.radius + second.radius) ** 2
    const aSqr = (first.position.x - second.position.x) ** 2
    const bSqr = (first.position.y - second.position.y) ** 2

    return cSqr > aSqr + bSqr
  }
}