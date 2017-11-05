/**
* @providesModule skydreamer/config/gradient
*/

class Gradient {
  constructor() {
    this.sessionManager = [
        ['rgba(243, 107, 60, 0.8)', 'rgba(221, 26, 114, 0.8)'],
        ['rgba(221, 26, 114, 0.8)', 'rgba(123, 27, 221, 0.8)'],
        ['rgba(123, 27, 221, 0.8)', 'rgba(26, 169, 210, 0.8)'],
        ['rgba(26, 169, 210, 0.8)', 'rgba(58, 179, 91, 0.8)'],
        ['rgba(58, 179, 91, 0.8)', 'rgba(221, 206, 38, 0.8)'],
        ['rgba(221, 206, 38, 0.8)', 'rgba(58, 179, 91, 0.8)'],
    ];
    this.buttonWarm = {
      start: {
        x: 1,
        y: 0.25,
      },
      end: {
        x: 0.45,
        y: 1.0,
      },
    };
  }
}

export default new Gradient();
