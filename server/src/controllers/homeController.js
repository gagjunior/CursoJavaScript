exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Titulo para testes',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
}

exports.trataPost = (req, res) => {
    res.send('Rota para post');
}