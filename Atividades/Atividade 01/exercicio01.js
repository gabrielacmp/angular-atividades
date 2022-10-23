/* Desafio: Desenvolver as aplicações utilizando POO:

a) João trabalha em uma empresa de contabilidade e precisa criar um pequeno programa que:
	-> Aumente o salário de um funcionário em 10% caso ele atinja a meta. 
	O atributo resultado deverá ser privado (pesquisar sobre os metodos get e set para encapsulamento do atributo privado)  */
class Funcionario{
    constructor (salario,metaDesejada, metaAtingida){
        this.salario = salario;
        this.metaDesejada = metaDesejada;
        this.metaAtingida = metaAtingida;
    }
    
    aumentoSalario(){
        if(this.metaAtingida > this.metaDesejada){
            let resultado = (this.salario*0.1)+ this.salario;
            return "O novo salário é de: R$" +resultado;
        }
        else {
            return "Não foi possível calcular o aumento porque a meta não foi atingida como esperado.";
        }
    }
}
//criando o objeto Funcionário
var fun1 = new Funcionario(1000.0,11,12);
console.log(fun1.aumentoSalario());