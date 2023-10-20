var sayi1 = randomNumberGenerator(20);
var sayi2 = randomNumberGenerator(40);
var sayi3 = randomNumberGenerator(60);
var sayi4 = randomNumberGenerator(80);
var sayi5 = randomNumberGenerator(99);
var sayi6 = randomNumberGenerator(99);

console.log(
  "Kolon : " +
    sayi1 +
    " " +
    sayi2 +
    " " +
    sayi3 +
    " " +
    sayi4 +
    " " +
    sayi5 +
    " " +
    sayi6
);

function randomNumberGenerator(maxNumber) {
  return Math.ceil(Math.random() * maxNumber);
}
