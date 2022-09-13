import InitialCircles from "./InitialCircles.js"

export default class Setup {

  static setup(circleHandler, center) {
    const centralCircle = this.#addCentre(circleHandler, center)

    this.#addOrbiting(circleHandler, centralCircle)
  }

  static #addCentre(circleHandler, center) {
    const centralCircle = InitialCircles.getCentral(center)
    circleHandler.addCircle(centralCircle)

    return centralCircle
  }

  static #addOrbiting(circleHandler, centralCircle) {
    InitialCircles.getOrbitingCentral(centralCircle.position).forEach(circle => {
      circle.circleToOrbit = centralCircle
      circleHandler.addCircle(circle)
    })
  }
  
}