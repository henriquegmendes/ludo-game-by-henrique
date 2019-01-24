const setup = {
  colors: ['blue', 'yellow', 'green', 'red'],
  initialPosition: [21, 4, 55, 38],
  finalPosition: [17, 68, 51, 34],
  finishLine: [25, 76, 59, 42]
};
const blueWinMessage = document.getElementById('blue-win-message');
const yellowWinMessage = document.getElementById('yellow-win-message');
const greenWinMessage = document.getElementById('green-win-message');
const redWinMessage = document.getElementById('red-win-message');
let blue1InitialPosition = setup.initialPosition[0];
let blue2InitialPosition = setup.initialPosition[0];
let blue3InitialPosition = setup.initialPosition[0];
let blue4InitialPosition = setup.initialPosition[0];
let yellow1InitialPosition = setup.initialPosition[1];
let yellow2InitialPosition = setup.initialPosition[1];
let yellow3InitialPosition = setup.initialPosition[1];
let yellow4InitialPosition = setup.initialPosition[1];
let green1InitialPosition = setup.initialPosition[2];
let green2InitialPosition = setup.initialPosition[2];
let green3InitialPosition = setup.initialPosition[2];
let green4InitialPosition = setup.initialPosition[2];
let red1InitialPosition = setup.initialPosition[3];
let red2InitialPosition = setup.initialPosition[3];
let red3InitialPosition = setup.initialPosition[3];
let red4InitialPosition = setup.initialPosition[3];
let blue1NewPosition = 'board-pos-' + blue1InitialPosition;
let blue2NewPosition = 'board-pos-' + blue2InitialPosition;
let blue3NewPosition = 'board-pos-' + blue3InitialPosition;
let blue4NewPosition = 'board-pos-' + blue4InitialPosition;
let yellow1NewPosition = 'board-pos-' + yellow1InitialPosition;
let yellow2NewPosition = 'board-pos-' + yellow2InitialPosition;
let yellow3NewPosition = 'board-pos-' + yellow3InitialPosition;
let yellow4NewPosition = 'board-pos-' + yellow4InitialPosition;
let green1NewPosition = 'board-pos-' + green1InitialPosition;
let green2NewPosition = 'board-pos-' + green2InitialPosition;
let green3NewPosition = 'board-pos-' + green3InitialPosition;
let green4NewPosition = 'board-pos-' + green4InitialPosition;
let red1NewPosition = 'board-pos-' + red1InitialPosition;
let red2NewPosition = 'board-pos-' + red2InitialPosition;
let red3NewPosition = 'board-pos-' + red3InitialPosition;
let red4NewPosition = 'board-pos-' + red4InitialPosition;
let clickBlue1 = 0;
let clickBlue2 = 0;
let clickBlue3 = 0;
let clickBlue4 = 0;
let clickYellow1 = 0;
let clickYellow2 = 0;
let clickYellow3 = 0;
let clickYellow4 = 0;
let clickGreen1 = 0;
let clickGreen2 = 0;
let clickGreen3 = 0;
let clickGreen4 = 0;
let clickRed1 = 0;
let clickRed2 = 0;
let clickRed3 = 0;
let clickRed4 = 0;


// BLUE TEAM'S MOVEMENT FUNCTIONS

function blue1MovementCondition() {
  if (document.getElementById('board-blue-base-1').children.length === 0) {
    moveBlue1();
  }
  if (document.getElementById('board-blue-base-1').children.length > 0 && diceResult === 1 || document.getElementById('board-blue-base-1').children.length > 0 && diceResult === 6) {
    document.getElementById(blue1NewPosition).appendChild(document.getElementById('b1'));
  }
}

function blue2MovementCondition() {
  if (document.getElementById('board-blue-base-2').children.length === 0) {
    moveBlue2();
  }
  if (document.getElementById('board-blue-base-2').children.length > 0 && diceResult === 1 || document.getElementById('board-blue-base-2').children.length > 0 && diceResult === 6) {
    document.getElementById(blue2NewPosition).appendChild(document.getElementById('b2'));
  }
}

function blue3MovementCondition() {
  if (document.getElementById('board-blue-base-3').children.length === 0) {
    moveBlue3();
  }
  if (document.getElementById('board-blue-base-3').children.length > 0 && diceResult === 1 || document.getElementById('board-blue-base-3').children.length > 0 && diceResult === 6) {
    document.getElementById(blue3NewPosition).appendChild(document.getElementById('b3'));
  }
}

function blue4MovementCondition() {
  if (document.getElementById('board-blue-base-4').children.length === 0) {
    moveBlue4();
  }
  if (document.getElementById('board-blue-base-4').children.length > 0 && diceResult === 1 || document.getElementById('board-blue-base-4').children.length > 0 && diceResult === 6) {
    document.getElementById(blue4NewPosition).appendChild(document.getElementById('b4'));
  }
}

function blue1ResetBoardCount() {
  if (blue1InitialPosition === 69) {
    blue1InitialPosition = 1;
    blue1NewPosition = 'board-pos-' + blue1InitialPosition;
  } else if (blue1InitialPosition === 70) {
    blue1InitialPosition = 2;
    blue1NewPosition = 'board-pos-' + blue1InitialPosition;
  } else if (blue1InitialPosition === 71) {
    blue1InitialPosition = 3;
    blue1NewPosition = 'board-pos-' + blue1InitialPosition;
  } else if (blue1InitialPosition === 72) {
    blue1InitialPosition = 4;
    blue1NewPosition = 'board-pos-' + blue1InitialPosition;
  } else if (blue1InitialPosition === 73) {
    blue1InitialPosition = 5;
    blue1NewPosition = 'board-pos-' + blue1InitialPosition;
  } else if (blue1InitialPosition === 74) {
    blue1InitialPosition = 6;
    blue1NewPosition = 'board-pos-' + blue1InitialPosition;
  }
}

