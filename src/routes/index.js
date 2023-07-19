import express from "express";
import livros from "./livroRoutes.js";
import autores from "./autorRoutes.js";

// ao ser chamado irá receber o app
const routes = (app) => {
    // verificar a rota do app e passar um get caso seja "/"
    app.route("/").get((req, res) => {
        // retornar status 200 e conteúdo
        res.status(200).send({titulo: "Curso de node"});
    });

    // caso não seja "/", usar as rotas do livroRoutes
    app.use(
        express.json(), 
        livros,
        autores
    );
};

export default routes;