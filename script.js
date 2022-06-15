function rollDice() {
  var NumDice = document.getElementById('input').value;

  setTimeout(function () {
    loop(NumDice);
  }, NumDice * 1000);
}

function loop(NumDice) {
  var container = document.getElementById('placeholder');
  for (let i = 0; i < NumDice; i++) {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    container.innerHTML += randomNumber + ' ';
  }
}

function Average() {
  document.getElementById('average').innerText =
    document
      .getElementById('placeholder')
      .innerText.split(' ')
      .reduce((a, b) => Number(a) + Number(b)) /
    document.getElementById('placeholder').innerText.split(' ').length;
}

function Total() {
  document.getElementById('total').innerText = document
    .getElementById('placeholder')
    .innerText.split(' ')
    .reduce((a, b) => Number(a) + Number(b));
}

function Reset() {
  document.getElementById('average').innerText = 0;
  document.getElementById('total').innerText = 0;
  document.getElementById('placeholder').innerText = '';
}
