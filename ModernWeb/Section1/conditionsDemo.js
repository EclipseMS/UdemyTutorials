var sayi1 = 29;
var sayi2 = 30;
var sayi3 = 2;

var enBuyukSayi;

if (sayi1 >= sayi2 && sayi1 >= sayi3) {
  enBuyukSayi = sayi1;
} else if (sayi2 >= sayi1 && sayi2 >= sayi3) {
  enBuyukSayi = sayi2;
} else {
  enBuyukSayi = sayi3;
}

console.log("En büyük sayı: " + enBuyukSayi);
