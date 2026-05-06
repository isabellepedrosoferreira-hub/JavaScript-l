const livros = require('./listaLivros');
const maiorValor = require('./maiorValor');

for (let atual = 0; atual < livros.length - 1; atual++) {
 let maior = maiorValor(livros, atual);

 let livroAtual = livros[atual]; 
 console.log('posição atual', atual);
 console.log('livro atual', livros[atual]);

 let livroMaiorPreco = livros[maior];
 console.log('livro maior preço', livros[maior]);
 
 livros[atual] = livroMaiorPreco;
 livros[maior] = livroAtual;}  

console.log(livros);