var valorEmAnosLuzTexto = prompt("Qual o valor em Anos Luz que você quer converter?");

var valorEmAnosLuzNumero = parseFloat(valorEmAnosLuzTexto);

var valorEmKm = valorEmAnosLuzTexto * 9460536068.016;
var valorEmKmFixado = valorEmKm.toFixed(4);

alert(valorEmKmFixado + " km em " + valorEmAnosLuzTexto + " Anos-Luz");

//Revisão
//variáveis = guardar informações, números ou strings
//alert - parseInt - parseFloat - prompt (usuario pode digitar informação)
//operações = somar e multiplicar