function blue2ResetBoardCount() {
  if (blue2InitialPosition === 69) {
    blue2InitialPosition = 1;
    blue2NewPosition = 'board-pos-' + blue2InitialPosition;
  } else if (blue2InitialPosition === 70) {
    blue2InitialPosition = 2;
    blue2NewPosition = 'board-pos-' + blue2InitialPosition;
  } else if (blue2InitialPosition === 71) {
    blue2InitialPosition = 3;
    blue2NewPosition = 'board-pos-' + blue2InitialPosition;
  } else if (blue2InitialPosition === 72) {
    blue2InitialPosition = 4;
    blue2NewPosition = 'board-pos-' + blue2InitialPosition;
  } else if (blue2InitialPosition === 73) {
    blue2InitialPosition = 5;
    blue2NewPosition = 'board-pos-' + blue2InitialPosition;
  } else if (blue2InitialPosition === 74) {
    blue2InitialPosition = 6;
    blue2NewPosition = 'board-pos-' + blue2InitialPosition;
  }
}

function blue3ResetBoardCount() {
  if (blue3InitialPosition === 69) {
    blue3InitialPosition = 1;
    blue3NewPosition = 'board-pos-' + blue3InitialPosition;
  } else if (blue3InitialPosition === 70) {
    blue3InitialPosition = 2;
    blue3NewPosition = 'board-pos-' + blue3InitialPosition;
  } else if (blue3InitialPosition === 71) {
    blue3InitialPosition = 3;
    blue3NewPosition = 'board-pos-' + blue3InitialPosition;
  } else if (blue3InitialPosition === 72) {
    blue3InitialPosition = 4;
    blue3NewPosition = 'board-pos-' + blue3InitialPosition;
  } else if (blue3InitialPosition === 73) {
    blue3InitialPosition = 5;
    blue3NewPosition = 'board-pos-' + blue3InitialPosition;
  } else if (blue3InitialPosition === 74) {
    blue3InitialPosition = 6;
    blue3NewPosition = 'board-pos-' + blue3InitialPosition;
  }
}

function blue4ResetBoardCount() {
  if (blue4InitialPosition === 69) {
    blue4InitialPosition = 1;
    blue4NewPosition = 'board-pos-' + blue4InitialPosition;
  } else if (blue4InitialPosition === 70) {
    blue4InitialPosition = 2;
    blue4NewPosition = 'board-pos-' + blue4InitialPosition;
  } else if (blue4InitialPosition === 71) {
    blue4InitialPosition = 3;
    blue4NewPosition = 'board-pos-' + blue4InitialPosition;
  } else if (blue4InitialPosition === 72) {
    blue4InitialPosition = 4;
    blue4NewPosition = 'board-pos-' + blue4InitialPosition;
  } else if (blue4InitialPosition === 73) {
    blue4InitialPosition = 5;
    blue4NewPosition = 'board-pos-' + blue4InitialPosition;
  } else if (blue4InitialPosition === 74) {
    blue4InitialPosition = 6;
    blue4NewPosition = 'board-pos-' + blue4InitialPosition;
  }
}

function blue1FinalPath() {
  if (clickBlue1 > 10 && blue1InitialPosition === 18) {
    blue1NewPosition = 'board-blue-' + blue1InitialPosition;
  } else if (clickBlue1 > 10 && blue1InitialPosition === 19) {
    blue1NewPosition = 'board-blue-' + blue1InitialPosition;
  } else if (clickBlue1 > 10 && blue1InitialPosition === 20) {
    blue1NewPosition = 'board-blue-' + blue1InitialPosition;
  } else if (clickBlue1 > 10 && blue1InitialPosition === 21) {
    blue1NewPosition = 'board-blue-' + blue1InitialPosition;
  } else if (clickBlue1 > 10 && blue1InitialPosition === 22) {
    blue1NewPosition = 'board-blue-' + blue1InitialPosition;
  } else if (clickBlue1 > 10 && blue1InitialPosition === 23) {
    blue1NewPosition = 'board-blue-' + blue1InitialPosition;
  } else if (clickBlue1 > 10 && blue1InitialPosition === 24) {
    blue1NewPosition = 'board-blue-' + blue1InitialPosition;
  }
}

function blue2FinalPath() {
  if (clickBlue2 > 10 && blue2InitialPosition === 18) {
    blue2NewPosition = 'board-blue-' + blue2InitialPosition;
  } else if (clickBlue2 > 10 && blue2InitialPosition === 19) {
    blue2NewPosition = 'board-blue-' + blue2InitialPosition;
  } else if (clickBlue2 > 10 && blue2InitialPosition === 20) {
    blue2NewPosition = 'board-blue-' + blue2InitialPosition;
  } else if (clickBlue2 > 10 && blue2InitialPosition === 21) {
    blue2NewPosition = 'board-blue-' + blue2InitialPosition;
  } else if (clickBlue2 > 10 && blue2InitialPosition === 22) {
    blue2NewPosition = 'board-blue-' + blue2InitialPosition;
  } else if (clickBlue2 > 10 && blue2InitialPosition === 23) {
    blue2NewPosition = 'board-blue-' + blue2InitialPosition;
  } else if (clickBlue2 > 10 && blue2InitialPosition === 24) {
    blue2NewPosition = 'board-blue-' + blue2InitialPosition;
  }
}

function blue3FinalPath() {
  if (clickBlue3 > 10 && blue3InitialPosition === 18) {
    blue3NewPosition = 'board-blue-' + blu3InitialPosition;
  } else if (clickBlue3 > 10 && blu3InitialPosition === 19) {
    blue3NewPosition = 'board-blue-' + blue3InitialPosition;
  } else if (clickBlue3 > 10 && blue3InitialPosition === 20) {
    blue3NewPosition = 'board-blue-' + blue3InitialPosition;
  } else if (clickBlue3 > 10 && blue3InitialPosition === 21) {
    blue3NewPosition = 'board-blue-' + blue3InitialPosition;
  } else if (clickBlue3 > 10 && blue3InitialPosition === 22) {
    blue3NewPosition = 'board-blue-' + blue3InitialPosition;
  } else if (clickBlue3 > 10 && blue3InitialPosition === 23) {
    blue3NewPosition = 'board-blue-' + blue3InitialPosition;
  } else if (clickBlue3 > 10 && blue3InitialPosition === 24) {
    blue3NewPosition = 'board-blue-' + blue3InitialPosition;
  }
}

