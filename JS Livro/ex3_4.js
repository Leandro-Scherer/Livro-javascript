const prompt = require("prompt-sync")(); //adiciona o pacote ao programa
const pesoKg = Number(prompt("Peso da Ração (kg): ")); //le dados de entrada
const consumo = Number(prompt("Consumo Diário (gr): "));
const pesoGr = pesoKG * 1000; //cria variavel auxiliar pesoGr
const duracao = Math.floor(pesoGr / consumo); //calculo das respostas
const sobra = pesoGr % consumo;
console.log(`Duração: ${duracao} dias`); //dados de saida
console.log(`Sobra: ${sobra} gr `);
