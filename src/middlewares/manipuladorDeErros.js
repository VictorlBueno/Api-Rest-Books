import mongoose from "mongoose";

// Middlewares: intercepta todos os erros passados pelo projeto e trata eles
// eslint-disable-next-line no-unused-vars
export default function manipuladorDeErros(erro, req, res, next) {
    // trata erros de caracteres do id
    if(erro instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos."});
    
    // trata erros quando a requisição não possuí os dados corretos
    } else if (erro instanceof mongoose.Error.ValidationError) {
        // coleta os erros e transforma em error.message
        const mensagensErro = Object.values(erro.errors)
            .map(erro => erro.message)
            .join("; ");

        res.status(400).send({message: `Os seguintes erros foram encontrados: ${mensagensErro}`});

    // trata erros do servidor
    } else {
        res.status(500).send({message: "Erro interno de servidor"});
    }
}