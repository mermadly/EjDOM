var color = prompt('Ingrese un color (verde, azul, rojo)');

var hlink = document.querySelector('a');

if (color === 'verde' || color === 'azul' || color === 'rojo') {
    hlink.classList.add (color)
}