//Exercício 1: Livro
//Crie um objeto chamado "livro" com as seguintes propriedades: título, autor, ano de publicação.

const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
};

console.log(livro);
console.log(`Titulo: ${livro.titulo} `);
console.log(`Autor: ${livro.autor} `);
console.log(`Ano de Publicação: ${livro.anoPublicacao} `);

//Exercício 2: Filme
//Crie um objeto chamado "filme" com as seguintes propriedades: título, diretor, ano de lançamento.

const filme = {
  titulo: "O Poderoso Chefão",
  diretor: "Francis Ford Coppola",
  anoLancamento: 1972,
};

console.log(filme);
console.log(`Titulo: ${filme.titulo} `);
console.log(`Diretor: ${filme.diretor} `);
console.log(`Ano de Lançamento: ${filme.anoLancamento} `);
console.log(
  `O filme ${filme.titulo} foi dirigido por ${filme.diretor} e lançado no ano de ${filme.anoLancamento}`,
);

//Exercicio 3: Musica
//Crie um objeto chamado "musica" com as seguintes propriedades: titulo, artista e album

const musica = {
  titulo: "Skeptic",
  artista: "Slipknot",
  album: "We Are Not Your Kind",
};

console.log(musica);
console.log(`Titulo: ${musica.titulo}`);
console.log(`Artista: ${musica.artista}`);
console.log(`Album: ${musica.album}`);
console.log(
  `A música ${musica.titulo} é do artista ${musica.artista} e faz parte do álbum ${musica.album}`,
);

//🍽️ Exercício 4: Restaurante
//Crie um objeto chamado "restaurante" com as seguintes propriedades: nome, tipo de cozinha e localização.

const restaurante = {
  nome: "Restaurante do Zé",
  tipoCozinha: "Brasileira",
  localizacao: "Rua das Flores, 123",
};

console.log(restaurante);
console.log(`Nome: ${restaurante.nome}`);
console.log(`Tipo de Cozinha: ${restaurante.tipoCozinha}`);
console.log(`Localização: ${restaurante.localizacao}`);

//🎮 Exercício 5: Jogo de Vídeo Game
//Crie um objeto chamado "jogo" com as seguintes propriedades: título, desenvolvedor e plataforma.

const jogo = {
  titulo: "Dead by Daylight",
  desenvolvedor: "Behaviour Interactive",
  plataforma: "PC, PlayStation, Xbox, Nintendo Switch",
};

console.log(jogo);
console.log(`Titulo: ${jogo.titulo}`);
console.log(`Desenvolvedor: ${jogo.desenvolvedor}`);
console.log(`Plataforma: ${jogo.plataforma}`);
console.log(
  `O jogo ${jogo.titulo} foi desenvolvido por ${jogo.desenvolvedor} e está disponível para as seguintes plataformas: ${jogo.plataforma}`,
);

//📱 Exercício 6: Smartphone
//Crie um objeto chamado "smartphone com as seguintes propriedades: marca, modelo e ano de lançamento."

const smartphone = {
  marca: "Motorola",
  modelo: "Moto edge 50 pro",
  anoLancamento: 2024,
};

console.log(smartphone);
console.log(`Marca: ${smartphone.marca}`);
console.log(`Modelo: ${smartphone.modelo}`);
console.log(`Ano de Lançamento: ${smartphone.anoLancamento}`);
console.log(
  `O smartphone ${smartphone.modelo} é da marca ${smartphone.marca} e foi lançado no ano de ${smartphone.anoLancamento}`,
);

//🏆 Desafio Extra: Crie um objeto que represente você mesmo com as propriedades: nome, idade, cidade, profissão e hobbies (array). Depois, imprima uma apresentação completa usando template literals!

const Thales = {
  nome: "Thales",
  idade: 16,
  cidade: "Valinhos",
  profissao: "Estudante técnico de desenvolvimento de sistemas",
  hobbies: [
    "jogar video game",
    "assistir séries",
    "programar",
    "ouvir músicas",
  ],
};

console.log(Thales);
console.log(
  `Olá, meu nome é ${Thales.nome}, tenho ${Thales.idade} anos e moro em ${Thales.cidade}. Sou ${Thales.profissao} e meus hobbies incluem: ${Thales.hobbies.join(", ")}.`,
);
