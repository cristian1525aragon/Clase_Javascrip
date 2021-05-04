//hola mundo 
// alert('hola mundo');
 

// comentarios
/*
   otro tipo de comentario


sentencias 

alert('hola'); 
alert('mundo');


inserción automática de punto y coma

alert('hola') 
alert('mundo')


alert(3+2+1);

variables 

let mensaje;
mensaje = "hola"
alert(mensaje);

mensaje = "hola2"
alert(mensaje);

let a = 5;
let b = 2;
let suma = a + b;
console.log("el resultado de la suma es:" + suma);


// constante

const PI = 3.141624
//const COLOR_ROJO = "#FFFFF"
pi_dos = PI;
pi_dos = 7;
console.log(PI);
console.log(pi_dos);

*/

// tipos de datos 

let mensaje_3 = "hola";
mensaje_3 = 1234;


//números

let n = 123;
n = 12.456;

// valores numéricos especiales infinity, -infinity, Nan

console.log(1/0);
console.log(Infinity);

//Nan error de calculo, resultado de una operación matemática incorrecta o indefinida 

console.log("hola mundo " * 2)


let numero_grande = 123456789897654582697125464565255n;
console.log(numero_grande);

// tipo string

let texto = "hola";
let texto_dos = 'hola';
let texto_tres = ``; // backticks funcionalidad extendida interpolación  
 
let nombre = "cristian";
console.log(`${texto} ${nombre}`)

// Booleano 

let verdadero = true;
let falso = false;

let mayor = 4 > 1 ; // true 

// tipo de dato null, es un valor especial que no pertenece a ningún tipo de dato 

let edad = null;
console.log(edad);

let edad_dos;
console.log(edad_dos);


// operador tipeof 

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 0);
console.log(typeof true);
console.log(typeof 10n);
console.log(typeof "hola");

console.log(typeof(alert));
console.log(typeof(null));



let nuevo_nombre = prompt("cual es tu nombre?","" );
console.log(`hola joven, ${nuevo_nombre}`);


let helado = confirm("¿te gusta el helado?");
console.log(helado);


// operaciones básicas 

let a, b, resultado;

a = 5;
b = 2;

resultado = a + b;
resultado = a - b;
resultado = a / b;
resultado = a * b; 
resultado = a % b; // mod
resultado = a ** b; // potencia

// operación unitaria 


// Operaciones Unaria -

a = 1;
console.log(-a);

a = -1;
console.log(-a);

console.log(-true);
console.log(-false);

// ASIGNACIONES

a = 2 + 3;
a = b = c = 2 + 3;

c = 2 + 3;
b = c;
a = b;

c = 3 - (a = b + 1);

// Modificadores

a = a + 2;
a += 2;
a = a - 2
a -= 2;

// Incremento y Decremento

// ++ Incremento
// -- Decremento

a = 2;
a ++;
console.log(a); // 3

a = 2;
a --;
console.log(a); // 1

// Posición del incremento o decremento

a = 1;
b = ++ a;
console.log(b); // 2

a = 1;
b = a ++;
c = a;
console.log(b); // 1
console.log(c); // 2





