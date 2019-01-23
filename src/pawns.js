// function Pawn(color, x) {
//   this.color = color;
//   this.position = x;
// }

// Pawn.prototype.advance = function () {
//   this.position = this.position + diceResult;
// };
const setup = {
  colors: ['blue', 'yellow', 'green', 'red'],
  initialPosition: [21, 4, 55, 38],
  finalPosition: [17, 68, 51, 34],
  finishLine: [25, 76, 59, 42]
};
let initialPosition = setup.initialPosition[0];
let newPosition = 'board-pos-' + initialPosition;
let click = 0;

function blueResetBoardCount() {
  if (initialPosition === 69) {
    initialPosition = 1;
    newPosition = 'board-pos-' + initialPosition;
  } else if (initialPosition === 70) {
    initialPosition = 2;
    newPosition = 'board-pos-' + initialPosition;
  } else if (initialPosition === 71) {
    initialPosition = 3;
    newPosition = 'board-pos-' + initialPosition;
  } else if (initialPosition === 72) {
    initialPosition = 4;
    newPosition = 'board-pos-' + initialPosition;
  } else if (initialPosition === 73) {
    initialPosition = 5;
    newPosition = 'board-pos-' + initialPosition;
  } else if (initialPosition === 74) {
    initialPosition = 6;
    newPosition = 'board-pos-' + initialPosition;
  }
}

function blueFinalPath() {
  if (click > 10 && initialPosition === 18) {
    newPosition = 'board-blue-' + initialPosition;
  } else if (click > 10 && initialPosition === 19) {
    newPosition = 'board-blue-' + initialPosition;
  } else if (click > 10 && initialPosition === 20) {
    newPosition = 'board-blue-' + initialPosition;
  } else if (click > 10 && initialPosition === 21) {
    newPosition = 'board-blue-' + initialPosition;
  } else if (click > 10 && initialPosition === 22) {
    newPosition = 'board-blue-' + initialPosition;
  } else if (click > 10 && initialPosition === 23) {
    newPosition = 'board-blue-' + initialPosition;
  } else if (click > 10 && initialPosition === 24) {
    newPosition = 'board-blue-' + initialPosition;
  }
}

function blue1Finish() {
  if (newPosition.search('blue') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-blue-25').appendChild(document.getElementById('b1'));
    }
    return;
  }
}

function moveBlue1() {
  blue1Finish();
  click += 1;
  initialPosition += diceResult;
  newPosition = 'board-pos-' + initialPosition;
  blueResetBoardCount();
  blueFinalPath();
  document.getElementById(newPosition).appendChild(document.getElementById('b1'));
  diceResult = 0;
}

// function firstMovementBlue () {
//   const allBluePawns = Array.from(document.getElementsByClassName('blue-pawn'));
//   for (let i = 0; i <= allBluePawns.length - 1; i += 1) {
//     allBluePawns[i].addEventListener('click', (event) => {
//       if (document.getElementById('board-blue-base-1').children.length > 0 && document.getElementById('board-blue-base-2').children.length > 0 && document.getElementById('board-blue-base-3').children.length > 0 && document.getElementById('board-blue-base-4').children.length > 0) {
//         diceValue.push(diceResult);
//         if (diceValue[0] === 1 || diceValue[0] === 6) {
//           let newB = 'b' + (i + 1);
//           const newBoardStartPos = 'board-pos-' + setup.initialPosition[0];
//           document.getElementById(newBoardStartPos).appendChild (document.getElementById(newB));
//         }
//       }
//     });
//   }
// }

// function movementBlue () {
//   const allBluePawns = Array.from(document.getElementsByClassName('blue-pawn'));
//   for (let i = 0; i <= allBluePawns.length - 1; i += 1) {
//     allBluePawns[i].addEventListener('click', (event) => {
//       if (document.getElementById('board-pos-21').children.length > 0) {
//         diceValue.push(diceResult);
//       let newB = 'b' + (i + 1);
//       const newPosition = setup.initialPosition[0] + diceResult;
//       const newBoardPos = 'board-pos-' + newPosition;
//       document.getElementById(newBoardPos).appendChild (document.getElementById(newB));
//       }
//     })
//   }
// }

// if(document.getElementById('board-blue-7').children.length === 0) {
//   let j = 1;
//   j += 1
//   diceValue.push(diceResult);
//   let newB = 'b' + (i + 1);
//   let newPos = 0;
//   newPos = newPos + setup.initialPosition[0] + diceValue[j - 1];
//   let newBoardPos = 'board-pos-' + newPos;
//   document.getElementById(newBoardPos).appendChild (document.getElementById(newB));
// }



// if(document.getElementById(newBoardPos).children.length > 0) {
//   newPosition += diceResult;
//   newBoardPos = 'board-pos-' + newPosition;
//   document.getElementById(newBoardPos).appendChild (document.getElementById(newB));
// }

// function firstMovementBlue1 () {
//   const allBluePawns = document.getElementsByClassName('blue-pawn');
//   console.log(allBluePawns);
//   allBluePawns.addEventListener('click', (event) => {
//     console.log(event.currentTarget);
//     if (document.getElementById('board-blue-base-1').children.length > 0 && document.getElementById('board-blue-base-2').children.length > 0 && document.getElementById('board-blue-base-3').children.length > 0 && document.getElementById('board-blue-base-4').children.length > 0) {
//       if (diceResult === 1 || diceResult === 6) {
//         let newB = 'b' + i;
//         const newBoardStartPos = 'board-pos-' + setup.initialPosition[0];
//         document.getElementById(newBoardStartPos).appendChild(document.getElementById('b1'));
//       }
//     }
//   });
// }
