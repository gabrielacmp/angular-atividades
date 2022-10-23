/* Desafio: Desenvolver as aplicações utilizando POO:

b) Desenvovler uma calculadora com dois atributos e os métodos (soma, subtração, divisao e multiplicação) */
class Calculadora{
    constructor (valorA,valorB,operacao) {
        this.valorA = valorA;
        this.valorB = valorB;
        this.operacao = operacao;
    }
    
    calcularOperacao(){
        switch (this.operacao){
            case 1:
                let soma = this.valorA + this.valorB;
                return "Somei os números digitados: "+soma;
            break;
            case 2:
                let subtracao = this.valorA - this.valorB;
                return "Subtrai os números digitados: "+subtracao;
            break;
            case 3:
                let divisao = this.valorA / this.valorB;
                return "Dividi os números digitados: "+divisao;
            break;
            case 4:
                let multiplicacao = this.valorA * this.valorB;
                return "Multipliquei os números digitados: "+multiplicacao;
            break;
            default:
                return "Desculpe, não encontrei a operação que gostaria de realizar!";
        }
    }
}
//calculadora na operação de soma
var cal1 = new Calculadora(26,15,1);
console.log(cal1.calcularOperacao());
//calculadora na operação de subtração
var cal2 = new Calculadora(26,15,2);
console.log(cal2.calcularOperacao());
//calculadora na operação de divisão
var cal3 = new Calculadora(26,15,3);
console.log(cal3.calcularOperacao());
//calculadora na operação de multiplicação
var cal4 = new Calculadora(26,15,4);
console.log(cal4.calcularOperacao());