function blue4FinalPath() {
  if (clickBlue4 > 10 && blue4InitialPosition === 18) {
    blue4NewPosition = 'board-blue-' + blue4InitialPosition;
  } else if (clickBlue4 > 10 && blue4InitialPosition === 19) {
    blue4NewPosition = 'board-blue-' + blue4InitialPosition;
  } else if (clickBlue4 > 10 && blue4InitialPosition === 20) {
    blue4NewPosition = 'board-blue-' + blue4InitialPosition;
  } else if (clickBlue4 > 10 && blue4InitialPosition === 21) {
    blue4NewPosition = 'board-blue-' + blue4InitialPosition;
  } else if (clickBlue4 > 10 && blue4InitialPosition === 22) {
    blue4NewPosition = 'board-blue-' + blue4InitialPosition;
  } else if (clickBlue4 > 10 && blue4InitialPosition === 23) {
    blue4NewPosition = 'board-blue-' + blue4InitialPosition;
  } else if (clickBlue4 > 10 && blue4InitialPosition === 24) {
    blue4NewPosition = 'board-blue-' + blue4InitialPosition;
  }
}

function moveBlue1() {
  if (blue1NewPosition.search('blue') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-blue-25').appendChild(document.getElementById('b1'));
    }
    return;
  }
  clickBlue1 += 1;
  blue1InitialPosition += diceResult;
  blue1NewPosition = 'board-pos-' + blue1InitialPosition;
  blue1ResetBoardCount();
  blue1FinalPath();
  document.getElementById(blue1NewPosition).appendChild(document.getElementById('b1'));
  diceResult = 0;
}

function moveBlue2() {
  if (blue2NewPosition.search('blue') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-blue-25').appendChild(document.getElementById('b2'));
    }
    return;
  }
  clickBlue2 += 1;
  blue2InitialPosition += diceResult;
  blue2NewPosition = 'board-pos-' + blue2InitialPosition;
  blue2ResetBoardCount();
  blue2FinalPath();
  document.getElementById(blue2NewPosition).appendChild(document.getElementById('b2'));
  diceResult = 0;
}

function moveBlue3() {
  if (blue3NewPosition.search('blue') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-blue-25').appendChild(document.getElementById('b3'));
    }
    return;
  }
  clickBlue3 += 1;
  blue3InitialPosition += diceResult;
  blue3NewPosition = 'board-pos-' + blue3InitialPosition;
  blue3ResetBoardCount();
  blue3FinalPath();
  document.getElementById(blue3NewPosition).appendChild(document.getElementById('b3'));
  diceResult = 0;
}

function moveBlue4() {
  if (blue4NewPosition.search('blue') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-blue-25').appendChild(document.getElementById('b4'));
    }
    return;
  }
  clickBlue4 += 1;
  blue4InitialPosition += diceResult;
  blue4NewPosition = 'board-pos-' + blue4InitialPosition;
  blue4ResetBoardCount();
  blue4FinalPath();
  document.getElementById(blue4NewPosition).appendChild(document.getElementById('b4'));
  diceResult = 0;
}


// YELLOW TEAM'S MOVEMENT FUNCTIONS

function yellow1MovementCondition() {
  if (document.getElementById('board-yellow-base-1').children.length === 0) {
    moveYellow1();
  }
  if (document.getElementById('board-yellow-base-1').children.length > 0 && diceResult === 1 || document.getElementById('board-yellow-base-1').children.length > 0 && diceResult === 6) {
    document.getElementById(yellow1NewPosition).appendChild(document.getElementById('y1'));
  }
}

function yellow2MovementCondition() {
  if (document.getElementById('board-yellow-base-2').children.length === 0) {
    moveYellow2();
  }
  if (document.getElementById('board-yellow-base-2').children.length > 0 && diceResult === 1 || document.getElementById('board-yellow-base-2').children.length > 0 && diceResult === 6) {
    document.getElementById(yellow2NewPosition).appendChild(document.getElementById('y2'));
  }
}

function yellow3MovementCondition() {
  if (document.getElementById('board-yellow-base-3').children.length === 0) {
    moveYellow3();
  }
  if (document.getElementById('board-yellow-base-3').children.length > 0 && diceResult === 1 || document.getElementById('board-yellow-base-3').children.length > 0 && diceResult === 6) {
    document.getElementById(yellow3NewPosition).appendChild(document.getElementById('y3'));
  }
}

function yellow4MovementCondition() {
  if (document.getElementById('board-yellow-base-4').children.length === 0) {
    moveYellow4();
  }
  if (document.getElementById('board-yellow-base-4').children.length > 0 && diceResult === 1 || document.getElementById('board-yellow-base-4').children.length > 0 && diceResult === 6) {
    document.getElementById(yellow4NewPosition).appendChild(document.getElementById('y4'));
  }
}

function yellow1FinalPath() {
  if (clickYellow1 > 10 && yellow1InitialPosition === 69) {
    yellow1NewPosition = 'board-yellow-' + yellow1InitialPosition;
  } else if (clickYellow1 > 10 && yellow1InitialPosition === 70) {
    yellow1NewPosition = 'board-yellow-' + yellow1InitialPosition;
  } else if (clickYellow1 > 10 && yellow1InitialPosition === 71) {
    yellow1NewPosition = 'board-yellow-' + yellow1InitialPosition;
  } else if (clickYellow1 > 10 && yellow1InitialPosition === 72) {
    yellow1NewPosition = 'board-yellow-' + yellow1InitialPosition;
  } else if (clickYellow1 > 10 && yellow1InitialPosition === 73) {
    yellow1NewPosition = 'board-yellow-' + yellow1InitialPosition;
  } else if (clickYellow1 > 10 && yellow1InitialPosition === 74) {
    yellow1NewPosition = 'board-yellow-' + yellow1InitialPosition;
  } else if (clickYellow1 > 10 && yellow1InitialPosition === 75) {
    yellow1NewPosition = 'board-yellow-' + yellow1InitialPosition;
  }
}

