const n1 = 2;
const n2 = 5;
const n3 = 1297432048;

imparpar(n1, n2, n3)

function imparpar(i, l, m){
    if(i % 2 === 0){
        console.log(i,"é um número par")
    }
    else {
        console.log(i, "é um número ímpar")
    }

    if(l % 2 === 0){
        console.log(l,"é um número par")
    }
    else {
        console.log(l, "é um número ímpar")
    }

    if(m % 2 === 0){
        console.log(m,"é um número par")
    }
    else {
        console.log(m, "é um número ímpar")
    }
}