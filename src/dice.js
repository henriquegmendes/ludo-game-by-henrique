let diceResult = 0;
const buttonDice = document.getElementById('roll-dice');
const dice = document.getElementById('dice');
const number1 = document.getElementById('dot1');
const number2 = document.getElementById('dot2');
const number3 = document.getElementById('dot3');
const number4 = document.getElementById('dot4');
const number5 = document.getElementById('dot5');
const number6 = document.getElementById('dot6');
const number7 = document.getElementById('dot7');

function rollDice () {
  buttonDice.addEventListener('click', () => {
    diceResult = Math.ceil(Math.random() * 6);
    console.log('result', diceResult);
    console.log('number1', number1);
    dice.style.display = 'block';
    number1.style.display = 'none';
    number2.style.display = 'none';
    number3.style.display = 'none';
    number4.style.display = 'none';
    number5.style.display = 'none';
    number6.style.display = 'none';
    number7.style.display = 'none';
    console.log('number1', number1);
    switch (diceResult) {
      case 1:
        number7.style.display = 'block';
        break;
      case 2:
        number3.style.display = 'block';
        number4.style.display = 'block';
        break;
      case 3:
        number3.style.display = 'block';
        number4.style.display = 'block';
        number7.style.display = 'block';
        break;
      case 4:
        number1.style.display = 'block';
        number3.style.display = 'block';
        number4.style.display = 'block';
        number6.style.display = 'block';
        break;
      case 5:
        number1.style.display = 'block';
        number3.style.display = 'block';
        number4.style.display = 'block';
        number6.style.display = 'block';
        number7.style.display = 'block';
        break;
      case 6:
        number1.style.display = 'block';
        number2.style.display = 'block';
        number3.style.display = 'block';
        number4.style.display = 'block';
        number5.style.display = 'block';
        number6.style.display = 'block';
        break;
      default:
        break;
    }
  });
  return diceResult;
}
