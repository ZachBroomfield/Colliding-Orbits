import CircleIntersectionChecker from "./CircleIntersectionChecker.js"

export default class CollisionChecker {
  static check(first, second) {
    return this.#checkCollision(first, second)
  }

  static #checkCollision(first, second) {
    return CircleIntersectionChecker.check(first, second)
  }
}