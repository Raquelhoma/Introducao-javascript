/* var nome = "Raquel Homa";
var idade = 29;
var idade2 = 10;
var frase = 'Japão é o melhor time do mundo';

//alert(`Bem vindo ${nome} de ${idade} anos`);

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace('Japão', 'Brasil'));
console.log(nome.toLocaleUpperCase());
console.log(idade * idade2);
alert(frase.replace('Japão', 'Brasil')); */

//dicionario ou object
/* var fruta = {nome:'maça', cor:'vermelha'}
console.log(fruta);
alert(fruta.cor); */

/* var fruta = [{nome:'maça', cor:'vermelha'}, {nome:'uva', cor:'roxa'},{nome:'abacate', cor:'verde'}]
console.log(fruta[1].nome);
console.log(fruta[2].cor); */

/* var idade = prompt('Qual a sua idade?');
if(idade<18){
    alert('Você é menor de idade');
}else{
    alert('Você é maior de idade.')
} */
/* 
var count = 0;
while(count < 5){
    console.log(count);
    alert(count);
    count++;
} */

let d = new Date();
alert(
    Number(
        d.getDate()) + '/' + Number(d.getMonth()+1) + '/' + d.getFullYear() +'\n' + d.getHours()+ ':' + d.getMinutes() + ' horas'
        );
