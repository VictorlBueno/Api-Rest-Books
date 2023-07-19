import express from "express";
import AutorController from "../controllers/autoresController.js";

// acessa o método Router do express para configurar
const router = express.Router();

// define as rotas e o que acontece ao acessar
router
    .get("/Autores", AutorController.listarAutores)
    .get("/Autores/:id", AutorController.listarAutorPorId)
    .post("/Autores", AutorController.cadastrarAutor)
    .put("/Autores/:id", AutorController.atualizarAutor)
    .delete("/Autores/:id", AutorController.excluirAutor);

export default router;