function yellow2FinalPath() {
  if (clickYellow2 > 10 && yellow2InitialPosition === 69) {
    yellow2NewPosition = 'board-yellow-' + yellow2InitialPosition;
  } else if (clickYellow2 > 10 && yellow2InitialPosition === 70) {
    yellow2NewPosition = 'board-yellow-' + yellow2InitialPosition;
  } else if (clickYellow2 > 10 && yellow2InitialPosition === 71) {
    yellow2NewPosition = 'board-yellow-' + yellow2InitialPosition;
  } else if (clickYellow2 > 10 && yellow2InitialPosition === 72) {
    yellow2NewPosition = 'board-yellow-' + yellow2InitialPosition;
  } else if (clickYellow2 > 10 && yellow2InitialPosition === 73) {
    yellow2NewPosition = 'board-yellow-' + yellow2InitialPosition;
  } else if (clickYellow2 > 10 && yellow2InitialPosition === 74) {
    yellow2NewPosition = 'board-yellow-' + yellow2InitialPosition;
  } else if (clickYellow2 > 10 && yellow2InitialPosition === 75) {
    yellow2NewPosition = 'board-yellow-' + yellow2InitialPosition;
  }
}

function yellow3FinalPath() {
  if (clickYellow3 > 10 && yellow3InitialPosition === 69) {
    yellow3NewPosition = 'board-yellow-' + yellow3InitialPosition;
  } else if (clickYellow3 > 10 && yellow3InitialPosition === 70) {
    yellow3NewPosition = 'board-yellow-' + yellow3InitialPosition;
  } else if (clickYellow3 > 10 && yellow3InitialPosition === 71) {
    yellow3NewPosition = 'board-yellow-' + yellow3InitialPosition;
  } else if (clickYellow3 > 10 && yellow3InitialPosition === 72) {
    yellow3NewPosition = 'board-yellow-' + yellow3InitialPosition;
  } else if (clickYellow3 > 10 && yellow3InitialPosition === 73) {
    yellow3NewPosition = 'board-yellow-' + yellow3InitialPosition;
  } else if (clickYellow3 > 10 && yellow3InitialPosition === 74) {
    yellow3NewPosition = 'board-yellow-' + yellow3InitialPosition;
  } else if (clickYellow3 > 10 && yellow3InitialPosition === 75) {
    yellow3NewPosition = 'board-yellow-' + yellow3InitialPosition;
  }
}

function yellow4FinalPath() {
  if (clickYellow4 > 10 && yellow4InitialPosition === 69) {
    yellow4NewPosition = 'board-yellow-' + yellow4InitialPosition;
  } else if (clickYellow4 > 10 && yellow4InitialPosition === 70) {
    yellow4NewPosition = 'board-yellow-' + yellow4InitialPosition;
  } else if (clickYellow4 > 10 && yellow4InitialPosition === 71) {
    yellow4NewPosition = 'board-yellow-' + yellow4InitialPosition;
  } else if (clickYellow4 > 10 && yellow4InitialPosition === 72) {
    yellow4NewPosition = 'board-yellow-' + yellow4InitialPosition;
  } else if (clickYellow4 > 10 && yellow4InitialPosition === 73) {
    yellow4NewPosition = 'board-yellow-' + yellow4InitialPosition;
  } else if (clickYellow4 > 10 && yellow4InitialPosition === 74) {
    yellow4NewPosition = 'board-yellow-' + yellow4InitialPosition;
  } else if (clickYellow4 > 10 && yellow4InitialPosition === 75) {
    yellow4NewPosition = 'board-yellow-' + yellow4InitialPosition;
  }
}

function moveYellow1() {
  if (yellow1NewPosition.search('yellow') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-yellow-76').appendChild(document.getElementById('y1'));
    }
    return;
  }
  clickYellow1 += 1;
  yellow1InitialPosition += diceResult;
  yellow1NewPosition = 'board-pos-' + yellow1InitialPosition;
  yellow1FinalPath();
  document.getElementById(yellow1NewPosition).appendChild(document.getElementById('y1'));
  diceResult = 0;
}

function moveYellow2() {
  if (yellow2NewPosition.search('yellow') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-yellow-76').appendChild(document.getElementById('y2'));
    }
    return;
  }
  clickYellow2 += 1;
  yellow2InitialPosition += diceResult;
  yellow2NewPosition = 'board-pos-' + yellow2InitialPosition;
  yellow2FinalPath();
  document.getElementById(yellow2NewPosition).appendChild(document.getElementById('y2'));
  diceResult = 0;
}

function moveYellow3() {
  if (yellow3NewPosition.search('yellow') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-yellow-76').appendChild(document.getElementById('y3'));
    }
    return;
  }
  clickYellow3 += 1;
  yellow3InitialPosition += diceResult;
  yellow3NewPosition = 'board-pos-' + yellow3InitialPosition;
  yellow3FinalPath();
  document.getElementById(yellow3NewPosition).appendChild(document.getElementById('y3'));
  diceResult = 0;
}

function moveYellow4() {
  if (yellow4NewPosition.search('yellow') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-yellow-76').appendChild(document.getElementById('y4'));
    }
    return;
  }
  clickYellow4 += 1;
  yellow4InitialPosition += diceResult;
  yellow4NewPosition = 'board-pos-' + yellow4InitialPosition;
  yellow4FinalPath();
  document.getElementById(yellow4NewPosition).appendChild(document.getElementById('y4'));
  diceResult = 0;
}


// GREEN TEAM'S MOVEMENT FUNCTIONS

function green1MovementCondition() {
  if (document.getElementById('board-green-base-1').children.length === 0) {
    moveGreen1();
  }
  if (document.getElementById('board-green-base-1').children.length > 0 && diceResult === 1 || document.getElementById('board-green-base-1').children.length > 0 && diceResult === 6) {
    document.getElementById(green1NewPosition).appendChild(document.getElementById('g1'));
  }
}

function green2MovementCondition() {
  if (document.getElementById('board-green-base-2').children.length === 0) {
    moveGreen2();
  }
  if (document.getElementById('board-green-base-2').children.length > 0 && diceResult === 1 || document.getElementById('board-green-base-2').children.length > 0 && diceResult === 6) {
    document.getElementById(green2NewPosition).appendChild(document.getElementById('g2'));
  }
}

