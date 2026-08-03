


let num1 = parseFloat(prompt("Ingresa el primer número:"));
let operacion = prompt("suma, resta, multiplicar, dividir");
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

// evalua la operación con switch
switch (operacion) {
    case "suma":
    case "Suma":
    case "SUMA":
    case "+":
        alert("El resultado de la suma es: " + (num1 + num2));
        break;

    case "resta":
    case "Resta":
    case "RESTA":
    case "-":
        alert("El resultado de la resta es: " + (num1 - num2));
        break;

    case "multiplicar":
    case "Multiplicar":
    case "MULTIPLICAR":
    case "*":
        alert("El resultado de la multiplicación es: " + (num1 * num2));
        break;

    case "dividir":
    case "Dividir":
    case "DIVIDIR":
    case "/":
        // validar que no intente dividir entre cero
        if (num2 === 0) {
            alert("No se puede dividir entre cero.");
        } else {
            alert("El resultado de la división es: " + (num1 / num2));
        }
        break;

    default:
        alert("Operación no válida.");
        break;


        // EJERCICIOS DE LA TAREA - 03/08/2026

        // (Facil)
        let uno = !true || false; //false
        let dos = false && !false; //false
        let tres = true && !false; //true

        //(Medio)
        let cuatro = 5 === 5 || !true; //true
        let cinco = !0 || 5 < 0; //true
        let seis = 3 > 4 && !0; //false

        //Avanzado
        let siete = ((false || true) && !false && true) || (true && false); //true
        let ocho = 6 === 3 + 3 && 9 / 3 >= 3; //true
        let nueve = !!false || ("1" == 1 && !false === true); //true

        //Hardcore
        let diez = !!true === !!(5 >= 5); //true
        let once = !(true && !true === !!(8 === 4 * 2)); //true

        //Ultra-Hardcore
        let doce = !(true && !true === !!(16 === 4 * 2 + 8)) !== false; //true

        //Leyenda
        let trece = !(
            (!(!(10 / 5 == "2") === false) != false) === 5 * 5 <= 100 / 4 &&
            !(1 + 1 !== 10 / 5) !== true
        ); //true

        //Inmortal
        let catorce = !!(
            (10 % 3 != 1 || typeof ("10" - 5) !== "number" || !!([] && {})) &&
            (12 * 4 === "48" || (7 <= "7" && "7" <= 7) || Boolean(0) === Boolean("0"))
        ); //true



}