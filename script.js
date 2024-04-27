// atividade1
function aloMundo() {
    alert("Alo Mundo")
}

//atividade2
function mostraNum() {
    let num = parseInt(prompt("Digite um número: "));
    alert("O número informado foi: " + num);

}

//atividade3
function soma() {
    let num1 = parseFloat(prompt("Digite um número: "));
    let num2 = parseFloat(prompt("Digite outro número: "));
    let soma = num1 + num2;
    alert("A soma é : " + soma);
    console.log(soma);
}

//atividade4
function media() {
    let num1 = parseFloat(prompt("Digite a primeira nota: "));
    let num2 = parseFloat(prompt("Digite a segunda nota: "));
    let num3 = parseFloat(prompt("Digite a terceira nota: "));
    let num4 = parseFloat(prompt("Digite a quarta nota: "));
    let media = (num1 + num2 + num3 + num4) / 4;
    alert("Sua média é : " + media);

}

//atividade5 
function conMetro() {
    let metros = parseInt((prompt("Digite a quantidade de metros: ")));
    let centimetros = metros * 100;
    alert(metros + " metros equivalem a " + centimetros + " centímetros");
}

//atividade6 
function areaCirc() {
    let raio = parseFloat((prompt("Digite o raio de um círculo: ")));
    let area = 3.14 * raio * raio;
    alert("A área é igual a: " + area);
}

//atividade7
function areaQuad() {
    let lado = parseFloat((prompt("Digite o valor do lado do quadrado: ")));
    let area = lado * lado;
    let dobro = area * 2;
    alert("A área é igual a: " + area + "  E seu dobro é igual a: " + dobro);
}

//atividade8
function salario() {
    let valor = parseFloat(prompt("Digite quanto você ganha por hora:"));
    let horas = parseFloat(prompt("Digite quantas horas trabalhadas no mês:"));
    let salario = valor * horas;
    alert("O seu salário nesse mês é de R$"+ salario);
}

//atividade9 
function farenToCel(){
    let fahrenheit= parseFloat(prompt("Informe um valor para graus Fahrenheit: "));
    let celsius = 5*(fahrenheit-32/9);
    alert("A temperatura em graus Celsius é: "+ celsius);
}

//atividade19 
function celToFaren(){
    let celsius= parseFloat(prompt("Informe um valor para graus Celsius: "));
    let fahrenheit = (celsius * 9/5)+32;
    alert("A temperatura em graus Fahrenheit é: "+ fahrenheit);
}