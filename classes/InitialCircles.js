export default class InitialCircles {
  static getCentral(position) {
    return {
      position: position,
      velocity: {
        x: 0,
        y: 0
      },
      radius: 20,
      colour: 'orange',
      mass: 3300000
    }
  }

  static getOrbitingCentral(position) {
    return [
      {
        position: {
          x: position.x - 300,
          y: position.y
        },
        radius: 5,
        colour: 'green',
        mass: 10
      },
      {
        position: {
          x: position.x + 303,
          y: position.y
        },
        radius: 5,
        colour: 'gray',
        mass: 10
      },
      {
        position: {
          x: position.x + 400,
          y: position.y
        },
        radius: 5,
        colour: 'blue',
        mass: 100
      },
      {
        position: {
          x: position.x,
          y: position.y - 550
        },
        radius: 5,
        colour: 'red',
        mass: 100
      },
      {
        position: {
          x: position.x,
          y: position.y + 553
        },
        radius: 5,
        colour: 'purple',
        mass: 100
      },
      {
        position: {
          x: position.x + 40,
          y: position.y + 40
        },
        radius: 5,
        colour: 'cyan',
        mass: 100
      },
    ]
  }
}