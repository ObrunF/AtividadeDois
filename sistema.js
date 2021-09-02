let numeroDeAlunos = 10;

for (let contador = 1; contador <= numeroDeAlunos; contador++) {

    if (contador === 0) {
        console.log("O numero atual é ZERO");
    } else if (contador % 2 == 0 && contador > 5) {
        console.log("O número " + contador + " é PAR e maior que 5")
    } else if (contador % 2 == 0) {
        console.log("o numero" + contador + "é PAR")
        } else {
        console.log("O número " + contador + " é ÍMPAR")
    }  