function contador(numero, limite) {
    if (numero < limite) {
        console.log(numero);
        numero++;
        contador(numero, limite)
    }
}

contador(0, 10);

/* 1) Crea una funcion que cuente todos los numeros pares entre un numero de inicio y un limite*/

function contadorPares(numero, limite) {
    if (numero < limite) {
        if (numero % 2 === 0) { /* este % es para saber si el numero tiene un residuo de 0*/
            console.log(numero);
        }
        numero++;
        contadorPares(numero, limite)
    }
}

contadorPares(0, 100);

/*  2) Crea una funcion que cuente todos los numeros de dos en dos en reversa en una serie de numeros, ejemplo.
    Ej: Desde el 100 a 0... 100, 98, 96, 94, 92, 90....*/

function contadorReversa(numero, limite) {
    if (numero > limite) {
        console.log(numero);
        numero -= 2;
        contadorReversa(numero, limite)
    }
}

contadorReversa(100, -1);

/* 3) Crea una funcion que recree la sucesion de Fibonacci hasta el numero deseado mas cercano.*/

function fibonacci(a, b, limite) {
    if (a <= limite) {
        console.log(a);
        fibonacci(b, a + b, limite);
    }
}

fibonacci(0, 1, 144);