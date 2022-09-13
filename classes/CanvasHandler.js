export default class CanvasHandler {
  constructor(canvas, context) {
    this.canvas = canvas
    this.ctx = canvas.getContext(context)

    this.canvas.width = innerWidth
    this.canvas.height = innerHeight
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawCircle(circle) {
    this.ctx.beginPath()
    this.ctx.arc(circle.position.x, circle.position.y, circle.radius, Math.PI * 2, false)
    this.ctx.fillStyle = circle.colour ? circle.colour : 'black'
    this.ctx.fill()
  }

  getCenter() {
    return {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2
    }
  }
}