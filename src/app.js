import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

// em caso de erro, envia uma mensagem para o console
db.on("error", console.log.bind(console, "Erro de conexão"));

// pede para abrir o banco de dados apenas uma vez
db.once("open", () => {
    console.log("Conexão feita com sucesso");
});

// instância o express
const app = express();

// interpreta o body do post 
app.use(express.json());

// chama as rotas e passa o parâmetro app do express
routes(app);

// faz uma chamada do Middlewares
app.use(manipuladorDeErros);

// exporta todo conteúdo do express
export default app;