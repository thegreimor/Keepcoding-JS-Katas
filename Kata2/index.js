'use strict'

let romanoresultado = [];
let numerosromano = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
let numerosarabe = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

function aromano(numeroacalcular){
let sumareset = 0;
let resto = "";
let division = "";

for (let i = numerosromano.length; i >= 0; i--){

    if (numeroacalcular >= numerosarabe[i]){
        resto = numeroacalcular % numerosarabe[i];
        division = numeroacalcular / numerosarabe[i];

        if (Math.floor(division) < 4) {

        numeroacalcular = resto; 

        for (let x = 0; x < Math.floor(division); x++){

            romanoresultado += numerosromano[i];
        }
    } 
    }
}
}

aromano(3999);
console.log("Resultado en romano: " + romanoresultado);

// Romano a Arabe

let araberesultado = 0;
let romper = false;
function aarabe(romanoacalcular) {
    
while (romanoacalcular.length != 0){

for (let i = numerosarabe.length; i > 0; i--){

    
    if (romanoacalcular.indexOf(numerosromano[i]) === 0){
        araberesultado += numerosarabe[i];
        romanoacalcular = romanoacalcular.replace(numerosromano[i], "");
        
    }

} 

}
}

aarabe("MMMCMXCIX");
console.log("Resultado en arabe: " + araberesultado);


// Validación

// NOTAS PARA EL PROFESOR
/*
Solo he llegado a este punto en el cual puedo sacar "repeticiones" y dar la validación como erronea
si se cumple. Pero no llego a construir la forma de hacerlo con:
* Los símbolos I, X y C se suman si están a la derecha de otro mayor o igual.
* Los símbolos I, X y C se restan si están a la izquierda de otro mayor y solamente pueden anteponerse a los dos símbolos que le siguen en la sucesión.
* I se resta de V y X
* X se resta de L y C
* C se resta de D y M
* Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.
*/



let romanoavalidar = "XVIII";
let prohibidos = ["IIII", "XXXX", "CCCC", "MMMM", "VV", "LL", "DD"];
let mensaje = "Es válido";

while (romanoavalidar.lenght != 0 && romper == false){

    for (let i = prohibidos.length; i >= 0; i--){

        if (romanoavalidar.indexOf(prohibidos[i]) === 0){
                mensaje = "Es inválido";
                romper = true;
        
        } else {
            romper = true;
        }
         
        

    }

}


console.log(mensaje);



