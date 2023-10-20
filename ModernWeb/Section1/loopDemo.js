for (var i = 1; i <= 6; i++) {
  console.log(i + ". kolon");
  for (var j = 1; j <= 4; j++) {
    console.log(randomNumberGenerator());
  }
}

function randomNumberGenerator() {
  return Math.ceil(Math.random() * 99);
}
