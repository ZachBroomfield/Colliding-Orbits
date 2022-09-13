import CollisionChecker from "./CollisionChecker.js"
import Vector2D from "./Vector2D.js"
import DistanceCalc from "./DistanceCalc.js"
import AngleCalc from "./AngleCalc.js"

export default class CollisionHandler {
  static normalise(circles) {
    this.#findCollisions(circles)
  }

  static #findCollisions(circles) {
    for (let i = 0; i < circles.length; i++) {
      for (let j = i + 1; j < circles.length; j++) {
        if (CollisionChecker.check(circles[i], circles[j])) {
          this.#handleCollision(circles[i], circles[j])
        }
      }
    }
  }

  static #handleCollision(first, second) {
    const offset = this.#calcPositionOffset(first, second)

    const velocityChanges = this.#calcVelocityChanges(first, second)

    this.#normaliseVelocities(first, second, velocityChanges)
    
    this.#normalisePositions(first, second, offset)
  }

  static #calcPositionOffset(first, second) {
    // this approach doesn't fix all collisions
    const dist = DistanceCalc.calc(first, second)
    const angle = AngleCalc.calc(first, second)
    const difference = (first.radius + second.radius - dist) / 2
    return {
      angle: angle,
      difference: difference
    }
  }

  static #calcVelocityChanges(first, second) {
    const vecNormal = first.position.minus(second.position)
    const unitVecNormal = vecNormal.unitVector()
    const unitVecTangent = new Vector2D({
      x: -unitVecNormal.y,
      y: unitVecNormal.x
    })

    const v1Normal = unitVecNormal.dotProduct(first.velocity)
    const v1Tangent = unitVecTangent.dotProduct(first.velocity)
    const v2Normal = unitVecNormal.dotProduct(second.velocity)
    const v2Tangent = unitVecTangent.dotProduct(second.velocity)

    const v1NormalPrime = this.#calcNormalPrime(first, second, v1Normal, v2Normal)
    const v2NormalPrime = this.#calcNormalPrime(second, first, v2Normal, v1Normal)

    const v1NormalPrimeVec = unitVecNormal.multiplication(v1NormalPrime)
    const v1TangentPrimeVec = unitVecTangent.multiplication(v1Tangent)
    const v2NormalPrimeVec = unitVecNormal.multiplication(v2NormalPrime)
    const v2TangentPrimeVec = unitVecTangent.multiplication(v2Tangent)

    return {
      first: {
        x: v1NormalPrimeVec.x + v1TangentPrimeVec.x,
        y: v1NormalPrimeVec.y + v1TangentPrimeVec.y
      },
      second: {
        x: v2NormalPrimeVec.x + v2TangentPrimeVec.x,
        y: v2NormalPrimeVec.y + v2TangentPrimeVec.y
      }
    }
  }

  static #calcNormalPrime(first, second, firstNormal, secondNormal) {
    return (firstNormal * (first.mass - second.mass) + 2 * second.mass * secondNormal) / (first.mass + second.mass)
  }

  static #normaliseVelocities(first, second, velocityChanges) {
    first.velocity = new Vector2D(velocityChanges.first)

    second.velocity = new Vector2D(velocityChanges.second)
  }

  static #normalisePositions(first, second, offset) {
    first.position = first.position.minus({
      x: Math.cos(offset.angle) * offset.difference,
      y: Math.sin(offset.angle) * offset.difference
    })

    second.position = second.position.add({
      x: Math.cos(offset.angle) * offset.difference,
      y: Math.sin(offset.angle) * offset.difference
    })
  }
}
