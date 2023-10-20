var sayi1 = randomNumberGenerator();
var sayi2 = randomNumberGenerator();
var sayi3 = randomNumberGenerator();
var sayi4 = randomNumberGenerator();
var sayi5 = randomNumberGenerator();
var sayi6 = randomNumberGenerator();

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

function randomNumberGenerator() {
  return Math.ceil(Math.random() * 99);
}