function green3MovementCondition() {
  if (document.getElementById('board-green-base-3').children.length === 0) {
    moveGreen3();
  }
  if (document.getElementById('board-green-base-3').children.length > 0 && diceResult === 1 || document.getElementById('board-green-base-3').children.length > 0 && diceResult === 6) {
    document.getElementById(green3NewPosition).appendChild(document.getElementById('g3'));
  }
}

function green4MovementCondition() {
  if (document.getElementById('board-green-base-4').children.length === 0) {
    moveGreen4();
  }
  if (document.getElementById('board-green-base-4').children.length > 0 && diceResult === 1 || document.getElementById('board-green-base-4').children.length > 0 && diceResult === 6) {
    document.getElementById(green4NewPosition).appendChild(document.getElementById('g4'));
  }
}

function green1ResetBoardCount() {
  if (green1InitialPosition === 69) {
    green1InitialPosition = 1;
    green1NewPosition = 'board-pos-' + green1InitialPosition;
  } else if (green1InitialPosition === 70) {
    green1InitialPosition = 2;
    green1NewPosition = 'board-pos-' + green1InitialPosition;
  } else if (green1InitialPosition === 71) {
    green1InitialPosition = 3;
    green1NewPosition = 'board-pos-' + green1InitialPosition;
  } else if (green1InitialPosition === 72) {
    green1InitialPosition = 4;
    green1NewPosition = 'board-pos-' + green1InitialPosition;
  } else if (green1InitialPosition === 73) {
    green1InitialPosition = 5;
    green1NewPosition = 'board-pos-' + green1InitialPosition;
  } else if (green1InitialPosition === 74) {
    green1InitialPosition = 6;
    green1NewPosition = 'board-pos-' + green1InitialPosition;
  }
}

function green2ResetBoardCount() {
  if (green2InitialPosition === 69) {
    green2InitialPosition = 1;
    green2NewPosition = 'board-pos-' + green2InitialPosition;
  } else if (green2InitialPosition === 70) {
    green2InitialPosition = 2;
    green2NewPosition = 'board-pos-' + green2InitialPosition;
  } else if (green2InitialPosition === 71) {
    green2InitialPosition = 3;
    green2NewPosition = 'board-pos-' + green2InitialPosition;
  } else if (green2InitialPosition === 72) {
    green2InitialPosition = 4;
    green2NewPosition = 'board-pos-' + green2InitialPosition;
  } else if (green2InitialPosition === 73) {
    green2InitialPosition = 5;
    green2NewPosition = 'board-pos-' + green2InitialPosition;
  } else if (green2InitialPosition === 74) {
    green2InitialPosition = 6;
    green2NewPosition = 'board-pos-' + green2InitialPosition;
  }
}

function green3ResetBoardCount() {
  if (green3InitialPosition === 69) {
    green3InitialPosition = 1;
    green3NewPosition = 'board-pos-' + green3InitialPosition;
  } else if (green3InitialPosition === 70) {
    green3InitialPosition = 2;
    green3NewPosition = 'board-pos-' + green3InitialPosition;
  } else if (green3InitialPosition === 71) {
    green3InitialPosition = 3;
    green3NewPosition = 'board-pos-' + green3InitialPosition;
  } else if (green3InitialPosition === 72) {
    green3InitialPosition = 4;
    green3NewPosition = 'board-pos-' + green3InitialPosition;
  } else if (green3InitialPosition === 73) {
    green3InitialPosition = 5;
    green3NewPosition = 'board-pos-' + green3InitialPosition;
  } else if (green3InitialPosition === 74) {
    green3InitialPosition = 6;
    green3NewPosition = 'board-pos-' + green3InitialPosition;
  }
}

function green4ResetBoardCount() {
  if (green4InitialPosition === 69) {
    green4InitialPosition = 1;
    green4NewPosition = 'board-pos-' + green4InitialPosition;
  } else if (green4InitialPosition === 70) {
    green4InitialPosition = 2;
    green4NewPosition = 'board-pos-' + green4InitialPosition;
  } else if (green4InitialPosition === 71) {
    green4InitialPosition = 3;
    green4NewPosition = 'board-pos-' + green4InitialPosition;
  } else if (green4InitialPosition === 72) {
    green4InitialPosition = 4;
    green4NewPosition = 'board-pos-' + green4InitialPosition;
  } else if (green4InitialPosition === 73) {
    green4InitialPosition = 5;
    green4NewPosition = 'board-pos-' + green4InitialPosition;
  } else if (green4InitialPosition === 74) {
    green4InitialPosition = 6;
    green4NewPosition = 'board-pos-' + green4InitialPosition;
  }
}

function green1FinalPath() {
  if (clickGreen1 > 10 && green1InitialPosition === 52) {
    green1NewPosition = 'board-green-' + green1InitialPosition;
  } else if (clickGreen1 > 10 && green1InitialPosition === 53) {
    green1NewPosition = 'board-green-' + green1InitialPosition;
  } else if (clickGreen1 > 10 && green1InitialPosition === 54) {
    green1NewPosition = 'board-green-' + green1InitialPosition;
  } else if (clickGreen1 > 10 && green1InitialPosition === 55) {
    green1NewPosition = 'board-green-' + green1InitialPosition;
  } else if (clickGreen1 > 10 && green1InitialPosition === 56) {
    green1NewPosition = 'board-green-' + green1InitialPosition;
  } else if (clickGreen1 > 10 && green1InitialPosition === 57) {
    green1NewPosition = 'board-green-' + green1InitialPosition;
  } else if (clickGreen1 > 10 && green1InitialPosition === 58) {
    green1NewPosition = 'board-green-' + green1InitialPosition;
  }
}

