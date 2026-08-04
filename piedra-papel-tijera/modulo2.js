function determinarGanador(jugador1, jugador2) {

  // tolowerCase sirve para que se validen las letras se vuelvan mayúsculas, l oque escriba el usuario
  j1 = jugador1.toLowerCase();
  j2 = jugador2.toLowerCase();

  // JUGADAS VALIDAS
  let opcionesValidas = ["piedra", "papel", "tijera"];
  if (!opcionesValidas.includes(j1)) {
    return "Una o ambas jugadas no son válidas. Debes elegir: piedra, papel o tijera.";
  }

  // REGLAS DEL JUEGOO
  
  // 1. EMPATE
  if (j1 === j2) {
    return "¡Es un empate!";
  }

  // VICTORIA, EMPATE O DERROTA
  if (
    (j1 === "piedra" && j2 === "tijera") ||
    (j1 === "tijera" && j2 === "papel") ||
    (j1 === "papel" && j2 === "piedra")
  ) {
    return "¡Gana el Jugador 1! (" + j1 + " vence a " + j2 + ")";
  } else {
    // SI EL JUGADOR 1 NO GANÓ NI EMPATÓ SE ENTIENDE QUE PERDIÓ
    return "¡Gana el Jugador 2! (" + j2 + " vence a " + j1 + ")";
  }
}

let jugadaUsuario1 = prompt("Jugador 1: Elige piedra, papel o tijera");
let jugadaUsuario2 = prompt("Jugador 2: Elige piedra, papel o tijera");

let resultado = determinarGanador(jugadaUsuario1, jugadaUsuario2);

//RESULTADO
alert(resultado);
console.log(resultado);