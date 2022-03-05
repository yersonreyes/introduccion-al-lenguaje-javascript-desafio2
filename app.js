var cantidadDeJugadas = parseInt(prompt("Cuantas veses quieres jugar"));

var contadorUsuario = 0;
var contadorMaquina = 0;

for (var i = 0; i < cantidadDeJugadas; i++) {
  var usuario = prompt("Ingresa tu jugada piedra, papel o tijera");
  var maquinaJugada = Math.floor(Math.random() * 3);
  var maquina;

  switch (maquinaJugada) {
    case 0:
      maquina = "tijera";
      break;
    case 1:
      maquina = "papel";
      break;
    case 2:
      maquina = "piedra";
      break;
  }

  if (usuario === "tijera") {
    if (maquina === "papel") {
      contadorUsuario++;
      console.log("Usaste tijera y la maquina papel tu GANAS!!");
    } else if (maquina === "piedra") {
      contadorMaquina++;
      console.log("Usaste tijera y la maquina piedra tu PIERDES!!");
    } else {
      console.log("Empataste con la maquina, nadie gana!!");
    }
  }

  if (usuario === "papel") {
    if (maquina === "piedra") {
      contadorUsuario++;
      console.log("Usaste papel y la maquina piedra tu GANAS!!");
    } else if (maquina === "tijera") {
      contadorMaquina++;
      console.log("Usaste papel y la maquina tijera tu PIERDES!!");
    } else {
      console.log("Empataste con la maquina, nadie gana!!");
    }
  }

  if (usuario === "piedra") {
    if (maquina === "tijera") {
      contadorUsuario++;
      console.log("Usaste piedra y la maquina tijera tu GANAS!!");
    } else if (maquina === "papel") {
      contadorMaquina++;
      console.log("Usaste piedra y la maquina papel tu PIERDES!!");
    } else {
      console.log("Empataste con la maquina, nadie gana!!");
    }
  }
}

if (contadorUsuario > contadorMaquina) {
  console.log(
    "el ganador es el Jugador " + contadorUsuario + " " + contadorMaquina
  );
} else if (contadorUsuario < contadorMaquina) {
  console.log(
    "el ganador es la maquina " + contadorMaquina + " " + contadorUsuario
  );
} else {
  console.log("esto es un EMPATE!! " + contadorUsuario + " " + contadorMaquina);
}