function green2FinalPath() {
  if (clickGreen2 > 10 && green2InitialPosition === 52) {
    green2NewPosition = 'board-green-' + green2InitialPosition;
  } else if (clickGreen2 > 10 && green2InitialPosition === 53) {
    green2NewPosition = 'board-green-' + green2InitialPosition;
  } else if (clickGreen2 > 10 && green2InitialPosition === 54) {
    green2NewPosition = 'board-green-' + green2InitialPosition;
  } else if (clickGreen2 > 10 && green2InitialPosition === 55) {
    green2NewPosition = 'board-green-' + green2InitialPosition;
  } else if (clickGreen2 > 10 && green2InitialPosition === 56) {
    green2NewPosition = 'board-green-' + green2InitialPosition;
  } else if (clickGreen2 > 10 && green2InitialPosition === 57) {
    green2NewPosition = 'board-green-' + green2InitialPosition;
  } else if (clickGreen2 > 10 && green2InitialPosition === 58) {
    green2NewPosition = 'board-green-' + green2InitialPosition;
  }
}

function green3FinalPath() {
  if (clickGreen3 > 10 && green3InitialPosition === 52) {
    green3NewPosition = 'board-green-' + green3InitialPosition;
  } else if (clickGreen3 > 10 && green3InitialPosition === 53) {
    green3NewPosition = 'board-green-' + green3InitialPosition;
  } else if (clickGreen3 > 10 && green3InitialPosition === 54) {
    green3NewPosition = 'board-green-' + green3InitialPosition;
  } else if (clickGreen3 > 10 && green3InitialPosition === 55) {
    green3NewPosition = 'board-green-' + green3InitialPosition;
  } else if (clickGreen3 > 10 && green3InitialPosition === 56) {
    green3NewPosition = 'board-green-' + green3InitialPosition;
  } else if (clickGreen3 > 10 && green3InitialPosition === 57) {
    green3NewPosition = 'board-green-' + green3InitialPosition;
  } else if (clickGreen3 > 10 && green3InitialPosition === 58) {
    green3NewPosition = 'board-green-' + green3InitialPosition;
  }
}

function green4FinalPath() {
  if (clickGreen4 > 10 && green4InitialPosition === 52) {
    green4NewPosition = 'board-green-' + green4InitialPosition;
  } else if (clickGreen4 > 10 && green4InitialPosition === 53) {
    green4NewPosition = 'board-green-' + green4InitialPosition;
  } else if (clickGreen4 > 10 && green4InitialPosition === 54) {
    green4NewPosition = 'board-green-' + green4InitialPosition;
  } else if (clickGreen4 > 10 && green4InitialPosition === 55) {
    green4NewPosition = 'board-green-' + green4InitialPosition;
  } else if (clickGreen4 > 10 && green4InitialPosition === 56) {
    green4NewPosition = 'board-green-' + green4InitialPosition;
  } else if (clickGreen4 > 10 && green4InitialPosition === 57) {
    green4NewPosition = 'board-green-' + green4InitialPosition;
  } else if (clickGreen4 > 10 && green4InitialPosition === 58) {
    green4NewPosition = 'board-green-' + green4InitialPosition;
  }
}

function moveGreen1() {
  if (green1NewPosition.search('green') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-green-59').appendChild(document.getElementById('g1'));
    }
    return;
  }
  clickGreen1 += 1;
  green1InitialPosition += diceResult;
  green1NewPosition = 'board-pos-' + green1InitialPosition;
  green1ResetBoardCount();
  green1FinalPath();
  document.getElementById(green1NewPosition).appendChild(document.getElementById('g1'));
  diceResult = 0;
}

function moveGreen2() {
  if (green2NewPosition.search('green') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-green-59').appendChild(document.getElementById('g2'));
    }
    return;
  }
  clickGreen2 += 1;
  green2InitialPosition += diceResult;
  green2NewPosition = 'board-pos-' + green2InitialPosition;
  green2ResetBoardCount();
  green2FinalPath();
  document.getElementById(green2NewPosition).appendChild(document.getElementById('g2'));
  diceResult = 0;
}

function moveGreen3() {
  if (green3NewPosition.search('green') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-green-59').appendChild(document.getElementById('g3'));
    }
    return;
  }
  clickGreen3 += 1;
  green3InitialPosition += diceResult;
  green3NewPosition = 'board-pos-' + green3InitialPosition;
  green3ResetBoardCount();
  green3FinalPath();
  document.getElementById(green3NewPosition).appendChild(document.getElementById('g3'));
  diceResult = 0;
}

function moveGreen4() {
  if (green4NewPosition.search('green') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-green-59').appendChild(document.getElementById('g4'));
    }
    return;
  }
  clickGreen4 += 1;
  green4InitialPosition += diceResult;
  green4NewPosition = 'board-pos-' + green4InitialPosition;
  green4ResetBoardCount();
  green4FinalPath();
  document.getElementById(green1NewPosition).appendChild(document.getElementById('g4'));
  diceResult = 0;
}


// RED TEAM'S MOVEMENT FUNCTIONS

function red1MovementCondition() {
  if (document.getElementById('board-red-base-1').children.length === 0) {
    moveRed1();
  }
  if (document.getElementById('board-red-base-1').children.length > 0 && diceResult === 1 || document.getElementById('board-red-base-1').children.length > 0 && diceResult === 6) {
    document.getElementById(red1NewPosition).appendChild(document.getElementById('r1'));
  }
}

function red2MovementCondition() {
  if (document.getElementById('board-red-base-2').children.length === 0) {
    moveRed2();
  }
  if (document.getElementById('board-red-base-2').children.length > 0 && diceResult === 1 || document.getElementById('board-red-base-2').children.length > 0 && diceResult === 6) {
    document.getElementById(red2NewPosition).appendChild(document.getElementById('r2'));
  }
}

function red3MovementCondition() {
  if (document.getElementById('board-red-base-3').children.length === 0) {
    moveRed3();
  }
  if (document.getElementById('board-red-base-3').children.length > 0 && diceResult === 1 || document.getElementById('board-red-base-3').children.length > 0 && diceResult === 6) {
    document.getElementById(red3NewPosition).appendChild(document.getElementById('r3'));
  }
}

