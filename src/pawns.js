// function Pawn(color, x) {
//   this.color = color;
//   this.position = x;
// }

// Pawn.prototype.advance = function () {
//   this.position = this.position + diceResult;
// };
const blue1 = document.getElementById('b1');
const blue2 = document.getElementById('b2');
const blue3 = document.getElementById('b3');
const blue4 = document.getElementById('b4');
const yellow1 = document.getElementById('y1');
const yellow2 = document.getElementById('y2');
const yellow3 = document.getElementById('y3');
const yellow4 = document.getElementById('y4');
const green1 = document.getElementById('g1');
const green2 = document.getElementById('g2');
const green3 = document.getElementById('g3');
const green4 = document.getElementById('g4');
const red1 = document.getElementById('r1');
const red2 = document.getElementById('r2');
const red3 = document.getElementById('r3');
const red4 = document.getElementById('r4');

const setup = {
  colors: ['blue', 'yellow', 'green', 'red'],
  initialPosition: [21, 4, 55, 38],
  finalPosition: [17, 68, 51, 34]
};

function firstMovementBlue () {
  const allBluePawns = Array.from(document.getElementsByClassName('blue-pawn'));
  for (let i = 1; i <= allBluePawns.length; i += 1) {
    allBluePawns[i - 1].addEventListener('click', (event) => {
      if (document.getElementById('board-blue-base-1').children.length > 0 && document.getElementById('board-blue-base-2').children.length > 0 && document.getElementById('board-blue-base-3').children.length > 0 && document.getElementById('board-blue-base-4').children.length > 0) {
        if (diceResult === 1 || diceResult === 6) {
          let newB = 'b' + i;
          let newBoardStartPos = 'board-pos-' + setup.initialPosition[0];
          document.getElementById(newBoardStartPos).appendChild (document.getElementById(newB));
        }
      }
    });
  }
}

// function bluePawnMovement() {
//   const allBluePawns = Array.from(document.getElementsByClassName('blue-pawn'));
//   for (let i = 0; i < allBluePawns.length; i += 1) {
//     allBluePawns[i].addEventListener('click', (event) => {
//       // function moving () {
        
//       // }
//       console.log('blue', event.target);
//     });
//   }
// }

// function yellowPawnMovement() {
//   const allYellowPawns = Array.from(document.getElementsByClassName('yellow-pawn'));
//   for (let i = 0; i < allYellowPawns.length; i += 1) {
//     allYellowPawns[i].addEventListener('click', (event) => {
//       // function moving () {
        
//       // }
//       console.log('red', event.target);
//     });
//   }
// }

// function greenPawnMovement() {
//   const allGreenPawns = Array.from(document.getElementsByClassName('green-pawn'));
//   for (let i = 0; i < allGreenPawns.length; i += 1) {
//     allGreenPawns[i].addEventListener('click', (event) => {
//       // function moving () {
        
//       // }
//       console.log('red', event.target);
//     });
//   }
// }

// function redPawnMovement() {
//   const allRedPawns = Array.from(document.getElementsByClassName('Red-pawn'));
//   for (let i = 0; i < allRedPawns.length; i += 1) {
//     allRedPawns[i].addEventListener('click', (event) => {
//       // function moving () {
        
//       // }
//       console.log('red', event.target);
//     });
//   }
// }
