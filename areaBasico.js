//criando e definindo uma constante
const PI = 3.14159;

//Criando uma variável
var radius = 5;


function calculateArea(radius) {
    // Definindo uma variável como let
    let area;
    //calculando a área
    area = PI * radius  ** 2;
    return area;
}

var calculatedArea = calculateArea(radius);


console.log("O raio é igual a: "+radius);
console.log("A área do círculo é:", calculatedArea);