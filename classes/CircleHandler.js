import CircleUpdater from "./CircleUpdater.js"
import CircleFactory from "./CircleFactory.js"

export default class CircleHandler {
  constructor(canvasHandler) {
    this.canvasHandler = canvasHandler
    this.circles = []
  }

  addCircle(details) {
    this.circles.push(CircleFactory.create(details))
  }

  updateCircles() {
    CircleUpdater.update(this.circles)
  }

  drawCircles() {
    this.circles.forEach(circle => this.canvasHandler.drawCircle(circle))
  }
}