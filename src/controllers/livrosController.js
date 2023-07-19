import livros from "../models/Livro.js";

export default class LivroController {
    
    // método get para o endereço /livros
    static listarLivros = async (req, res, next) => {
        try {
            // busca os livros no banco de dados e insere outro objeto no atributo autor
            const livrosResultado = await livros.find().populate("autor");

            // retorna estatus 200 e o json dos livros
            res.status(200).json(livrosResultado);
        } catch (err) {
            // Encaminha o erro para o next Middlewares
            next(err);
        }
    };

    // método post para dicionar um livro
    static cadastrarLivro = async (req, res, next) => {
        try {
            // cria um objeto de acordo com schema
            let livro = new livros(req.body);
    
            // persiste o objeto no banco
            await livro.save();
            
            // caso não aconteça nenhum erro, retorna o livro em JSON
            res.status(201).send(livro.toJSON());
            
        // caso aconteça algum erro, retorna o erro
        } catch (err) {
            // Encaminha o erro para o next Middlewares
            next(err);
        }  
    };

    static listarLivroPorId = async (req, res, next) => {
        const id = req.params.id;

        try {
            // procura o livro pelo id, busca o objeto do autor referente e só trás o nome
            const livro = await livros.findById(id).populate("autor", "nome");
            res.status(200).send(livro);

        } catch (err) {
            // Encaminha o erro para o next Middlewares
            next(err);
        }  
    };

    // método put para atualizar um livro
    static atualizarLivro = async (req,  res, next) => {
        // salva o parâmetro id
        const id = req.params.id;

        try {
            // procura o livro pelo id e define o novo conteúdo que estiver no corpo da requisição
            await livros.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: "Livro atualizado com sucesso"});

        } catch (err) {
            // Encaminha o erro para o next Middlewares
            next(err);
        }  
    };

    static excluirLivro = async (req, res, next) => {
        const id = req.params.id;

        try {
            await livros.findByIdAndDelete(id);
            res.status(200).send({message: "Livro deletado com sucesso"});

        } catch (err) {
            // Encaminha o erro para o next Middlewares
            next(err);
        }  
    };

    static listarLivroPorEditora = async (req, res, next) => {
        // pega o parâmetro passado na url chamado editora
        const editora = req.query.editora;

        try {
            // filtra pelo nome editora
            const livrosEncontrados = await livros.find({"editora": editora}, {});
            res.status(200).send(livrosEncontrados);

        } catch (err) {
            // Encaminha o erro para o next Middlewares
            next(err);
        }  
    };
}

