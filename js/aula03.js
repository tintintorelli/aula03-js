let numeroSorteado = parseInt(Math.random()*100);
let numeroSorteado2 = parseInt(Math.random()*100);
console.log(`Número Sorteado = ${numeroSorteado}`);

// 1 exemplo
if(numeroSorteado % 2 === 0){
    console.log('O  número é par');
} else {
    console.log(' O número é ímpar');  
}

// Exibir o proximo e  anterior do numero
let proximoNumero = numeroSorteado +1;
let anteriorNumero = numeroSorteado -1;
console.log(`Proximo número = ${proximoNumero}`);
console.log(`Número anterior = ${anteriorNumero}`);

numeroSorteado++;
console.log(`Novo numero = ${numeroSorteado}`);

numeroSorteado--;
console.log(`Novo numero = ${numeroSorteado}`);

numeroSorteado+=10;
console.log(`Novo numero = ${numeroSorteado}`);

numeroSorteado-=10;
console.log(`Novo numero = ${numeroSorteado}`);

numeroSorteado*=10;
console.log(`Novo numero = ${numeroSorteado}`);

numeroSorteado/=10;
console.log(`Novo numero = ${numeroSorteado}`);

// Sortear dois números exibir o maior
console.log(numeroSorteado, numeroSorteado2);

if (numeroSorteado > numeroSorteado2) {
    console.log(`Maior número = ${numeroSorteado}`);  
} else if (numeroSorteado2 > numeroSorteado) {
    console.log(`Maior número = ${numeroSorteado2}`);  
} else {
    console.log(`Os numeros são iguais`); 
}

// exercicio
let valor = parseInt(Math.random()*10001);
let rendimento = 0;
let valorTotal = 0;

if (valor <= 2000){
    rendimento = valor * 0.05;
    valorTotal = valor + rendimento;
}

else if (valor <= 4000){
    rendimento = valor * 0.10;
    valorTotal = valor + rendimento;
}

else if (valor <= 6000){
    rendimento = valor * 0.15;
    valorTotal = valor + rendimento;
}

else if (valor <= 8000){
    rendimento = valor * 0.20;
    valorTotal = valor + rendimento;
}

else {
    rendimento = valor * 0.25;
    valorTotal = valor + rendimento;
}

console.log(`Valor Inicial = ${valor.toFixed(2)}`);
console.log(`Valor do rendimento = ${rendimento.toFixed(2)}`);
console.log(`Valor Total = ${valorTotal.toFixed(2)}`);

