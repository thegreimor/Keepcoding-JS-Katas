'use strict'

/*
Baraja
    Cantidad - 52
    Palos
        Picas
            Valores
                *2
                *3
                *4
                *5
                * 6
                * 7
                * 8
                * 9
                * 10 /Ten (T)
                * dama/Jack (J)
                * reina/Queen (Q)
                * rey/King (K)
                * as/Ace (A). 

        Corazones
        Treboles
        Diamantes

Mano
    Cantidad - 2
    CantidadCartas - 5
    Jugadas
        Trio
        Escalera
        Color
        Full
        Poker
        EscaleraColor
    

*/



class Palos {
    constructor(nombre, valores){
    this.nombre = nombre;
    this.valores = [2,3,4,5,6,7,8,9,10,"dama","reina","rey","as"];
    }
}


let picas = new Palos("Picas");
let corazones = new Palos("Corazones");
let treboles = new Palos("Treboles");
let diamantes = new Palos("Diamantes");
console.log(picas.nombre)
console.log(picas.valores)


// Operatividad \\
/*
La idea sería sacar un random de todos los palos mediante un bucle en el cual evalue que la carta(valor)
que saque en cada interacción no sea igual a los ya sacados (operadores relacionales). Quizás una forma 
de hacerlo sería registrar en un array las cartas que vayan saliendo e ir haciendo las consultas en cada 
interacción sobre ese mismo array.

Después, con las manos (dos array) se tendría que evaluar mediante condiciones cuales de las dos es ganadora.

Algunas jugadas como las escaleras se podrían registrar en un array o en un objeto "enlazado" al conjunto de 
valores definidos this.valores de Palos, para desde esa información, poder hacer comparaciones en las manos.

NOTA: dejo al menos el planteamiento por falta de tiempo para desarrollar el código.

*/




