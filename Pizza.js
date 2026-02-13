class Pizza {
  constructor(base, molho, cobertura, queijo) {
    this.base = base;
    this.molho = molho;
    this.cobertura = cobertura;
    this.queijo = queijo;
  }
  
  descricao() {
    return `Pizza com base ${this.base}, molho ${this.molho}, cobertura de ${this.cobertura} e queijo ${this.queijo}`;
  }
  
  trocarCobertura(novaCobertura) {
    this.cobertura = novaCobertura;
    return `A cobertura foi trocada com sucesso para ${this.cobertura}`;
  }
}