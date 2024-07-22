// Definindo limite estático
const limit = 20;

console.log("exibindo os números primos até:", limit);
for(let i=2; i<=limit; i++){

    if(primos(i)){
        console.log(i)
    }
}

//criando a função para verificar se um número é ou não primo
function primos(num){

    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false; //Se um número(num) é divisível por qualquer número(i) entre 2 e a raiz quadrada deste número(num), então (num) não é primo.
        }
    }

    return true; //se ele for primo, retorna true
}