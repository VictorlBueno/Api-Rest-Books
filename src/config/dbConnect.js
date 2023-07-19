import mongoose from "mongoose";

// faz conexão com MongoDB importando do .env
mongoose.connect(process.env.STRING_CONEXAO_DB);

// passa a conexão para a variável
let db = mongoose.connection;

export default db;