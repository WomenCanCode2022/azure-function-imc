fCalcularImc = (peso, altura) => {
    return peso/(altura*altura)
};

fClassificacao = (imc) => {
    if (imc < 18.5) {
        return 'Voce esta abaixo do peso';
    } else if (imc < 24.9) {
        return 'Voce esta no peso ideal';
    } else {
        return 'Voce esta com sobrepeso';
    }
    };

module.exports = async function (context, req) {
    let nomeUsuario = String(req.query.nome);
    let pesoUsuario = Number(req.query.peso);
    let alturaUsuario = Number(req.query.altura);

    if (isNaN(pesoUsuario) || isNaN(alturaUsuario)) {
        return context.res.status(400).send('Formato de dados incorreto, o campo peso e altura aceitam somente numeros.');
    }

    let imcUsuario = fCalcularImc(pesoUsuario, alturaUsuario);
    let classificacaoUsuario = fClassificacao(imcUsuario);

    context.res.json({
        nome: nomeUsuario, 
        peso: pesoUsuario, 
        altura: alturaUsuario, 
        imc: imcUsuario, 
        classificacao: classificacaoUsuario
    });
}
