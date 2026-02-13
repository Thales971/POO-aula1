class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerAniversario() {
        this.idade += 1;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Classe = molde
// Objeto = instância da classe

// Criando uma instância
const p1 = new Pessoa("Thiago", 27);
console.log(p1.apresentar()); // Olá, meu nome é Thiago e tenho 27 anos.

p1.fazerAniversario();
console.log(p1.apresentar()); // Olá, meu nome é Thiago e tenho 28 anos.

// Outra instância para teste
const p2 = new Pessoa("Maria", 25);
console.log(p2.apresentar()); // Olá, meu nome é Maria e tenho 25 anos.

//Calculadora

class Calculadora {
    constructor(cor) {
        this.cor = cor;
    }
    somar(n1, n2) {
        return n1 + n2;
    }
}

//Objeto
const minhaCalculadora =  new Calculadora("red");
console.log(minhaCalculadora.cor); // red
console.log(minhaCalculadora.somar(1, 2)); // 3


