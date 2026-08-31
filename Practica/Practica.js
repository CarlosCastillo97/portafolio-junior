let nombre = "Carlos";

function suma (a, b){
    let c;
    c = a + b
    return c;
};

let numero = 7
if (numero%2 === 0){
    console.log("Tu numero es par")
}
else {
    console.log("Tu numero es impar")
}

let comidas=["Pizza", "Hamburguesa", "Sushi", "Papa"];

for(let i = 0; i < comidas.length; i++){
console.log(comidas[i]);
}

function contarComidas(lista) {
  return lista.length;
}

console.log(contarComidas(comidas));

if (nombre === "Carlos") {
  console.log("Coincide con el nombre");
} else {
  console.log("No coincide");
}

let total = suma(2, 4)
console.log(total);

function compararNumeros (a, b){
if (a < b) {
    console.log(a, "Es menor que", b)
}
else if (a === b) {
    console.log(a, "Es igual que", b)
}
else {
    console.log(a, "Es mayor que", b)
}
}

compararNumeros(2, 4);
compararNumeros(2, 2);
compararNumeros(8, 2);

function contarPorLetra(comidas, a) {
  let contador = 0;

  for (let i = 0; i < comidas.length; i++) {
    let inicial = comidas[i][0];

    if (a.toUpperCase() === inicial.toUpperCase()) {
      contador++;
    }
  }

  return contador;
}

console.log(contarPorLetra(comidas, "P"));
console.log(contarPorLetra(comidas, "p"));
console.log(contarPorLetra(comidas, "H"));
console.log(contarPorLetra(comidas, "X"));

//let palabra = "Pizza";
//console.log(palabra[0]);