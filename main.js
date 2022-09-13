import CanvasHandler from "./classes/CanvasHandler.js"
import CircleHandler from "./classes/CircleHandler.js"
import Setup from "./classes/Setup.js"

const canvas = document.querySelector('canvas')

const canvasHandler = new CanvasHandler(canvas, '2d')

const circleHandler = new CircleHandler(canvasHandler)

Setup.setup(circleHandler, canvasHandler.getCenter())

function animate() {
  requestAnimationFrame(animate)

  canvasHandler.clear()
  
  circleHandler.updateCircles()

  circleHandler.drawCircles()
}

animate()