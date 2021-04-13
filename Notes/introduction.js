//let można redeklarować
let tekst = 'test';

//const nie można zmieniać
const pi = 3.14;

tekst.charAt(2);//zwraca "s" bo test jest wartością tekstu
tekst.charCodeAt(2);//zwraca "115" czyli z kodu ascii "s"
tekst.includes("st"); //zwraca boolean'a czy dana fraza zawiera dane ciąg liter

let zmienna = "Hello World!";
zmienna.split(" ");
zmienna.trim();//usuwa białe znaki

zmienna.toUpperCase();
zmienna.toLocaleLowerCase();

let number = 2.5; //ta zmienna moze byc zmiennoprzecinkowa jak i calkowita

//=== powrownuje typy dnacych
//== porównuje po konwersji niejawnej

Number.isFinite(number);//sprawdza czy liczba jest skończona
let liczba = 1.23456;
liczba.toFixed(2);//ustawia ilosc miejsc po przecinku
Math.PI;
Math.pow(2,4);

let tablica = [1,2,3,4,5,"six",true];//ogarnia wiele typow danych w tablicy

let funkcja = (parametr)=>({obiekt:parametr});

for(let index in obiekt)
{
    console.log("ser");
}