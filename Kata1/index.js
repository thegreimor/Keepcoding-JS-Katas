'use strict'


let number = 3;
let foo = "Foo";
let bar = "Bar";
let quix = "Quix";

let suma = "";



function Calculo(numeroelegido, numero, texto){
if (numeroelegido % numero == 0){ // Si es divisible entre ese numero
        suma += texto;
    } 
    

}

Calculo(number,3,foo);
Calculo(number,5,bar);
Calculo(number,7,quix);

let arraynumber = Array.from(String(number), Number);

function ArrayPosition(position){
if (arraynumber[position] == 3){
    suma += "Foo";
} else if (arraynumber[position] == 5){
    suma += "Bar";
} else if (arraynumber[position] == 7){
    suma += "Quix";
}
}


for (let i = 0; i < arraynumber.length; i++){
    ArrayPosition(i);
}


console.log(suma);


