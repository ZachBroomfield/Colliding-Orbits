export default class Vector2D {
  constructor(vector = {x: 0, y: 0}) {
    this.x = vector.x
    this.y = vector.y
  }

  unitVector() {
    const mag = this.#magnitude()
    if (mag != 0) {
      return new Vector2D({
        x: this.x / mag,
        y: this.y / mag
      })
    }

    return new Vector2D()
  }

  mag() {
    return this.#magnitude()
  }

  add(vector) {
    return new Vector2D({
      x: this.x + vector.x,
      y: this.y + vector.y
    })
  }

  minus(vector) {
    return new Vector2D({
      x: this.x - vector.x,
      y: this.y - vector.y
    })
  }

  multiplication(scalar) {
    return new Vector2D({
      x: scalar * this.x,
      y: scalar * this.y
    })
  }

  dotProduct(vector) {
    return this.x * vector.x + this.y * vector.y
  }

  #magnitude() {
    return Math.sqrt(this.x**2 + this.y**2)
  }
}