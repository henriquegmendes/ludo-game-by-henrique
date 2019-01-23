const startButton = document.getElementById('button');
const bluePlayButton = document.getElementById('blue-play');
const yellowPlayButton = document.getElementById('yellow-play');
const greenPlayButton = document.getElementById('green-play');
const redPlayButton = document.getElementById('red-play');
const startMessage = document.getElementById('start-message');
const blueMessage = document.getElementById('blue-message');
const yellowMessage = document.getElementById('yellow-message');
const greenMessage = document.getElementById('green-message');
const redMessage = document.getElementById('red-message');
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

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  bluePlayButton.style.display = 'block';
  yellowPlayButton.style.display = 'none';
  greenPlayButton.style.display = 'none';
  redPlayButton.style.display = 'none';
  startMessage.style.display = 'block';
  for (i = 1; i <= 4; i += 1) {
    document.getElementById('b' + i).style.display = 'block';
    document.getElementById('y' + i).style.display = 'block';
    document.getElementById('g' + i).style.display = 'block';
    document.getElementById('r' + i).style.display = 'block';
  }
});

bluePlayButton.addEventListener('click', () => {
  rollDice();
});

yellowPlayButton.addEventListener('click', () => {
  rollDice();
});

greenPlayButton.addEventListener('click', () => {
  rollDice();
});

redPlayButton.addEventListener('click', () => {
  rollDice();
});

blue1.addEventListener('click', () => {
  if (document.getElementById('board-blue-base-1').children.length === 0) {
    moveBlue1();
  }
  if (document.getElementById('board-blue-base-1').children.length > 0 && diceResult === 1 || document.getElementById('board-blue-base-1').children.length > 0 && diceResult === 6) {
    document.getElementById(newPosition).appendChild(document.getElementById('b1'));
  }
  bluePlayButton.style.display = 'none';
  yellowPlayButton.style.display = 'block';
  startMessage.style.display = 'none';
  yellowMessage.style.display = 'block';
});

yellow1.addEventListener('click', () => {
  yellowPlayButton.style.display = 'none';
  greenPlayButton.style.display = 'block';
  yellowMessage.style.display = 'none';
  greenMessage.style.display = 'block';
});

green1.addEventListener('click', () => {
  greenPlayButton.style.display = 'none';
  redPlayButton.style.display = 'block';
  greenMessage.style.display = 'none';
  redMessage.style.display = 'block';
});

red1.addEventListener('click', () => {
  redPlayButton.style.display = 'none';
  bluePlayButton.style.display = 'block';
  redMessage.style.display = 'none';
  blueMessage.style.display = 'block';
});