function red4MovementCondition() {
  if (document.getElementById('board-red-base-4').children.length === 0) {
    moveRed4();
  }
  if (document.getElementById('board-red-base-4').children.length > 0 && diceResult === 1 || document.getElementById('board-red-base-4').children.length > 0 && diceResult === 6) {
    document.getElementById(red4NewPosition).appendChild(document.getElementById('r4'));
  }
}

function red1ResetBoardCount() {
  if (red1InitialPosition === 69) {
    red1InitialPosition = 1;
    red1NewPosition = 'board-pos-' + red1InitialPosition;
  } else if (red1InitialPosition === 70) {
    red1InitialPosition = 2;
    red1NewPosition = 'board-pos-' + red1InitialPosition;
  } else if (red1InitialPosition === 71) {
    red1InitialPosition = 3;
    red1NewPosition = 'board-pos-' + red1InitialPosition;
  } else if (red1InitialPosition === 72) {
    red1InitialPosition = 4;
    red1NewPosition = 'board-pos-' + red1InitialPosition;
  } else if (red1InitialPosition === 73) {
    red1InitialPosition = 5;
    red1NewPosition = 'board-pos-' + red1InitialPosition;
  } else if (red1InitialPosition === 74) {
    red1InitialPosition = 6;
    red1NewPosition = 'board-pos-' + red1InitialPosition;
  }
}

function red2ResetBoardCount() {
  if (red2InitialPosition === 69) {
    red2InitialPosition = 1;
    red2NewPosition = 'board-pos-' + red2InitialPosition;
  } else if (red2InitialPosition === 70) {
    red2InitialPosition = 2;
    red2NewPosition = 'board-pos-' + red2InitialPosition;
  } else if (red2InitialPosition === 71) {
    red2InitialPosition = 3;
    red2NewPosition = 'board-pos-' + red2InitialPosition;
  } else if (red2InitialPosition === 72) {
    red2InitialPosition = 4;
    red2NewPosition = 'board-pos-' + red2InitialPosition;
  } else if (red2InitialPosition === 73) {
    red2InitialPosition = 5;
    red2NewPosition = 'board-pos-' + red2InitialPosition;
  } else if (red2InitialPosition === 74) {
    red2InitialPosition = 6;
    red2NewPosition = 'board-pos-' + red2InitialPosition;
  }
}

function red3ResetBoardCount() {
  if (red3InitialPosition === 69) {
    red3InitialPosition = 1;
    red3NewPosition = 'board-pos-' + red3InitialPosition;
  } else if (red3InitialPosition === 70) {
    red3InitialPosition = 2;
    red3NewPosition = 'board-pos-' + red3InitialPosition;
  } else if (red3InitialPosition === 71) {
    red3InitialPosition = 3;
    red3NewPosition = 'board-pos-' + red3InitialPosition;
  } else if (red3InitialPosition === 72) {
    red3InitialPosition = 4;
    red3NewPosition = 'board-pos-' + red3InitialPosition;
  } else if (red3InitialPosition === 73) {
    red3InitialPosition = 5;
    red3NewPosition = 'board-pos-' + red3InitialPosition;
  } else if (red3InitialPosition === 74) {
    red3InitialPosition = 6;
    red3NewPosition = 'board-pos-' + red3InitialPosition;
  }
}

function red4ResetBoardCount() {
  if (red4InitialPosition === 69) {
    red4InitialPosition = 1;
    red4NewPosition = 'board-pos-' + red4InitialPosition;
  } else if (red4InitialPosition === 70) {
    red4InitialPosition = 2;
    red4NewPosition = 'board-pos-' + red4InitialPosition;
  } else if (red4InitialPosition === 71) {
    red4InitialPosition = 3;
    red4NewPosition = 'board-pos-' + red4InitialPosition;
  } else if (red4InitialPosition === 72) {
    red4InitialPosition = 4;
    red4NewPosition = 'board-pos-' + red4InitialPosition;
  } else if (red4InitialPosition === 73) {
    red4InitialPosition = 5;
    red4NewPosition = 'board-pos-' + red4InitialPosition;
  } else if (red4InitialPosition === 74) {
    red4InitialPosition = 6;
    red4NewPosition = 'board-pos-' + red4InitialPosition;
  }
}

function red1FinalPath() {
  if (clickRed1 > 10 && red1InitialPosition === 35) {
    red1NewPosition = 'board-red-' + red1InitialPosition;
  } else if (clickRed1 > 10 && red1InitialPosition === 36) {
    red1NewPosition = 'board-red-' + red1InitialPosition;
  } else if (clickRed1 > 10 && red1InitialPosition === 37) {
    red1NewPosition = 'board-red-' + red1InitialPosition;
  } else if (clickRed1 > 10 && red1InitialPosition === 38) {
    red1NewPosition = 'board-red-' + red1InitialPosition;
  } else if (clickRed1 > 10 && red1InitialPosition === 39) {
    red1NewPosition = 'board-red-' + red1InitialPosition;
  } else if (clickRed1 > 10 && red1InitialPosition === 40) {
    red1NewPosition = 'board-red-' + red1InitialPosition;
  } else if (clickRed1 > 10 && red1InitialPosition === 41) {
    red1NewPosition = 'board-red-' + red1InitialPosition;
  }
}

function red2FinalPath() {
  if (clickRed2 > 10 && red2InitialPosition === 35) {
    red2NewPosition = 'board-red-' + red2InitialPosition;
  } else if (clickRed2 > 10 && red2InitialPosition === 36) {
    red2NewPosition = 'board-red-' + red2InitialPosition;
  } else if (clickRed2 > 10 && red2InitialPosition === 37) {
    red2NewPosition = 'board-red-' + red2InitialPosition;
  } else if (clickRed2 > 10 && red2InitialPosition === 38) {
    red2NewPosition = 'board-red-' + red2InitialPosition;
  } else if (clickRed2 > 10 && red2InitialPosition === 39) {
    red2NewPosition = 'board-red-' + red2InitialPosition;
  } else if (clickRed2 > 10 && red2InitialPosition === 40) {
    red2NewPosition = 'board-red-' + red2InitialPosition;
  } else if (clickRed2 > 10 && red2InitialPosition === 41) {
    red2NewPosition = 'board-red-' + red2InitialPosition;
  }
}

