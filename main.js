function carronovo(nome, fabricante, ano) {
    this.nome = nome;
    this.fabricante = fabricante;
    this.ano = ano;
}

function ModeloCarro(nome, fabricante, ano, cor) {
    carronovo.call(this, nome, fabricante, ano, cor);
    this.cor = cor;
}

const fordgt = new ModeloCarro("Ford GT", "FORD", 2016, "Branco - Vermelho");
const murcielago = new ModeloCarro("Lamborghini Murcielago", "Lamborghini", 2002, "Amarelo");


console.log(fordgt);
console.log(murcielago)
