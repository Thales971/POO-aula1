//exemplo
const pessoa = {
    nome: "Thiago",
    idade: 30,
    ativo: true
};

console.log(pessoa.nome); // Acessando a propriedade "nome"
console.log(pessoa.idade); // Acessando a propriedade "idade"
console.log(pessoa.ativo); // Acessando a propriedade "ativo"


// Aluno
const aluno = {
    nome: "Thales",
    idade: 16,
    curso: "Desenvolvimento de sistemas",
    ativo: true
};

console.log(aluno.nome); // Acessando a propriedade "nome"
console.log(aluno.idade); // Acessando a propriedade "idade"
console.log(aluno.curso); // Acessando a propriedade "curso"
console.log(aluno.ativo); // Acessando a propriedade "ativo"

console.log(`O meu nome é ${aluno.nome}, tenho ${aluno.idade} anos e estou ${aluno.ativo ? "ativo" : "inativo"} no curso de ${aluno.curso}`)

//! Usando a palavra chave new
function pessoa2(nome, idade, ativo) {
    this.nome = nome;
    this.idade = idade;
    this.ativo = ativo;
}

const p1 = new pessoa2("Thales", 16, true);
const p2 = new pessoa2("Thiago", 30, false);

console.log(p1);
//Pessoa2 { nome: 'Thales', idade: 16, ativo: true }
console.log(p2);
//Pessoa2 { nome: 'Thiago', idade: 30, ativo: false }


//* Exemplos da aula 
const carroBertunho = {
    cor: "Rose",
    marca: "Renault"
}
console.log(carroBertunho);

const carroAna = {
    cor: "Preto",
    marca: "Limousine"
}
console.log(carroAna);

const carroBert= new Carro("Rose", "Renault");
this.cor = cor;
this.marca = marca;


//* Exemplo de aula2
function Aluno(nome, idade, vivo) {
    this.nome = nome;
    this.idade = idade;
    this.vivo = vivo;
}

const aluno1 = new Aluno("Thiago", 27, true);
const aluno2 = new Aluno("Marcelo", 50, false);
const aluno3 = new Aluno("Lidia", 25, true);

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);

aluno1.idade = aluno1.idade + 1; // Alterando a propriedade idade do objeto aluno1
console.log(aluno1.idade); // Acessando a propriedade idade do objeto aluno1    