function red3FinalPath() {
  if (clickRed3 > 10 && red3InitialPosition === 35) {
    red3NewPosition = 'board-red-' + red3InitialPosition;
  } else if (clickRed3 > 10 && red3InitialPosition === 36) {
    red3NewPosition = 'board-red-' + red3InitialPosition;
  } else if (clickRed3 > 10 && red3InitialPosition === 37) {
    red3NewPosition = 'board-red-' + red3InitialPosition;
  } else if (clickRed3 > 10 && red3InitialPosition === 38) {
    red3NewPosition = 'board-red-' + red3InitialPosition;
  } else if (clickRed3 > 10 && red3InitialPosition === 39) {
    red3NewPosition = 'board-red-' + red3InitialPosition;
  } else if (clickRed3 > 10 && red3InitialPosition === 40) {
    red3NewPosition = 'board-red-' + red3InitialPosition;
  } else if (clickRed3 > 10 && red3InitialPosition === 41) {
    red3NewPosition = 'board-red-' + red3InitialPosition;
  }
}

function red4FinalPath() {
  if (clickRed4 > 10 && red4InitialPosition === 35) {
    red4NewPosition = 'board-red-' + red4InitialPosition;
  } else if (clickRed4 > 10 && red4InitialPosition === 36) {
    red4NewPosition = 'board-red-' + red4InitialPosition;
  } else if (clickRed4 > 10 && red4InitialPosition === 37) {
    red4NewPosition = 'board-red-' + red4InitialPosition;
  } else if (clickRed4 > 10 && red4InitialPosition === 38) {
    red4NewPosition = 'board-red-' + red4InitialPosition;
  } else if (clickRed4 > 10 && red4InitialPosition === 39) {
    red4NewPosition = 'board-red-' + red4InitialPosition;
  } else if (clickRed4 > 10 && red4InitialPosition === 40) {
    red4NewPosition = 'board-red-' + red4InitialPosition;
  } else if (clickRed4 > 10 && red4InitialPosition === 41) {
    red4NewPosition = 'board-red-' + red4InitialPosition;
  }
}

function moveRed1() {
  if (red1NewPosition.search('red') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-red-42').appendChild(document.getElementById('r1'));
    }
    return;
  }
  clickRed1 += 1;
  red1InitialPosition += diceResult;
  red1NewPosition = 'board-pos-' + red1InitialPosition;
  red1ResetBoardCount();
  red1FinalPath();
  document.getElementById(red1NewPosition).appendChild(document.getElementById('r1'));
  diceResult = 0;
}

function moveRed2() {
  if (red2NewPosition.search('red') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-red-42').appendChild(document.getElementById('r2'));
    }
    return;
  }
  clickRed2 += 1;
  red2InitialPosition += diceResult;
  red2NewPosition = 'board-pos-' + red2InitialPosition;
  red2ResetBoardCount();
  red2FinalPath();
  document.getElementById(red2NewPosition).appendChild(document.getElementById('r2'));
  diceResult = 0;
}

function moveRed3() {
  if (red3NewPosition.search('red') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-red-42').appendChild(document.getElementById('r3'));
    }
    return;
  }
  clickRed3 += 1;
  red3InitialPosition += diceResult;
  red3NewPosition = 'board-pos-' + red3InitialPosition;
  red3ResetBoardCount();
  red3FinalPath();
  document.getElementById(red3NewPosition).appendChild(document.getElementById('r3'));
  diceResult = 0;
}

function moveRed4() {
  if (red4NewPosition.search('red') !== -1) {
    if (diceResult === 6) {
      document.getElementById('board-red-42').appendChild(document.getElementById('r4'));
    }
    return;
  }
  clickRed4 += 1;
  red4InitialPosition += diceResult;
  red4NewPosition = 'board-pos-' + red4InitialPosition;
  red4ResetBoardCount();
  red4FinalPath();
  document.getElementById(red4NewPosition).appendChild(document.getElementById('r4'));
  diceResult = 0;
}

function blueEndGame() {
  if (document.getElementById('board-blue-25').children.length === 4) {
    bluePlayButton.style.display = 'none';
    yellowPlayButton.style.display = 'none';
    greenPlayButton.style.display = 'none';
    redPlayButton.style.display = 'none';
    startMessage.style.display = 'none';
    blueMessage.style.display = 'none';
    yellowMessage.style.display = 'none';
    greenMessage.style.display = 'none';
    redMessage.style.display = 'none';
    blueWinMessage.style.display = 'block';
  }
}

function yellowEndGame() {
  if (document.getElementById('board-yellow-76').children.length === 4) {
    bluePlayButton.style.display = 'none';
    yellowPlayButton.style.display = 'none';
    greenPlayButton.style.display = 'none';
    redPlayButton.style.display = 'none';
    startMessage.style.display = 'none';
    blueMessage.style.display = 'none';
    yellowMessage.style.display = 'none';
    greenMessage.style.display = 'none';
    redMessage.style.display = 'none';
    yellowWinMessage.style.display = 'block';
  }
}

function greenEndGame() {
  if (document.getElementById('board-green-59').children.length === 4) {
    bluePlayButton.style.display = 'none';
    yellowPlayButton.style.display = 'none';
    greenPlayButton.style.display = 'none';
    redPlayButton.style.display = 'none';
    startMessage.style.display = 'none';
    blueMessage.style.display = 'none';
    yellowMessage.style.display = 'none';
    greenMessage.style.display = 'none';
    redMessage.style.display = 'none';
    greenWinMessage.style.display = 'block';
  }
}

function redEndGame() {
  if (document.getElementById('board-red-42').children.length === 4) {
    bluePlayButton.style.display = 'none';
    yellowPlayButton.style.display = 'none';
    greenPlayButton.style.display = 'none';
    redPlayButton.style.display = 'none';
    startMessage.style.display = 'none';
    blueMessage.style.display = 'none';
    yellowMessage.style.display = 'none';
    greenMessage.style.display = 'none';
    redMessage.style.display = 'none';
    redWinMessage.style.display = 'block';
  }
}
