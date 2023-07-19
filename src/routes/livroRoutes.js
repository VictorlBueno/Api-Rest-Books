import express from "express";
import LivroController from "../controllers/livrosController.js";

// acessa o método Router do express para configurar
const router = express.Router();

// define as rotas e o que acontece ao acessar
router
    // precisa estar em ordem mais específico de cima para baixo
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro);

export default router;