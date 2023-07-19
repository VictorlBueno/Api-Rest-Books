import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {
            type: String, 
            // passa o valor e uma mensagem para casos de erro
            required: [true, "O nome do(a) autor(a) é obrigatório"]
        },
        nacionalidade: {type: String}
    },
    {
        // versionKey é um número de versão da schema
        versionKey: false
    }
);

const autores = mongoose.model("autores", autorSchema);

export default autores;