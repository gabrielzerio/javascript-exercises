const getTheTitles = function(livros) {
    //return livros.map(livro => livro.title); ou desse jeito manualzão!
    let pegaTitulo = [];
    for(let i = 0; i <livros.length; i++){
        pegaTitulo.push(livros[i].title);
    }
    return pegaTitulo;

};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
