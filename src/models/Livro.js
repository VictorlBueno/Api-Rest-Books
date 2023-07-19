import mongoose from "mongoose";

// define um modelo de objeto a ser enviado para o banco de dados
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {
            type: String, 
            // passa o valor e uma mensagem para casos de erro
            required: [true, "O título do livro é obrigatório"]
        },
        // associa com outro objeto autores
        autor: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "autores", 
            // passa o valor e uma mensagem para casos de erro
            required: [true, "O(a) autor(a) é obrigatório"]
        },
        editora: {
            type: String, 
            // passa o valor e uma mensagem para casos de erro
            required: [true, "A editora é obrigatória"]
        },
        paginas: {type: Number},
    }
);

// diz que o banco de dados possui uma "tabela" chamada livros com o formato do schema
// se não existir um banco chamado livros, ele cria uma ao criar a conexão
const livros = mongoose.model("livros", livroSchema);

export default livros;