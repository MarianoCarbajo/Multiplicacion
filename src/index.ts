/*• Implemente un método llamado “multiplicarArreglo” que recibe
como parámetros tres arreglos de Enteros del mismo tamaño
• Los dos primeros arreglos contienen los números que se quieren
multiplicar
• El tercer arreglo almacena el cálculo de la multiplicación de cada
posición de los dos arreglos*/
let dimensionArreglo: number = Number(
  prompt("Ingrese la dimensión del arreglo")
);
let arreglo1: number[] = new Array(dimensionArreglo);
let arreglo2: number[] = new Array(dimensionArreglo);
let arreglo3: number[] = new Array(dimensionArreglo);

let cargarArreglo = (vector: number[], cantidad: number): number => {
  for (let indice: number = 0; indice < cantidad; indice++) {
    vector[indice] = Number(
      prompt("Ingrese el valor para la posición " + indice)
    );
  }
};
let multiplicarArreglo = (
  v1: number[],
  v2: number[],
  v3: number[],
  cantidad: number
): number => {
  for (let indice: number = 0; indice < cantidad; indice++) {
    v3[indice] = v1[indice] * v2[indice];
  }
};
cargarArreglo(arreglo1, dimensionArreglo);
cargarArreglo(arreglo2, dimensionArreglo);
multiplicarArreglo(arreglo1, arreglo2, arreglo3, dimensionArreglo);
console.log(
  "El resultado de la multiplicación del arreglo1 (" +
    arreglo1 +
    ") por el arreglo2 (" +
    arreglo2 +
    ") es el arreglo3 (" +
    arreglo3 +
    ")"
);
