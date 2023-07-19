import autores from "../models/Autor.js";

export default class autorController {
    
    // método get para o endereço /Autores
    static listarAutores = async (req, res, next) => {
        try {
            // busca os autores no banco de dados
            const autoresResultado = await autores.find();
            // retorna estatus 200 e o json dos autores
            res.status(200).json(autoresResultado);
        } catch (err) {
            // Encaminha o erro para o next Middlewares
            next(err);
        }
    };

    // método post para dicionar um autor
    static cadastrarAutor = async (req, res, next) => {
        try {
            // cria um objeto de acordo com schema
            let autor = new autores(req.body);
    
            // persiste o objeto no banco
            await autor.save();
            
            // caso não aconteça nenhum erro, retorna o autor em JSON
            res.status(201).send(autor.toJSON());
            
        // caso aconteça algum erro, retorna o erro
        } catch (err) {
            // Encaminha o erro para o next Middlewares
            next(err);
        }  
    };

    static listarAutorPorId = async (req, res, next) => {
        try {
            const id = req.params.id;

            // procura o autor pelo id
            const autoresResultado = await autores.findById(id);

            // trata erros para caso de id não localizado
            if(autoresResultado !== null) {
                res.status(200).send(autoresResultado);

            } else {
                res.status(404).send({message: "Id do autor não localizado."});
            }

        } catch (err) {
            // Encaminha o erro para o next Middlewares
            next(err);
        }  
    };

    // método put para atualizar um autor
    static atualizarAutor = async (req,  res, next) => {
        // salva o parâmetro id
        const id = req.params.id;

        try {
            // procura o autor pelo id e define o novo conteúdo que estiver no corpo da requisição
            await autores.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: "Autor atualizado com sucesso"});

        } catch (err) {
            // Encaminha o erro para o next Middlewares
            next(err);
        }  
    };

    static excluirAutor = async (req, res, next) => {
        const id = req.params.id;

        try {
            await autores.findByIdAndDelete(id);
            res.status(200).send({message: "Autor deletado com sucesso"});

        } catch (err) {
            // Encaminha o erro para o next Middlewares
            next(err);
        }  
    };
}

