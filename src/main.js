const startButton = document.getElementById('button');

startButton.addEventListener('click', () => {
  buttonDice.style.display = 'block';
  rollDice();
  firstMovementBlue();
});
